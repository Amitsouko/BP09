<?php

namespace Bp\CartBundle\Services;

use Symfony\Component\HttpFoundation\Session\Session;
use Doctrine\Common\Collections\ArrayCollection;
use Bp\CartBundle\Interfaces\ItemInterface;
use Bp\CartBundle\Services\CartService;
use Bp\ProductBundle\Entity\UserOrder;
use Bp\ProfileBundle\Entity\User;
class OrderService
{

    private $em;
    private $cart;

    public function __construct($em,CartService $cart)
    {
        $this->em = $em->getEntityManager();
        $this->cart = $cart;
    }

    public function generateOrder(User $user, $cart = null)
    {
        $order = new UserOrder();
        if($cart == null)
        {
            $cart = $this->cart->getCart();
        }
        $order->setTva($cart["tva"]);
        $order->setPrice($cart["price"]);
        $detail = array();
        $i = 0;
        foreach($cart["products"] as $p)
        {
            switch ($p->type) {
                case 'product':
                    $order->addProduct($p);
                    break;
                case 'pack':
                    $order->addPack($p);
                    $j = 0;
                    foreach($p->getProducts() as $sp){
                        $detail[$i]["products"][$j] = array("name" => $sp->getName(), "reference" => $sp->getReference());
                        $j++;
                    }
                    break;
                case 'customPack':
                    $order->addCustomPack($p);
                    $j = 0;
                    foreach($p->getProducts() as $sp){
                        $detail[$i]["products"][$j] = array("name" => $sp->getName(), "reference" => $sp->getReference());
                        $j++;
                    }
                    break;
            }
            $detail[$i]["name"] = $p->getName();
            $detail[$i]["price"] = $p->getPrice();
            $detail[$i]["reference"] = $p->getReference();
            $i++;
        }
        $order->setDetail($detail);
        $order->setUser($user);
        $order->setReference("bonjour-rezrze");
        $this->em->persist($order);
        $this->em->flush();

        //TODO: set individual objects
    }

    public function formatDetail($detail)
    {

        return $detail;
    }

}