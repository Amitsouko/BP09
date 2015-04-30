<?php

namespace Bp\CartBundle\Interfaces;

interface ItemInterface
{
    public function getReference();
    public function getId();
    public function getPrice();
}
