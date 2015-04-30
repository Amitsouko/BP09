<?php

namespace Bp\CartBundle\Services;

use Symfony\Component\HttpFoundation\Session\Session;

class CartService
{
    private $session;
    private $em;
    private $tva;
    private $cart;

    public function __construct(Session $session, $em, $tva)
    {
        $this->session = $session;
        $this->em = $em;
        $this->tva = $tva;
        $this->cart = array();
        $this->option = array();
    }

    public function addObject(ItemInterface $item, $quantity)
    {
        if($this->cart[$item->getReference()] != null){
            $this->cart[$item->getReference()]["quantity"] += $quantity;
        }else{
            $this->cart[$item->getReference()] = array(
                    "id" => $item->getId(),
                    "price" => $item->getPrice(),
                    "quantity" => $quantity,
                    "entity" => get_class($item)
                );            
        }
    }

    public function removeObject(ItemInterface $item)
    {
        unset($this->cart[$item->getReference()]);
    }

    public function setQuantity(ItemInterface $item, $quantity)
    {
        if($this->cart[$item->getReference()] != null)
        {
            $this->cart[$item->getReference()]["quantity"] = $quantity;
        }
    }

    public function addtOption(ItemInterface $item, $quantity)
    {
        if($this->option[$item->getReference()] != NULL) return false;
        $this->option[$item->getReference()] = array(
                "id" => $item->getId(),
                "price" => $item->getPrice(),
                "quantity" => $quantity,
                "type" => $type,
                "entity" => get_class($item)
            );
        return true;
    }


    public function getPriceHT()
    {
        $price = 0;
        foreach($this->cart as $it)
        {
            $price += $it["price"];
        }
        $reduction = 0;
        foreach($this->option as $it)
        {
            if($it->getType == "price")
            {
                //if option is a price
                $price += $it["price"];   
            }else if($it->getType() == "pourcent"){
                $reduction += $it["price"];
            }
        }
        $price = $price + $price/100*$reduction;
        return $price;
    }

    public function getPriceTTC()
    {
        $price = $this->getPriceHT;
        $priceTTC = $price + $price/100*20;
        return $priceTTC;
    }

    public function getTva()
    {
        return $this->tva;
    }

    
}
