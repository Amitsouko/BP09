<?php

namespace Bp\AdminBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Template;

/**
 * @Route("/admin/contract-management")
 */
class ContractController extends Controller
{
    /**
     * @Route("/")
     * @Template()
     */
    public function indexAction()
    {
        $em = $this->getDoctrine()->getEntityManager();
        $contracts = $em->getRepository("BpProductBundle:Contract")->findActiveLocation();
        return array("contracts" => $contracts);
    }

        /**
     * @Route("/show/{ref}")
     * @Template()
     */
    public function showAction($ref)
    {
        $em = $this->getDoctrine()->getEntityManager();
        $contract = $em->getRepository("BpProductBundle:Contract")->findOneByReference($ref);
        return array("contract" => $contract);
    }
}
