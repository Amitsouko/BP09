<?php

namespace Bp\CartBundle\Services;

use Symfony\Component\HttpFoundation\Session\Session;
use Doctrine\Common\Collections\ArrayCollection;
use Bp\CartBundle\Interfaces\ItemInterface;
use Symfony\Component\Serializer\Serializer;
use Symfony\Component\Serializer\Encoder\XmlEncoder;
use Symfony\Component\Serializer\Encoder\JsonEncoder;
use Symfony\Component\Serializer\Normalizer\GetSetMethodNormalizer;


class CartService
{
    private $session;
    private $em;
    private $tva;
    private $cart;
    private $option;
    private $adresse;

    public function __construct(Session $session, $em, $tva)
    {
        $this->session = $session;
        $this->em = $em->getEntityManager();
        $this->tva = $tva;

        if($session->get("cart.cart"))
        {
            $this->cart = $session->get("cart.cart");
        }else{
            $this->cart = array();
        }

        if($session->get("cart.option"))
        {   
            $this->option = $session->get("cart.option");
        }else{
            $this->option = array();
        }
        $this->refreshSessionCart();
        $this->refreshSessionOption();
    }

    public function addObject(ItemInterface $item, $quantity)
    {
        if(!is_numeric($quantity)) throw new \Exception("not a number");
        if(isset($this->cart[$item->getReference()])){
            $this->cart[$item->getReference()]["quantity"] += $quantity;
        }else{
            //need this to get children in cart

            if( (get_class($item) == "Bp\ProductBundle\Entity\Pack" || get_class($item) == "Bp\ProductBundle\Entity\CustomPack" ) && get_class($item->getProducts()) != "Doctrine\Common\Collections\ArrayCollection") $item->getProducts()->initialize();

            $this->cart[$item->getReference()] = array(
                    "id" => $item->getId(),
                    "price" => $item->getPrice(),
                    "quantity" => $quantity,
                    "entity" => $item
                );            
        }
        $this->refreshSessionCart();
    }

    public function removeObject(ItemInterface $item)
    {
        unset($this->cart[$item->getReference()]);
        $this->refreshSessionCart();
    }

    public function clear()
    {
        $this->cart = array();
        $this->option = array();
        $this->refreshSessionCart();
    }

    public function setQuantity(ItemInterface $item, $quantity = 1)
    {
        if(!is_numeric($quantity)) throw new \Exception("not a number");
        $quantity = intval($quantity);
        if(isset($this->cart[$item->getReference()]))
        {
            if($quantity <= 0){
                $this->removeObject($item);
            }else{
                $this->cart[$item->getReference()]["quantity"] = $quantity;
                $this->refreshSessionCart();
            }
        }
    }

    public function addtOption(ItemInterface $item)
    {
        if(isset($this->option[$item->getReference()])) return false;
        $this->option[$item->getReference()] = array(
                "id" => $item->getId(),
                "price" => $item->getPrice(),
                "type" => $type,
                "entity" => $item
            );
        $this->refreshSessionOption();
        return true;
    }

    public function setAdresseLivraison($array)
    {
        $this->adresse["livraison"] = $array;
    }

    public function getAdresseLivraison()
    {
        return $this->adresse["livraison"];
    }

    public function setAdresseFacture($array)
    {
        $this->adresse["facture"] = $array;
    }

    public function getAdresseFacture()
    {
        return $this->adresse["facture"];
    }

    public function getPriceHT()
    {
        $price = 0;
        foreach($this->cart as $it)
        {
            $price += $it["price"]*$it["quantity"];
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
        $price = $this->getPriceHT();
        $priceTTC = $price + $price/100*20;
        return $priceTTC;
    }

    public function getTva()
    {
        return $this->tva;
    }

    public function getCart()
    {        
        $array["products"] = $this->getProducts();
        $array["options"] = $this->getOptions();
        $array["price"] = $this->getPriceHT();
        $array["tva"] = $this->getTva();
        $array["priceTtc"] = $this->getPriceTTC();
        return $array;
    }

    public function getProducts()
    {
        $array = new ArrayCollection;
        foreach($this->cart as $it)
        {
            $obj = $it["entity"];

            $obj->userQuantity = $it["quantity"];
            switch (get_class($it["entity"])) {
                case 'Bp\ProductBundle\Entity\Pack':
                    $obj->type = "pack";
                    break;
                
                case 'Bp\ProductBundle\Entity\CustomPack':
                    $obj->type = "customPack";
                    break;
                
                default:
                    $obj->type = "product";
                    break;
            }
            $array->add($obj);
        }
        return $array;
    }

    public function getOptions()
    {
        $array = new ArrayCollection;
        foreach($this->option as $it)
        {
            $obj = $it["entity"];
            $array->add($obj);
        }
        return $array;
    }



    private function refreshSessionCart()
    {
        $this->session->set("cart.cart", $this->cart);
    }
 
    private function refreshSessionOption()
    {
        $this->session->set("cart.option", $this->option);
    }   
}
