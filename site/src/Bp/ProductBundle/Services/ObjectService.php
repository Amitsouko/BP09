<?php

namespace Bp\ProductBundle\Services;

use Symfony\Component\HttpFoundation\Session\Session;
use Doctrine\Common\Collections\ArrayCollection;
use Bp\CartBundle\Interfaces\ItemInterface;
use Bp\ProductBundle\Entity\Product;
use Bp\ProductBundle\Entity\Object;

class ObjectService
{
    private $refGen;
    private $em;
    private $tva;
    private $cart;
    private $option;

    public function __construct($em, $referenceGenerator)
    {
        $this->refGen = $referenceGenerator;
        $this->em = $em->getEntityManager();
    }

    public function generateObjects($number, Product $product)
    {
        for($i = 0; $i < $number; $i++)
        {
            $ref = $this->refGen->generateReference("object");
            $obj = new Object();
            $obj->setReference($ref);
            $obj->setStatus("en stock");
            $obj->setQuality("neuf");
            $obj->setProduct($product);
            $this->em->persist($obj);
        }
        $this->em->flush();
    }

    public function setLocated(Object $object)
    {
        $object->setStatus("loué");
        $this->em->persist($object);
        $this->em->flush();
    }

    public function getStockedObjects($number, Product $product)
    {
        return $this->em->getRepository("BpProductBundle:Object")->getStockedObjByProduct($number, $product);
    }

}
