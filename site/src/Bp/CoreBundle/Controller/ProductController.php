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
        $productHighlight = $em->getRepository("BpProductBundle:Product")->findOneBy(array('onHome' => 1));
        return array("products"=>$products,'productHighlight'=>$productHighlight,'page'=>"list-product");
    }

    /**
     * @Route("/product/{id}", options={"expose"=true})
     * @Template()
     */
    public function showAction($id)
    {
        $em = $this->getDoctrine()->getManager();
        $product = $em->getRepository("BpProductBundle:Product")->findOneById($id);

        return array("product" => $product,'page'=>"pack-editor-product-page");
    }
}
