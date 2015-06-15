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
            new \Twig_SimpleFilter('gallery', array($this, 'getGallery')),
            new \Twig_SimpleFilter('percent', array($this, 'percentageFilter')),
            new \Twig_SimpleFilter('ttcPrice', array($this, 'ttcPrice')),
            new \Twig_SimpleFilter('averageNote', array($this, 'getNote')),
            new \Twig_SimpleFilter('class', array($this, 'getClass'))
        );
    }

    public function priceFilter($number, $decimals = 2, $decPoint = '.', $thousandsSep = ' ')
    {
        $price = number_format($number, $decimals, $decPoint, $thousandsSep);
        $price = $price . " €";

        return $price;
    }

    public function getGallery($entity)
    {
        $photos = $entity->getPhotos();
        $photos->removeElement($entity->getMainPhoto());
        return $photos;

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

    public function getNote($comments)
    {
        $sum = 0;
        $commentNumber = 0;
        foreach($comments as $comment)
        {
            $commentNumber++;
            $sum += $comment->getNote();
        }
        return ($commentNumber > 0) ? number_format($sum/$commentNumber, 2) : "pas de note";
    }
    
    public function getFunctions()
    {
        return array(
            'icons' => new \Twig_Function_Function(function($name){
                $html = '';
                $html .= '<svg class="icon ' . $name . '">';
                $html .= '  <use xlink:href="#' . $name . '"></use>';
                $html .= '</svg>';
                return $html;
            })
        );
    }
}