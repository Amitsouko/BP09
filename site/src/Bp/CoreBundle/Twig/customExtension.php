<?php

namespace Bp\CoreBundle\Twig;

class customExtension extends \Twig_Extension
{
    public function getFilters()
    {
        return array(
            new \Twig_SimpleFilter('price', array($this, 'priceFilter')),
            new \Twig_SimpleFilter('percent', array($this, 'percentageFilter')),
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

    public function getClass($object)
     {
         return (new \ReflectionClass($object))->getShortName();
     }

    public function getName()
    {
        return 'custom_extension';
    }
}