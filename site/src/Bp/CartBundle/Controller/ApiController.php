<?php

namespace Bp\CartBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Template;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Method;
use Bp\ProductBundle\Entity\Photo;
use Bp\ProductBundle\Entity\CustomPack;
use Symfony\Component\Serializer\Serializer;
use Symfony\Component\Serializer\Encoder\XmlEncoder;
use Symfony\Component\Serializer\Encoder\JsonEncoder;
use Symfony\Component\Serializer\Normalizer\GetSetMethodNormalizer;
use JMS\Serializer\SerializationContext;


/**
* @Route("/api")
*/
class ApiController extends Controller
{
    /**
     * @Route("/cart",  options={"expose"=true})
     * @Template()
     * @Method("GET")
     */
    public function cartAction(Request $request)
    {
        $this->checkAjax($request);   
        $em = $this->getDoctrine()->getEntityManager();
        $cart = $this->container->get("cart");
        $cart = $cart->getSerializedCart();


        $serializer = $serializer = $this->container->get('jms_serializer');
        $jsonContent = $serializer->serialize($cart, 'json',SerializationContext::create()->enableMaxDepthChecks());
        

        $response = new Response(json_encode(
                array(  
                        "status" =>"success", 
                        "data" => array ("cart" => $cart)
                    )
                ));

        $response->headers->set('Content-Type', 'application/json');
        return $response;
    }

    /**
     * @Route("/cart/clear", options={"expose"=true})
     * @Template()
     * @Method("POST")
     */
    public function clearCartAction(Request $request)
    {
        $this->checkAjax($request);   
        $em = $this->getDoctrine()->getEntityManager();
        $cart = $this->container->get("cart");
        $cart->clear();
        $cart = $cart->getCart();
        $response = new Response(json_encode(
                array(  
                        "status" =>"success", 
                        "data" => array("cart" => $cart)
                    )
                ));

        $response->headers->set('Content-Type', 'application/json');
        return $response;
    }

    /**
     * @Route("/cart/set-quantity", options={"expose"=true})
     * @Template()
     * @Method("GET")
     */
    public function addToCartAction(Request $request)
    {
        $this->checkAjax($request);   
        $type = $request->get("type");
        $id = $request->get("id");
        $quantity = $request->get("quantity");

        if(!$type || !$id || !$quantity) return $this->returnError("La requête doit comporter 'type', 'id' et 'quantity'");


        $em = $this->getDoctrine()->getEntityManager();
        $cart = $this->container->get("cart");

        try{
            $item = $this->getItem($type,$id);
        }catch(\Exception $e) {
            return $this->returnError($e->getMessage());
        }
        
        $cart->addObject($item, $quantity);

        return $this->cartAction($request);
    }


    /**
     * @Route("/cart/remove", options={"expose"=true})
     * @Template()
     * @Method("GET")
     */
    public function removeToCartAction(Request $request)
    {
        $this->checkAjax($request);   
        $type = $request->get("type");
        $id = $request->get("id");


        if(!$type || !$id ) return $this->returnError("La requête doit comporter 'type', 'id'.");


        $em = $this->getDoctrine()->getEntityManager();
        $cart = $this->container->get("cart");

        try{
            $item = $this->getItem($type,$id);
        }catch(\Exception $e) {
            return $this->returnError($e->getMessage());
        }

         $cart->removeObject($item);



        $cart = $cart->getCart();
        $serializer = $serializer = $this->container->get('jms_serializer');
        $jsonContent = $serializer->serialize($cart, 'json',SerializationContext::create()->enableMaxDepthChecks());
        
        $response = new Response(json_encode(
                array(  
                        "status" =>"success", 
                        "data" => array("cart" => $cart)
                    )
                ));

        $response->headers->set('Content-Type', 'application/json');
        return $response;
    }

    /**
     * @Route("/delete-pack", options={"expose"=true})
     * @Template()
     * @Method("GET")
     */
    public function deletePackAction(Request $request)
    {
        $id = $request->get("id");
        $em = $this->getDoctrine()->getManager();

        $customPack = $em->getRepository("BpProductBundle:CustomPack")->findOneById($id);

        if(!$customPack) return $this->returnError("Aucun custom pack pour cette référence ".$id);
        if($customPack->getUser() != $this->getUser()) return $this->returnError("L'utilisateur n'est pas propriétaire de ce custom pack.");
        $em->remove($customPack);
        $em->flush();
        $response = new Response(json_encode(
                array("status" => "success", "data" => null)
                ));

        $response->headers->set('Content-Type', 'application/json');
        return $response;
    }

