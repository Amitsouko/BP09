<?php

namespace Bp\ProductBundle\Controller;

use Symfony\Component\HttpFoundation\Request;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Method;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Template;
use Bp\ProductBundle\Entity\Object;
use Bp\ProductBundle\Form\ObjectType;

/**
 * Object controller.
 *
 * @Route("/admin/object")
 */
class ObjectController extends Controller
{

    /**
     * add objects fo product
     *
     * @Route("/add-object/{id}", name="admin_add_object")
     * @Template()
     */
    public function addObjectAction(Request $request, $id)
    {
        $em = $this->get("doctrine")->getEntityManager();
        $product = $em->getRepository("BpProductBundle:Product")->findOneById($id);
        $a = $this->get("object.service")->getStockedObjects(1,$product);

        if($request->get("number"))
        {
            $objGen = $this->get("object.service");
            $objGen->generateObjects($request->get("number"), $product);
            return $this->redirect($this->generateUrl('admin_object'));
        }

        return array("product" => $product);
    }

    /**
     * Lists all Object entities.
     *
     * @Route("/", name="admin_object")
     * @Method("GET")
     * @Template()
     */
    public function indexAction()
    {
        $em = $this->getDoctrine()->getManager();

        $entities = $em->getRepository('BpProductBundle:Object')->findAll();

        return array(
            'entities' => $entities,
        );
    }
    /**
     * Creates a new Object entity.
     *
     * @Route("/", name="admin_object_create")
     * @Method("POST")
     * @Template("BpProductBundle:Object:new.html.twig")
     */
    public function createAction(Request $request)
    {
        $entity = new Object();
        $form = $this->createCreateForm($entity);
        $form->handleRequest($request);

        if ($form->isValid()) {
            $em = $this->getDoctrine()->getManager();
            $em->persist($entity);
            $em->flush();

            return $this->redirect($this->generateUrl('admin_object_show', array('id' => $entity->getId())));
        }

        return array(
            'entity' => $entity,
            'form'   => $form->createView(),
        );
    }

    /**
     * Creates a form to create a Object entity.
     *
     * @param Object $entity The entity
     *
     * @return \Symfony\Component\Form\Form The form
     */
    private function createCreateForm(Object $entity)
    {
        $form = $this->createForm(new ObjectType(), $entity, array(
            'action' => $this->generateUrl('admin_object_create'),
            'method' => 'POST',
        ));

        $form->add('submit', 'submit', array('label' => 'Create'));

        return $form;
    }

    /**
     * Displays a form to create a new Object entity.
     *
     * @Route("/new", name="admin_object_new")
     * @Method("GET")
     * @Template()
     */
    public function newAction()
    {
        $entity = new Object();
        $form   = $this->createCreateForm($entity);

        return array(
            'entity' => $entity,
            'form'   => $form->createView(),
        );
    }

    /**
     * Finds and displays a Object entity.
     *
     * @Route("/{id}", name="admin_object_show")
     * @Method("GET")
     * @Template()
     */
    public function showAction($id)
    {
        $em = $this->getDoctrine()->getManager();

        $entity = $em->getRepository('BpProductBundle:Object')->find($id);

        if (!$entity) {
            throw $this->createNotFoundException('Unable to find Object entity.');
        }

        $deleteForm = $this->createDeleteForm($id);

        return array(
            'entity'      => $entity,
            'delete_form' => $deleteForm->createView(),
        );
    }

    /**
     * Displays a form to edit an existing Object entity.
     *
     * @Route("/{id}/edit", name="admin_object_edit")
     * @Method("GET")
     * @Template()
     */
    public function editAction($id)
    {
        $em = $this->getDoctrine()->getManager();

        $entity = $em->getRepository('BpProductBundle:Object')->find($id);

        if (!$entity) {
            throw $this->createNotFoundException('Unable to find Object entity.');
        }

        $editForm = $this->createEditForm($entity);
        $deleteForm = $this->createDeleteForm($id);

        return array(
            'entity'      => $entity,
            'edit_form'   => $editForm->createView(),
            'delete_form' => $deleteForm->createView(),
        );
    }

    /**
    * Creates a form to edit a Object entity.
    *
    * @param Object $entity The entity
    *
    * @return \Symfony\Component\Form\Form The form
    */
    private function createEditForm(Object $entity)
    {
        $form = $this->createForm(new ObjectType(), $entity, array(
            'action' => $this->generateUrl('admin_object_update', array('id' => $entity->getId())),
            'method' => 'PUT',
        ));

        $form->add('submit', 'submit', array('label' => 'Update'));

        return $form;
    }
    /**
     * Edits an existing Object entity.
     *
     * @Route("/{id}", name="admin_object_update")
     * @Method("PUT")
     * @Template("BpProductBundle:Object:edit.html.twig")
     */
    public function updateAction(Request $request, $id)
    {
        $em = $this->getDoctrine()->getManager();

        $entity = $em->getRepository('BpProductBundle:Object')->find($id);

        if (!$entity) {
            throw $this->createNotFoundException('Unable to find Object entity.');
        }

        $deleteForm = $this->createDeleteForm($id);
        $editForm = $this->createEditForm($entity);
        $editForm->handleRequest($request);

        if ($editForm->isValid()) {
            $em->flush();

            return $this->redirect($this->generateUrl('admin_object_edit', array('id' => $id)));
        }

        return array(
            'entity'      => $entity,
            'edit_form'   => $editForm->createView(),
            'delete_form' => $deleteForm->createView(),
        );
    }
    /**
     * Deletes a Object entity.
     *
     * @Route("/{id}", name="admin_object_delete")
     * @Method("DELETE")
     */
    public function deleteAction(Request $request, $id)
    {
        $form = $this->createDeleteForm($id);
        $form->handleRequest($request);

        if ($form->isValid()) {
            $em = $this->getDoctrine()->getManager();
            $entity = $em->getRepository('BpProductBundle:Object')->find($id);

            if (!$entity) {
                throw $this->createNotFoundException('Unable to find Object entity.');
            }

            $em->remove($entity);
            $em->flush();
        }

        return $this->redirect($this->generateUrl('admin_object'));
    }

    /**
     * Creates a form to delete a Object entity by id.
     *
     * @param mixed $id The entity id
     *
     * @return \Symfony\Component\Form\Form The form
     */
    private function createDeleteForm($id)
    {
        return $this->createFormBuilder()
            ->setAction($this->generateUrl('admin_object_delete', array('id' => $id)))
            ->setMethod('DELETE')
            ->add('submit', 'submit', array('label' => 'Delete'))
            ->getForm()
        ;
    }
}
