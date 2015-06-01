<?php

namespace Bp\AdminBundle\Controller;

use Symfony\Component\HttpFoundation\Request;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Template;
use Doctrine\Common\Collections\ArrayCollection;

/**
 * @Route("/admin")
 */
class DefaultController extends Controller
{
    /**
     * @Route("/")
     * @Template()
     */
    public function indexAction()
    {
        return array();
    }

    /**
     * @Route("/search")
     * @Template()
     */
    public function searchAction(Request $request)
    {
        $ref = $request->get("search");
        if(strlen($ref) < 6)
        {
            $message = "Donnez une recherche de 6 caractères ou plus.";
            return array("message" => $message);
        }
        $em = $this->getDoctrine()->getManager();

        //search pack
        $packs = $em->getRepository("BpProductBundle:Pack")->findOneLikeRef($ref);

        //search products
        $products = $em->getRepository("BpProductBundle:Product")->findOneLikeRef($ref);

        //search objects
        $objects = $em->getRepository("BpProductBundle:Object")->findOneLikeRef($ref);

        //search custom Packs
        $customPacks = $em->getRepository("BpProductBundle:CustomPack")->findOneLikeRef($ref);

        //search orders
        $orders = $em->getRepository("BpProductBundle:UserOrder")->findOneLikeRef($ref);

        //search contracts
        $contracts = $em->getRepository("BpProductBundle:Contract")->findOneLikeRef($ref);

        $total = 
            array_merge(
                $packs, 
                $products,
                $objects,
                $customPacks,
                $orders,
                $contracts
            );
        return array("result" => $total);
    }
}
