<?php

namespace Bp\CoreBundle\Twig;

class customExtension extends \Twig_Extension
{
    protected $tva; 

    public function __construct($tva)
    {
        $this->tva = $tva/100;
    }
    public function getFilters()
    {
        return array(
            new \Twig_SimpleFilter('price', array($this, 'priceFilter')),
            new \Twig_SimpleFilter('percent', array($this, 'percentageFilter')),
            new \Twig_SimpleFilter('ttcPrice', array($this, 'ttcPrice')),
            new \Twig_SimpleFilter('class', array($this, 'getClass'))
        );
    }

    public function priceFilter($number, $decimals = 2, $decPoint = '.', $thousandsSep = ' ')
    {
        $price = number_format($number, $decimals, $decPoint, $thousandsSep);
        $price = $price . " €";

        return $price;
    }

    public function percentageFilter($percent)
    {
        return $percent . " %";
    }

    public function ttcPrice($price)
    {
        $price = $price + $price * $this->tva;
        return $this->priceFilter($price);
    }

    public function getClass($object)
     {
         return (new \ReflectionClass($object))->getShortName();
     }

    public function getName()
    {
        return 'custom_extension';
    }
}