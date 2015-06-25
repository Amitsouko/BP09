<?php

namespace Bp\CoreBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Template;

/**
 * @Route("/pack_editor")
 * @Template()
 */
class PackEditorController extends Controller
{
    /**
     * @Route("/", options={"expose"=true})
     * @Template()
     */
    public function indexAction()
    {
        $em = $this->getDoctrine()->getManager();

        // get products and pack with "onHome" = true
        $products = $em->getRepository("BpProductBundle:Product")->findAll();
        $brands = $em->getRepository("BpProductBundle:Brand")->findAll();
        // $packs = $em->getRepository("BpProductBundle:Pack")->findOnHome();
        // // $cart = $em->getRepository("BpCartBundle:Service")->getCart();

        return array('page'=>'pack-editor','products'=>$products,'brands'=>$brands);
    }

    /**
     * @Route("/product/{id}", options={"expose"=true})
     * @Template()
     */
    public function showAction($id)
    {
        $em = $this->getDoctrine()->getManager();
        $product = $em->getRepository("BpProductBundle:Product")->findOneById($id);

        return array("product" => $product,'page'=>"product-page");
    }

}
