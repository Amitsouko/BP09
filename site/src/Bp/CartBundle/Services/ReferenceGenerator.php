<?php

namespace Bp\CartBundle\Services;

use Symfony\Component\HttpFoundation\Session\Session;
use Doctrine\Common\Collections\ArrayCollection;
use Bp\CartBundle\Interfaces\ItemInterface;
use Bp\CartBundle\Services\CartService;
use Bp\ProductBundle\Entity\UserOrder;
use Bp\ProfileBundle\Entity\User;

class ReferenceGenerator
{
    private $em;

    public function __construct($em)
    {
        $this->em = $em->getEntityManager();
    }

    public function generateReference($type)
    {
        $rand = $this->generateRandom();
        do{
           $reference = $this->constructReference($rand,$type);
        }while(!$reference);
        return $reference;
    }

    private function constructReference($rand, $type)
    {
        switch ($type) {
            case 'pack':
                $prefix = "PA";
                $repo = "BpProductBundle:Pack";
                break;
            
            case 'order':
                $prefix = "OR";
                $repo = "BpProductBundle:UserOrder";
                break;
            
            case 'customPack':
                $prefix = "CP";
                $repo = "BpProductBundle:CustomPack";
                break;
            
            case 'product':
                $repo = "BpProductBundle:Product";
                $prefix = "PR";
                break;
            
            case 'object':
                $prefix = "OB";
                $repo = "BpProductBundle:Object";
                break;
        
            default:
                $prefix = "NA";
                break;
        }
        $reference = $prefix . "-" . $rand;
        $exists = $this->em->getRepository($repo)->findOneByReference($reference);
        return ($exists) ? false : $reference;
    }

    private function generateRandom($bytes = 5)
    {
        $rand = mcrypt_create_iv($bytes, MCRYPT_DEV_URANDOM);
        return strtoupper(bin2hex($rand));
    }
}