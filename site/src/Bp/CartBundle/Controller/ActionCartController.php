<?php

namespace Bp\CartBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Template;

/**
* @Route("/panier/action")
*/
class ActionCartController extends Controller
{
    /**
     * @Route("/add/{type}/{id}/{quantity}")
     * @Template()
     */
    public function indexAction($type,$id,$quantity)
    {
        $em = $this->getDoctrine()->getEntityManager();
        $cart = $this->container->get("cart");

        $item = $this->getItem($type,$id);
        if($item)
        {
            $cart->addObject($item, $quantity);
        }else{
            throw new \Exception("no item");
        }

        return $this->redirect($this->generateUrl('bp_cart_default_index'));
    }

    /**
     * @Route("/remove/{type}/{id}")
     * @Template()
     */
    public function removeAction($type,$id)
    {
        $em = $this->getDoctrine()->getEntityManager();
        $cart = $this->container->get("cart");

        $item = $this->getItem($type,$id);
        if($item)
        {
            $cart->removeObject($item);
        }else{
            throw new \Exception("no item");
        }

        return $this->redirect($this->generateUrl('bp_cart_default_index'));
    }

    /**
     * @Route("/set-quantity/{type}/{id}/{quantity}")
     * @Template()
     */
    public function quantityAction($type,$id,$quantity)
    {
        $em = $this->getDoctrine()->getEntityManager();
        $cart = $this->container->get("cart");

        $item = $this->getItem($type,$id);
        if($item)
        {
            $cart->setQuantity($item,$quantity);
        }else{
            throw new \Exception("no item");
        }

        return $this->redirect($this->generateUrl('bp_cart_default_index'));
    }

    /**
     * @Route("/clear-cart")
     * @Template()
     */
    public function clearAction()
    {
        $em = $this->getDoctrine()->getEntityManager();
        $cart = $this->container->get("cart");

        $cart->clearCart();

        return $this->redirect($this->generateUrl('bp_cart_default_index'));
    }

    /**
     * @Route("/order")
     * @Template()
     */
    public function orderAction()
    {
        $user = $this->getUser();
        $orderService = $this->container->get("order");
        $orderService->generateOrder($user);
        return $this->redirect($this->generateUrl('bp_cart_default_index'));
    }


    private function getItem($type,$id)
    {
        $em = $this->getDoctrine()->getEntityManager();

        switch ($type) {
            case 'pack':
                $item = $em->getRepository("BpProductBundle:Pack")->findOneActiveById($id);
                break;
            
            case 'product':
                $item = $em->getRepository("BpProductBundle:Product")->findOneActiveById($id);
                break;
            case "customPack":
                $item = $em->getRepository("BpProductBundle:CustomPack")->findOneActiveById($id);
            default:
                throw new \Exception("Sorry, this pack doesn't exist.");
                break;
        }
        return ($item) ? $item : false;
    }
}
