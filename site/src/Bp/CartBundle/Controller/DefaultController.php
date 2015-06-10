<?php

namespace Bp\CartBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Template;
use Symfony\Component\HttpFoundation\Request;
/**
* @Route("/panier")
*/
class DefaultController extends Controller
{
    /**
     * @Route("/")
     * @Template()
     */
    public function indexAction(Request $request)
    {
        $em = $this->getDoctrine()->getEntityManager();
        $cart = $this->container->get("cart");
        $cart = $cart->getCart();
        return array("cart" => $cart, "request" => $request);
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


    /**
     * @Route("/embed/cartBtn")
     * @Template()
     */
    public function embedCartBtnAction(Request $request)
    {
        $cart = $this->container->get("cart");
        $cart = $cart->getCart();
        return array("cart" => $cart);
    }
}
