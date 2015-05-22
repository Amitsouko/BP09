<?php

namespace Bp\CartBundle\Services;

use Symfony\Component\HttpFoundation\Session\Session;
use Doctrine\Common\Collections\ArrayCollection;
use Bp\CartBundle\Interfaces\ItemInterface;
use Bp\CartBundle\Services\CartService;
use Bp\ProductBundle\Entity\UserOrder;
use Bp\ProductBundle\Entity\Contract;
use Bp\ProductBundle\Services\ObjectService;
use Bp\ProfileBundle\Entity\User;

class ContractService
{

    private $em;
    private $cart;
    private $refGen;
    private $objectService;

    public function __construct($em,CartService $cart, $referenceGenerator, ObjectService $objectService)
    {
        $this->em = $em->getEntityManager();
        $this->cart = $cart;
        $this->refGen = $referenceGenerator;
        $this->objectService = $objectService;
    }

    public function generateContract(User $user, $cart = null)
    {
        $contract = new Contract();
        $order = new UserOrder();
        $arrayObj = array();
        if($cart == null)
        {
            $cart = $this->cart->getCart();
        }

        $detail = array();
        $i = 0;
        foreach($cart["products"] as $p)
        {
            switch ($p->type) {
                case 'product':
                    $contract->addProduct($p);
                    $arrayObj = $this->addProductToArrayObj($p, $arrayObj, $p->userQuantity);
                    break;
                case 'pack':
                    $contract->addPack($p);
                    $j = 0;
                    foreach($p->getProducts() as $sp){
                        $detail[$i]["products"][$j] = array("name" => $sp->getName(), "reference" => $sp->getReference());
                        $arrayObj = $this->addProductToArrayObj($sp, $arrayObj,$p->userQuantity);
                        $j++;
                    }
                    break;
                case 'customPack':
                    $contract->addCustomPack($p);
                    $j = 0;
                    foreach($p->getProducts() as $sp){
                        $detail[$i]["products"][$j] = array("name" => $sp->getName(), "reference" => $sp->getReference());
                        $arrayObj = $this->addProductToArrayObj($sp, $arrayObj, $p->userQuantity);
                        $j++;
                    }
                    break;
            }
            $detail[$i]["name"] = $p->getName();
            $detail[$i]["price"] = $p->getPrice();
            $detail[$i]["reference"] = $p->getReference();
            $i++;
        }


        $contract->setUser($user);
        $contract->setReference($this->refGen->generateReference("contract"));

        $order->setDetail($detail);
        $order->setTva($cart["tva"]);
        $order->setPrice($cart["price"]);
        $order->setReference($this->refGen->generateReference("order"));

        $contract->setOrder($order);
        $order->setContract($contract);
        $this->em->persist($order);

        //TODO: set individual objects
        foreach($arrayObj as $k)
        {
            $obj = $this->objectService->getStockedObjects($k["quantity"],$k["product"]);
            foreach($obj as $o)
            {
                $contract->addObject($o);
                $this->objectService->setLocated($o);
            }
        }
        
        $this->em->persist($contract);

        $this->em->flush();
        return $contract;

    }

    public function addProductToArrayObj($product, $arrayObj, $number = 1)
    {
        if(isset($arrayObj[$product->getReference()]))
        {
            $arrayObj[$product->getReference()]["quantity"] += $number;
        }else{
            $arrayObj[$product->getReference()]["product"] = $product;
            $arrayObj[$product->getReference()]["quantity"] = $number;
        }
        return $arrayObj;
    }

    public function formatDetail($detail)
    {

        return $detail;
    }

}