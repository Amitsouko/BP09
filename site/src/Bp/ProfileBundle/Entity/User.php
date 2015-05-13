<?php

namespace Bp\ProfileBundle\Entity;

use FOS\UserBundle\Model\User as BaseUser;
use Doctrine\ORM\Mapping as ORM;
use Doctrine\Common\Collections\ArrayCollection;

/**
 * @ORM\Entity
 * @ORM\Table(name="fos_user")
 */
class User extends BaseUser
{
    /**
     * @ORM\Id
     * @ORM\Column(type="integer")
     * @ORM\GeneratedValue(strategy="AUTO")
     */
    protected $id;

    /**
     * @ORM\OneToMany(targetEntity="Bp\ProductBundle\Entity\Contract", mappedBy="user")
     **/
    private $contracts;
    
    public function __construct()
    {
        parent::__construct();
        $this->contracts = new ArrayCollection();
    }

    /**
     * Get id
     *
     * @return integer 
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * Add orders
     *
     * @param \Bp\ProductBundle\Entity\UserOrder $orders
     * @return User
     */
    public function addOrder(\Bp\ProductBundle\Entity\UserOrder $orders)
    {
        $this->orders[] = $orders;

        return $this;
    }

    /**
     * Remove orders
     *
     * @param \Bp\ProductBundle\Entity\UserOrder $orders
     */
    public function removeOrder(\Bp\ProductBundle\Entity\UserOrder $orders)
    {
        $this->orders->removeElement($orders);
    }

    /**
     * Get orders
     *
     * @return \Doctrine\Common\Collections\Collection 
     */
    public function getOrders()
    {
        return $this->orders;
    }

    /**
     * Add contracts
     *
     * @param \Bp\ProductBundle\Entity\Contract $contracts
     * @return User
     */
    public function addContract(\Bp\ProductBundle\Entity\Contract $contracts)
    {
        $this->contracts[] = $contracts;

        return $this;
    }

    /**
     * Remove contracts
     *
     * @param \Bp\ProductBundle\Entity\Contract $contracts
     */
    public function removeContract(\Bp\ProductBundle\Entity\Contract $contracts)
    {
        $this->contracts->removeElement($contracts);
    }

    /**
     * Get contracts
     *
     * @return \Doctrine\Common\Collections\Collection 
     */
    public function getContracts()
    {
        return $this->contracts;
    }
}
