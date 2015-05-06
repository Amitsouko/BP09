<?php

namespace Bp\CartBundle\Services;

use Symfony\Component\HttpFoundation\Session\Session;
use Doctrine\Common\Collections\ArrayCollection;
use Bp\CartBundle\Interfaces\ItemInterface;
use Bp\CartBundle\Services\CartService;

class OrderService
{

    private $em;
    private $cart;

    public function __construct($em,CartService $cart)
    {
        $this->em = $em;
        $this->cart = $cart;
    }

}