<?php

namespace Bp\ProductBundle\Entity;

use Doctrine\ORM\EntityRepository;

/**
 * ContractRepository
 *
 * This class was generated by the Doctrine ORM. Add your own custom
 * repository methods below.
 */
class ContractRepository extends EntityRepository
{
        public function findActiveLocation()
     {
         return $this->getEntityManager()
             ->createQuery('SELECT c FROM BpProductBundle:Contract c
           
                             WHERE c.type = :type
                             AND c.dateEnd < :date
                             ORDER BY c.dateStart
                        ')
             ->setParameters(array(
                 'type' => "location",
                 'date' => date("now")
             ))
             ->getResult();
     }
}
