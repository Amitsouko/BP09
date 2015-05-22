<?php

namespace Bp\ProductBundle\Entity;

use Doctrine\ORM\Mapping as ORM;
use Bp\CartBundle\Interfaces\ItemInterface;
use \Doctrine\Common\Collections\ArrayCollection;

/**
 * CustomPack
 *
 * @ORM\Table()
 * @ORM\Entity(repositoryClass="Bp\ProductBundle\Entity\CustomPackRepository")
 */
class CustomPack implements ItemInterface
{
    /**
     * @var integer
     *
     * @ORM\Column(name="id", type="integer")
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="AUTO")
     */
    private $id;

    /**
     * @var string
     *
     * @ORM\Column(name="reference", type="string", length=255)
     */
    private $reference;

    /**
     * @var string
     *
     * @ORM\Column(name="price", type="decimal")
     */
    private $price;


    /**
     * @ORM\ManyToMany(targetEntity="Bp\ProductBundle\Entity\Product", inversedBy="customPacks")
     * @ORM\JoinTable(name="custompack_product")
     **/
    private $products;

    /**
     * @ORM\ManyToMany(targetEntity="Bp\ProductBundle\Entity\Contract", mappedBy="customPacks")
     **/
    private $contracts;

    public function __construct()
    {
        $this->products = new ArrayCollection();
        $this->customPacks = new ArrayCollection();
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
     * Set ref
     *
     * @param string $ref
     * @return CustomPack
     */
    public function setRef($ref)
    {
        $this->ref = $ref;

        return $this;
    }

    /**
     * Get ref
     *
     * @return string 
     */
    public function getRef()
    {
        return $this->ref;
    }

    /**
     * Set price
     *
     * @param string $price
     * @return CustomPack
     */
    public function setPrice($price)
    {
        $this->price = $price;

        return $this;
    }

    /**
     * Get price
     *
     * @return string 
     */
    public function getPrice()
    {
        return $this->price;
    }

    /**
     * Set reference
     *
     * @param string $reference
     * @return CustomPack
     */
    public function setReference($reference)
    {
        $this->reference = $reference;

        return $this;
    }

    /**
     * Get reference
     *
     * @return string 
     */
    public function getReference()
    {
        return $this->reference;
    }

    /**
     * Add products
     *
     * @param \Bp\ProductBundle\Entity\Product $products
     * @return CustomPack
     */
    public function addProduct(\Bp\ProductBundle\Entity\Product $products)
    {
        $this->products[] = $products;

        return $this;
    }

    /**
     * Remove products
     *
     * @param \Bp\ProductBundle\Entity\Product $products
     */
    public function removeProduct(\Bp\ProductBundle\Entity\Product $products)
    {
        $this->products->removeElement($products);
    }

    /**
     * Get products
     *
     * @return \Doctrine\Common\Collections\Collection 
     */
    public function getProducts()
    {
        return $this->products;
    }

    /**
     * Add orders
     *
     * @param \Bp\ProductBundle\Entity\UserOrder $orders
     * @return CustomPack
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
     * @return CustomPack
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
