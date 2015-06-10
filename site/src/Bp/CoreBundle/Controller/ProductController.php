<?php

namespace Bp\CoreBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Template;


class ProductController extends Controller
{
    /**
     * @Route("/product")
     * @Template()
     */
    public function indexAction()
    {
        $em = $this->getDoctrine()->getManager();
        $products = $em->getRepository("BpProductBundle:Product")->findAll();
        return array("products"=>$products,'page'=>"list-product");
    }

    /**
     * @Route("/product/{id}")
     * @Template()
     */
    public function showAction($id)
    {
        $em = $this->getDoctrine()->getManager();
        $product = $em->getRepository("BpProductBundle:Product")->findOneById($id);
        $products = $em->getRepository("BpProductBundle:Product")->findOnHome();

        return array("product" => $product,'products' => $products,'page'=>"product-page");
    }
}
