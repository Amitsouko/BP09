<?php

namespace Bp\CoreBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Template;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;

class PackController extends Controller
{


    /**
     * Lists all Photo entities.
     *
     * @Route("/pack")
     * @Template()
     */
    public function indexAction()
    {
        $em = $this->getDoctrine()->getManager();

        $packs = $em->getRepository('BpProductBundle:Pack')->findAll();
        $packHighlight = $em->getRepository("BpProductBundle:Pack")->findOneBy(array('onHome' => 1));

        return array(
            'packHighlight' => $packHighlight,
            'packs' => $packs,
            'page' => 'list-pack'
        );
    }

    /**
     * Lists all Photo entities.
     *
     * @Route("/pack/{id}")
     * @Template()
     */
    public function showAction($id)
    {
        $em = $this->getDoctrine()->getManager();

        $pack = $em->getRepository('BpProductBundle:Pack')->findOneById($id);
        
        if(!$pack) throw new NotFoundHttpException("Ce pack n'existe pas");

        return array(
            'pack' => $pack,
            'page' => 'pack-detail'
        );
    }
}
