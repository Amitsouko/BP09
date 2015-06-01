<?php

namespace Bp\AdminBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
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
     * @Route("/photo/add/{idProduct}")
     * @Template()
     */
    public function addAction(Request $request, $idProduct)
    {
        $em = $this->getDoctrine()->getManager();
        $product = $em->getRepository("BpProductBundle:Product")->findOneById($idProduct);

        if(!$product) throw new \Exception("Pas de produit pour l'id $idProduct");

        $entity = new Photo();

        $form = $this->createForm(new PhotoType(), $entity);
        $form->add('submit', 'submit', array('label' => 'Create'));


        $form->handleRequest($request);

        if($form->isValid()) {
            $entity->setLastUpdate(new \DateTime("now"));
            $entity->setProduct($product);
            $em->persist($entity);
            $em->flush();

            return $this->redirect($this->generateUrl('admin_photo_show', array('id' => $entity->getId())));
        }


        return array(
            'product' => $product,
            'form'   => $form->createView(),
        );
    }
}
