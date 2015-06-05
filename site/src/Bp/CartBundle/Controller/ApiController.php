<?php

namespace Bp\CartBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Template;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Method;
use Bp\ProductBundle\Entity\Photo;
use Symfony\Component\Serializer\Serializer;
use Symfony\Component\Serializer\Encoder\XmlEncoder;
use Symfony\Component\Serializer\Encoder\JsonEncoder;
use Symfony\Component\Serializer\Normalizer\GetSetMethodNormalizer;

/**
* @Route("/api")
*/
class ApiController extends Controller
{
    /**
     * @Route("/cart")
     * @Template()
     * @Method("GET")
     */
    public function cartAction(Request $request)
    {
        $this->checkAjax($request);   
        $em = $this->getDoctrine()->getEntityManager();
        $cart = $this->container->get("cart");
        $cart = $cart->getCart();
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
     * @Route("/cart/clear")
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
     * @Route("/cart/set-quantity")
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
     * @Route("/cart/remove")
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
     * @Route("/products")
     * @Template()
     * @Method("GET")
     */
    public function productsAction(Request $request)
    {
        $limit = $request->get("limit");
        $offset = $request->get("offset");
        $this->checkAjax($request);  
        $em = $this->getDoctrine()->getEntityManager();
        $products = $em->getRepository("BpProductBundle:Product")->findPagination($offset,$limit);

        if(count($products) ==0) return $this->returnError("0 produits renvoyé");

        $productArray = array();
        $photo = new Photo();

        foreach($products as $p)
        {
            if($p["path"])
            {
                $p["path"]  =   $photo->getUploadDir() . $p["path"];
            }
            $productArray[] = $p;
        }
        $response = new Response(json_encode(
                array(  
                        "status" =>"success", 
                        "data" => array ("products" => $productArray, "offset" => $offset, "limit" =>$limit)
                    )
                ));

        $response->headers->set('Content-Type', 'application/json');
        return $response;
    }

    /**
     * @Route("/product")
     * @Template()
     * @Method("GET")
     */
    public function productAction(Request $request)
    {
        $encoders = array(new XmlEncoder(), new JsonEncoder());
        $normalizers = array(new GetSetMethodNormalizer());
        $serializer = new Serializer($normalizers, $encoders);
        $liip_imagine = $this->get('liip_imagine.cache.manager');

        $id = $request->get("id");
        $filter = ($request->get("filter")) ? $request->get("filter") : "type_medium";
        $em = $this->getDoctrine()->getEntityManager();
        $product = $em->getRepository("BpProductBundle:Product")->findOneById($id);

        if(!$product) return $this->returnError("Pas de produit pour cet id");

        $galery = array();
        foreach($product->getPhotos() as $f)
        {
            $thumbnail = $liip_imagine->getBrowserPath($f->getWebPath(), $filter);
            $galery[] = array("path"=> $f->getWebPath(), "thumbnail" =>$thumbnail);

        }

        $array = array(
                "name" => $product->getName(),
                "path" => $product->getMainPhoto()->getWebPath() ,
                "description" => $product->getDescription() ,
                "price" => $product->getPrice() ,
                "taxe" => $product->getTaxe() ,
                "reference" => $product->getReference() ,
                "brand" => $product->getBrand()->getName() ,
                "specificite" => $product->getSpecificite(),
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
     * @Route("/packs")
     * @Template()
     * @Method("GET")
     */
    public function packsAction(Request $request)
    {
        $limit = $request->get("limit");
        $offset = $request->get("offset");
        $this->checkAjax($request);  
        $em = $this->getDoctrine()->getEntityManager();
        $packs = $em->getRepository("BpProductBundle:Product")->findPagination($offset,$limit);

        if(count($packs) ==0) return $this->returnError("0 pack renvoyé");

        $packArray = array();
        $photo = new Photo();

        foreach($packs as $p)
        {
            if($p["path"])
            {
                $p["path"]  =   $photo->getUploadDir() . $p["path"];
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
    

    /**
     * @Route("/embed/cart")
     * @Template()
     */
    public function embedCartAction(Request $request)
    {
        $cart = $this->container->get("cart");
        $cart = $cart->getCart();
        return array("cart" => $cart);
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
