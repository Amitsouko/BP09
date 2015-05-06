<?php

namespace Bp\ProductBundle\Entity;

use Doctrine\ORM\Mapping as ORM;
use Doctrine\Common\Collections\ArrayCollection;
/**
 * UserOrder
 *
 * @ORM\Table()
 * @ORM\Entity(repositoryClass="Bp\ProductBundle\Entity\UserOrderRepository")
 */
class UserOrder
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
     * @var \DateTime
     *
     * @ORM\Column(name="date", type="datetime")
     */
    private $date;

    /**
     * @var string
     *
     * @ORM\Column(name="tva", type="decimal")
     */
    private $tva;

    /**
     * @var string
     *
     * @ORM\Column(name="price", type="decimal")
     */
    private $price;

    /**
     * @var string
     *
     * @ORM\Column(name="detail", type="array",nullable=true)
     */
    private $detail;

    /**
     * @ORM\ManyToOne(targetEntity="Bp\ProfileBundle\Entity\User", inversedBy="orders")
     * @ORM\JoinColumn(name="user_id", referencedColumnName="id")
     **/
    private $user;

    /**
     * @ORM\ManyToMany(targetEntity="Bp\ProductBundle\Entity\Object", inversedBy="orders")
     * @ORM\JoinTable(name="order_object")
     **/
    private $objects;

    /**
     * @ORM\ManyToMany(targetEntity="Bp\ProductBundle\Entity\Pack", inversedBy="orders")
     * @ORM\JoinTable(name="order_pack")
     **/
    private $packs;

    /**
     * @ORM\ManyToMany(targetEntity="Bp\ProductBundle\Entity\CustomPack", inversedBy="orders")
     * @ORM\JoinTable(name="order_custompack")
     **/
    private $customPacks;

    /**
     * @ORM\ManyToMany(targetEntity="Bp\ProductBundle\Entity\Product", inversedBy="orders")
     * @ORM\JoinTable(name="order_products")
     **/
    private $products;

    public function __construct()
    {
        $this->objects = new ArrayCollection();
        $this->packs = new ArrayCollection();
        $this->customPacks = new ArrayCollection();
        $this->products = new ArrayCollection();
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
     * Set reference
     *
     * @param string $reference
     * @return UserOrder
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
     * Set date
     *
     * @param \DateTime $date
     * @return UserOrder
     */
    public function setDate($date)
    {
        $this->date = $date;

        return $this;
    }

    /**
     * Get date
     *
     * @return \DateTime 
     */
    public function getDate()
    {
        return $this->date;
    }

    /**
     * Set tva
     *
     * @param string $tva
     * @return UserOrder
     */
    public function setTva($tva)
    {
        $this->tva = $tva;

        return $this;
    }

    /**
     * Get tva
     *
     * @return string 
     */
    public function getTva()
    {
        return $this->tva;
    }

    /**
     * Set user
     *
     * @param \Bp\ProfileBundle\Entity\User $user
     * @return UserOrder
     */
    public function setUser(\Bp\ProfileBundle\Entity\User $user = null)
    {
        $this->user = $user;

        return $this;
    }

    /**
     * Get user
     *
     * @return \Bp\ProfileBundle\Entity\User 
     */
    public function getUser()
    {
        return $this->user;
    }

    /**
     * Add objects
     *
     * @param \Bp\ProductBundle\Entity\Object $objects
     * @return UserOrder
     */
    public function addObject(\Bp\ProductBundle\Entity\Object $objects)
    {
        $this->objects[] = $objects;

        return $this;
    }

    /**
     * Remove objects
     *
     * @param \Bp\ProductBundle\Entity\Object $objects
     */
    public function removeObject(\Bp\ProductBundle\Entity\Object $objects)
    {
        $this->objects->removeElement($objects);
    }

    /**
     * Get objects
     *
     * @return \Doctrine\Common\Collections\Collection 
     */
    public function getObjects()
    {
        return $this->objects;
    }

    /**
     * Add packs
     *
     * @param \Bp\ProductBundle\Entity\Pack $packs
     * @return UserOrder
     */
    public function addPack(\Bp\ProductBundle\Entity\Pack $packs)
    {
        $this->packs[] = $packs;

        return $this;
    }

    /**
     * Remove packs
     *
     * @param \Bp\ProductBundle\Entity\Pack $packs
     */
    public function removePack(\Bp\ProductBundle\Entity\Pack $packs)
    {
        $this->packs->removeElement($packs);
    }

    /**
     * Get packs
     *
     * @return \Doctrine\Common\Collections\Collection 
     */
    public function getPacks()
    {
        return $this->packs;
    }

    /**
     * Add customPacks
     *
     * @param \Bp\ProductBundle\Entity\CustomPack $customPacks
     * @return UserOrder
     */
    public function addCustomPack(\Bp\ProductBundle\Entity\CustomPack $customPacks)
    {
        $this->customPacks[] = $customPacks;

        return $this;
    }

    /**
     * Remove customPacks
     *
     * @param \Bp\ProductBundle\Entity\CustomPack $customPacks
     */
    public function removeCustomPack(\Bp\ProductBundle\Entity\CustomPack $customPacks)
    {
        $this->customPacks->removeElement($customPacks);
    }

    /**
     * Get customPacks
     *
     * @return \Doctrine\Common\Collections\Collection 
     */
    public function getCustomPacks()
    {
        return $this->customPacks;
    }

    /**
     * Add products
     *
     * @param \Bp\ProductBundle\Entity\Product $products
     * @return UserOrder
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
     * Set price
     *
     * @param string $price
     * @return UserOrder
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
     * Set detail
     *
     * @param array $detail
     * @return UserOrder
     */
    public function setDetail($detail)
    {
        $this->detail = $detail;

        return $this;
    }

    /**
     * Get detail
     *
     * @return array 
     */
    public function getDetail()
    {
        return $this->detail;
    }
}