    /**
     * @Route("/create-pack", options={"expose"=true})
     * @Template()
     * @Method("POST")
     */
    public function createPackAction(Request $request)
    {
        $encoders = array(new XmlEncoder(), new JsonEncoder());
        $normalizers = array(new GetSetMethodNormalizer());
        $serializer = new Serializer($normalizers, $encoders);
        $cart = $this->get("cart");
        //$type = $request->get("type");
        $ids = $request->get("ids");
        $em = $this->getDoctrine()->getEntityManager();
        $products = $em->getRepository("BpProductBundle:Product")->findById($ids);
        $refGen = $this->get("reference.generator");
        if(!$products)return $this->returnError("0 produits renvoyé");

        $customPack = new CustomPack();
        $customPack->setUser($this->getUser());
        $customPack->setReference($refGen->generateReference("customPack"));
        $price = 35;
        foreach($products as $p)
        {
            $price += $p->getTaxe();
            $customPack->addProduct($p);
        }

        $customPack->setPrice($price);
        $em->persist($customPack);
        $em->flush();
        $cart->addObject($customPack, 1);

        $data = array( 'id' => $customPack->getId() );

        $response = new Response(json_encode(
                array("status" => "success", "data" => $data)
                ));

        $response->headers->set('Content-Type', 'application/json');
        return $response;
    }

    /**
     * @Route("/edit-pack", options={"expose"=true})
     * @Template()
     * @Method("POST")
     */
    public function editPackAction(Request $request)
    {
        $idPack = $request->get("id_pack");
        $ids = $request->get("ids");
        $em = $this->getDoctrine()->getEntityManager();
        $customPack = $em->getRepository("BpProductBundle:CustomPack")->findOneById($idPack);

        if(!$customPack) return $this->returnError("Pas de Custom Pack pour l'id $idPack");

        $products = $em->getRepository("BpProductBundle:Product")->findById($ids);
        //on empty the customPack
        foreach($customPack->getProducts() as $p)
        {
            $customPack->removeProduct($p);
        }
        foreach($products as $product)
        {
            $customPack->addProduct($product);
        }
        $em->persist($customPack);
        $em->flush();
        $response = new Response(json_encode(
                array("status" => "success", "data" => null)
                ));

        $response->headers->set('Content-Type', 'application/json');
        return $response;
    }

    /**
     * @Route("/custom-pack", options={"expose"=true})
     * @Template()
     * @Method("GET")
     */
    public function customPackAction(Request $request)
    {
        $id = $request->get("id");
        $em = $this->getDoctrine()->getEntityManager();
        $customPack = $em->getRepository("BpProductBundle:CustomPack")->findOneById($id);

        if(!$customPack) return $this->returnError("Pas de Custom Pack pour l'id $id");

        $serializer = $serializer = $this->container->get('jms_serializer');
        $jsonContent = $serializer->serialize($customPack, 'json',SerializationContext::create()->enableMaxDepthChecks());
       

        $response = new Response(json_encode(array("status"=>"success", "data" => json_decode($jsonContent)) ) );

        $response->headers->set('Content-Type', 'application/json');
        return $response;

        return true;
    }

    /**
     * @Route("/products", options={"expose"=true})
     * @Template()
     * @Method("GET")
     */
    public function productsAction(Request $request)
    {
        $limit = $request->get("limit");
        $offset = $request->get("offset");
        $category = $request->get("category");
        $brand = $request->get("brand");
        $this->checkAjax($request);  
        $em = $this->getDoctrine()->getEntityManager();
        $products = $em->getRepository("BpProductBundle:Product")->findPagination($offset,$limit, $category, $brand);

        if(count($products) == 0 ) return $this->returnError("0 produits renvoyé");

        $productArray = array();
        $photo = new Photo();
        $serializer = $serializer = $this->container->get('jms_serializer');
        // foreach($products as $p)
        // {
     
        //     if($p["path"])
        //     {
        //         $p["path"]  =   $photo->getUploadDir() . "/" . $p["path"];
        //     }
        //     $productArray[] = $p;
        // }
        $jsonContent = $serializer->serialize($products, 'json',SerializationContext::create()->enableMaxDepthChecks());
        $response = new Response(json_encode(
                array(  
                        "status" =>"success", 
                        "data" => array ("products" => json_decode($jsonContent), "offset" => $offset, "limit" =>$limit)
                    )
                ));

        $response->headers->set('Content-Type', 'application/json');
        return $response;
    }

