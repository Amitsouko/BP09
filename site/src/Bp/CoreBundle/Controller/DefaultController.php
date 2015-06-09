<?php

namespace Bp\CoreBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Template;


class DefaultController extends Controller
{
    /**
     * @Route("/")
     * @Template()
     */
    public function indexAction()
    {
        $em = $this->getDoctrine()->getManager();

        //get products and pack with "onHome" = true
        $products = $em->getRepository("BpProductBundle:Product")->findOnHome();
        $packs = $em->getRepository("BpProductBundle:Pack")->findOnHome();
        // $cart = $em->getRepository("BpCartBundle:Service")->getCart();

        return array("products" => $products, "packs" => $packs, "page"=>'home');
    }

}
