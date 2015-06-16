<?php

namespace Bp\CoreBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Template;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;

class DefaultController extends Controller
{
    /**
     * @Route("/")
     * @Template()
     */
    public function indexAction()
    {
        $em = $this->getDoctrine()->getManager();

        //get products and pack with "onHome" = true
        $products = $em->getRepository("BpProductBundle:Product")->findOnHome();
        $packs = $em->getRepository("BpProductBundle:Pack")->findOnHome();
        // $cart = $em->getRepository("BpCartBundle:Service")->getCart();

        return array("products" => $products, "packs" => $packs, "page"=>'home');
    }

    /**
     * @Route("/photo/{filter}/{id}", name="photo_url")
     * @Template()
     */
    public function photoAction($filter,$id)
    {
        $em = $this->getDoctrine()->getEntityManager();
        $photo = $em->getRepository("BpProductBundle:Photo")->findOneById($id);

        $liip_imagine = $this->get('liip_imagine.cache.manager');
        $webPath = $liip_imagine->getBrowserPath($photo->getWebPath(), $filter);

        return $this->redirect($webPath);
    }

}