    /**
     * @Route("/product", options={"expose"=true})
     * @Template()
     * @Method("GET")
     */
    public function productAction(Request $request)
    {
        $liip_imagine = $this->get('liip_imagine.cache.manager');
        $id = $request->get("id");
        $filter = ($request->get("filter")) ? $request->get("filter") : "type_medium";
        $em = $this->getDoctrine()->getEntityManager();
        $product = $em->getRepository("BpProductBundle:Product")->findOneById($id);

        if(!$product) return $this->returnError("Pas de produit pour cet id");
        $serializer = $serializer = $this->container->get('jms_serializer');
        // $galery = array();
        // foreach($product->getPhotos() as $f)
        // {
        //     $medium = $liip_imagine->getBrowserPath($f->getWebPath(), 'medium');
        //     $large = $liip_imagine->getBrowserPath($f->getWebPath(), 'large');
        //     $small = $liip_imagine->getBrowserPath($f->getWebPath(), 'small');
        //     $galery[] = array("id" =>$f->getId(), "path"=> $f->getWebPath(), "small" =>$small, "medium" =>$medium, "large" =>$large,"description" => $f->getDescription(),"alt" => $f->getAlt());
        // }
        // $path = ($product->getMainPhoto()) ? $product->getMainPhoto()->getWebPath() : "";
        // $array = array(
        //         "id" => $product->getId(),
        //         "name" => $product->getName(),
        //         "path" =>  $path,
        //         "description" => $product->getDescription() ,
        //         "price" => $product->getPrice() ,
        //         "taxe" => $product->getTaxe() ,
        //         "reference" => $product->getReference() ,
        //         "brand" => ($product->getBrand()) ? $product->getBrand()->getName() : null ,
        //         "specificite" => $product->getSpecificite(),
        //         "onHome" => $product->getOnHome(),
        //         "quantity" => $product->getQuantity(),
        //         "galery" => $galery,
        //     );
        $jsonContent = $serializer->serialize($product, 'json',SerializationContext::create()->enableMaxDepthChecks());

        $response = new Response(json_encode(
                array(  
                        "status" =>"success", 
                        "data" => json_decode($jsonContent)
                    )
                ));
        $response->headers->set('Content-Type', 'application/json');
        return $response;
    }


    /**
     * @Route("/pack", options={"expose"=true})
     * @Template()
     * @Method("GET")
     */
    public function packAction(Request $request)
    {
        $liip_imagine = $this->get('liip_imagine.cache.manager');
        $id = $request->get("id");
        $filter = ($request->get("filter")) ? $request->get("filter") : "type_medium";

        $em = $this->getDoctrine()->getEntityManager();
        $pack = $em->getRepository("BpProductBundle:Pack")->findOneById($id);

        if(!$pack) return $this->returnError("Pas de pack pour cet id");

        $galery = array();
        foreach($pack->getPhotos() as $f)
        {
            $thumbnail = $liip_imagine->getBrowserPath($f->getWebPath(), $filter);
            $galery[] = array("id" => $f->getId(), "path"=> $f->getWebPath(), "thumbnail" =>$thumbnail,"description" => $f->getDescription(),"alt" => $f->getAlt());

        }


        $array = array(
                "name" => $pack->getName(),
                "path" => ($pack->getMainPhoto()) ? $pack->getMainPhoto()->getWebPath()  : null,
                "description" => $pack->getDescription() ,
                "price" => $pack->getPrice() ,
                "reference" => $pack->getReference() ,
                "galery" => $galery
            );

        
        $response = new Response(json_encode(
                array(  
                        "status" =>"success", 
                        "data" => $array
                    )
                ));
        $response->headers->set('Content-Type', 'application/json');
        return $response;

    }


    /**
     * @Route("/packs", options={"expose"=true})
     * @Template()
     * @Method("GET")
     */
    public function packsAction(Request $request)
    {
        $limit = $request->get("limit");
        $offset = $request->get("offset");
        $this->checkAjax($request);  
        $filter = ($request->get("filter")) ? $request->get("filter") : "type_medium";
        $em = $this->getDoctrine()->getEntityManager();
        $packs = $em->getRepository("BpProductBundle:Pack")->findPagination($offset,$limit);
        $liip_imagine = $this->get('liip_imagine.cache.manager');
        if(count($packs) ==0) return $this->returnError("0 pack renvoyé");

        $packArray = array();
        $photo = new Photo();

        foreach($packs as $p)
        {
            if($p["path"])
            {
                $p["path"]  =   $photo->getUploadDir() . "/" . $p["path"];
                $p["thumbnail"] = $liip_imagine->getBrowserPath($p["path"], $filter);
            }
            $packArray[] = $p;
        }

        $response = new Response(json_encode(
                array(  
                        "status" =>"success", 
                        "data" => array ("packs" => $packArray, "offset" => $offset, "limit" =>$limit)
                    )
                ));

        $response->headers->set('Content-Type', 'application/json');
        return $response;
    }
    


    private function checkAjax($request)
    {
        if( $this->container->getParameter("kernel.environment") != "dev" && !$request->isXmlHttpRequest()) throw $this->createNotFoundException('Le produit n\'existe pas');
    }

    private function returnError($name)
    {
        $response = new Response(json_encode(
                array(  
                        "status" =>"error", 
                        "error" => $name,
                        "data" => null
                    )
                ));

        $response->headers->set('Content-Type', 'application/json');
        return $response;
    }

    private function getItem($type,$id)
    {
        $em = $this->getDoctrine()->getEntityManager();

        switch ($type) {
            case 'Pack':
                $item = $em->getRepository("BpProductBundle:Pack")->findOneActiveById($id);
                break;
            
            case 'Product':
                $item = $em->getRepository("BpProductBundle:Product")->findOneActiveById($id);
                break;
            case "CustomPack":
                $item = $em->getRepository("BpProductBundle:CustomPack")->findOneActiveById($id);
            default:
                throw new \Exception("Désolé, ce type n'existe pas. Choisissez entre 'Pack', 'Product', 'CustomPack'.");
                break;
        }
        return ($item) ? $item : false;
    }
}
