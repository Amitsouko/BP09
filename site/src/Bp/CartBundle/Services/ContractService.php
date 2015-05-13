<?php

namespace Bp\CartBundle\Services;

use Symfony\Component\HttpFoundation\Session\Session;
use Doctrine\Common\Collections\ArrayCollection;
use Bp\CartBundle\Interfaces\ItemInterface;
use Bp\CartBundle\Services\CartService;
use Bp\ProductBundle\Entity\UserOrder;
use Bp\ProductBundle\Entity\Contract;
use Bp\ProfileBundle\Entity\User;

class ContractService
{

    private $em;
    private $cart;
    private $refGen;

    public function __construct($em,CartService $cart, $referenceGenerator)
    {
        $this->em = $em->getEntityManager();
        $this->cart = $cart;
        $this->refGen = $referenceGenerator;
    }

    public function generateContract(User $user, $cart = null)
    {
        $contract = new Contract();
        $order = new UserOrder();
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
                    break;
                case 'pack':
                    $contract->addPack($p);
                    $j = 0;
                    foreach($p->getProducts() as $sp){
                        $detail[$i]["products"][$j] = array("name" => $sp->getName(), "reference" => $sp->getReference());
                        $j++;
                    }
                    break;
                case 'customPack':
                    $contract->addCustomPack($p);
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


        $contract->setUser($user);
        $contract->setReference($this->refGen->generateReference("contract"));

        $order->setDetail($detail);
        $order->setTva($cart["tva"]);
        $order->setPrice($cart["price"]);
        $order->setReference($this->refGen->generateReference("order"));

        $contract->setOrder($order);
        $order->setContract($contract);
        $this->em->persist($order);
        $this->em->persist($contract);
        $this->em->flush();

        //TODO: set individual objects
    }

    public function formatDetail($detail)
    {

        return $detail;
    }

}