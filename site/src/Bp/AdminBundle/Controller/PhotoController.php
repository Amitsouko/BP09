<?php

namespace Bp\AdminBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Method;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Template;
use Bp\ProductBundle\Entity\Type;
use Bp\ProductBundle\Entity\Photo;
use Bp\ProductBundle\Form\PhotoType;
use Symfony\Component\HttpFoundation\Request;

/**
 * @Route("/admin")
 */
class PhotoController extends Controller
{
    /**
     * @Route("/photo/add/{id}/{type}")
     * @Template()
     */
    public function addAction(Request $request, $id, $type)
    {
        $em = $this->getDoctrine()->getManager();
        $packProduct = false;
        if($type == "product")
        {
            $packProduct = $em->getRepository("BpProductBundle:Product")->findOneById($id);
            $redirectRoute = "admin_product_show";        
        }else if($type == "pack")
        {
            $packProduct = $em->getRepository("BpProductBundle:Pack")->findOneById($id);
            $redirectRoute = "admin_pack_show";
        }

        if(!$packProduct) throw new \Exception("Pas de produit pour l'id $id");

        $entity = new Photo();

        $form = $this->createForm(new PhotoType(), $entity);
        $form->add('submit', 'submit', array('label' => 'Create'));


        $form->handleRequest($request);

        if($form->isValid()) {
            $entity->setLastUpdate(new \DateTime("now"));
            if(!$packProduct->getMainPhoto())
            {
                $packProduct->setMainPhoto($entity);
                $em->persist($packProduct);
            }
            if($type == "product")
            {
                $entity->setProduct($packProduct);      
            }else if($type == "pack")
            {
                $entity->setPack($packProduct);
            }
            
            $em->persist($entity);
            $em->flush();

            return $this->redirect($this->generateUrl($redirectRoute, array('id' => $packProduct->getId())));
        }


        return array(
            'product' => $packProduct,
            'form'   => $form->createView(),
        );
    }

    /**
     * @Route("/photo/setMain")
     * @Method("POST")
     * @Template()
     */
    public function setMainAction(Request $request)
    {
        $em = $this->getDoctrine()->getManager();
        $type = $request->get("type");
        $id = $request->get("id");
        $idPhoto = $request->get("id_photo");

        switch ($type) {
            case 'product':
                $entity = $em->getRepository("BpProductBundle:Product")->findOneById($id);
                $redirectRoute = 'admin_product_show'; 
                break;

            case 'pack':
                $entity = $em->getRepository("BpProductBundle:Pack")->findOneById($id);
                $redirectRoute = 'admin_pack_show'; 
                break;
            

            default:
                throw new \Exception("Sorry, type undefined or ni existing.");
                break;
        }
        $photo = $em->getRepository("BpProductBundle:Photo")->findOneById($idPhoto);
        $entity->setMainPhoto($photo);
        $em->persist($entity);
        $em->flush();
        return $this->redirect($this->generateUrl($redirectRoute, array('id' => $entity->getId())));
    }
}
