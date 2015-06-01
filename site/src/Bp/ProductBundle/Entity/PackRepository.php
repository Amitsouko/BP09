<?php

namespace Bp\ProductBundle\Entity;

use Doctrine\ORM\EntityRepository;

/**
 * PackRepository
 *
 * This class was generated by the Doctrine ORM. Add your own custom
 * repository methods below.
 */
class PackRepository extends EntityRepository
{
    public function findOneActiveById($id)
     {
         return $this->getEntityManager()
             ->createQuery('SELECT p FROM BpProductBundle:Pack p
           
                             WHERE p.id = :id 
                             AND p.active = :active
                        ')
             ->setParameters(array(
                 'id' => $id,
                 'active' => true
             ))
             ->getSingleResult();
     }

     public function findOneLikeRef($ref)
      {
          return $this->getEntityManager()
              ->createQuery('SELECT p FROM BpProductBundle:Pack p
            
                              WHERE p.reference LIKE :ref
                         ')
              ->setParameters(array(
                  'ref' => "%$ref%"
              ))
              ->getResult();
      }
    
}
