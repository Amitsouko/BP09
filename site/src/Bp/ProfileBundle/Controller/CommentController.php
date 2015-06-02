<?php

namespace Bp\ProfileBundle\Controller;

use Symfony\Component\HttpFoundation\Request;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Template;
use Bp\ProfileBundle\Entity\Comment;
class CommentController extends Controller
{
    /**
     * @Route("/comment/form/{type}/{id}", name="comment_form")
     * @Template()
     */
    public function indexAction(Request $request, $type, $id)
    {
        $em = $this->getDoctrine()->getManager();
        $referer = ($request->get("referer")) ? $request->get("referer") : $this->getRequest()->headers->get('referer');
        $comment = new Comment();


        if($type == "Pack")
        {
            $entity = $em->getRepository("BpProductBundle:Pack")->findOneById($id);
            $comment->setPack($entity);
        }else if($type == "Product")
        {
            $entity = $em->getRepository("BpProductBundle:Product")->findOneById($id);
            $comment->setProduct($entity);
        }else{
            throw new \Exception("Désolé, comment_form n'accepte que 'pack', 'product' comme paramètre pour 'type'.");
        }
        if(!$entity) throw new \Exception("no pack or product for this id");



        $form = $this->createFormBuilder($comment)
            ->add('text', 'text')
            ->add("type", "hidden", array('mapped' => false, "attr" => array("value" => $id )))
            ->add("id", "hidden", array('mapped' => false, "attr" => array("value" => $type )));

        if($referer)
        {
            $form->add("referer", "hidden", array('mapped' => false, "attr" => array("value" =>$referer )));
        }

        $form = $form->getForm();


        $form->handleRequest($request);
        if ($form->isValid()) {
           // fait quelque chose comme sauvegarder la tâche dans la bdd
            $comment->setUser($this->getUser());
            $em->persist($comment);
            $em->flush();
            return $this->redirect($referer);
        }


        return array('form' => $form->createView(), "id" => $id, "type" =>$type, "referer" => $referer);
    }
}
