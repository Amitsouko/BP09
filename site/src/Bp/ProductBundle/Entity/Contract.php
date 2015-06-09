<?php

namespace Bp\ProductBundle\Entity;

use Doctrine\ORM\Mapping as ORM;
use Doctrine\Common\Collections\ArrayCollection;

/**
 * Contract
 *
 * @ORM\Table()
 * @ORM\Entity(repositoryClass="Bp\ProductBundle\Entity\ContractRepository")
 */
class Contract
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
     * @ORM\Column(name="type", type="string", length=255, columnDefinition="ENUM('location', 'achat')")
     */
    private $type;


    /**
     * @var \DateTime
     *
     * @ORM\Column(name="date_start", type="datetime")
     */
    private $dateStart;

    /**
     * @var \DateTime
     *
     * @ORM\Column(name="date_end", type="datetime", nullable=true)
     */
    private $dateEnd;

    /**
     * @ORM\ManyToOne(targetEntity="Bp\ProfileBundle\Entity\User", inversedBy="contracts",cascade={"persist"})
     * @ORM\JoinColumn(name="user_id", referencedColumnName="id")
     **/
    private $user;

    /**
     * @ORM\ManyToMany(targetEntity="Bp\ProductBundle\Entity\Object", inversedBy="contracts",cascade={"persist"})
     * @ORM\JoinTable(name="contract_object")
     **/
    private $objects;

    /**
     * @ORM\ManyToMany(targetEntity="Bp\ProductBundle\Entity\Pack", inversedBy="contracts",cascade={"persist"})
     * @ORM\JoinTable(name="contract_pack")
     **/
    private $packs;

    /**
     * @ORM\ManyToMany(targetEntity="Bp\ProductBundle\Entity\CustomPack", inversedBy="contracts",cascade={"persist"})
     * @ORM\JoinTable(name="contract_custompack")
     **/
    private $customPacks;

    /**
     * @ORM\ManyToMany(targetEntity="Bp\ProductBundle\Entity\Product", inversedBy="contracts",cascade={"persist"})
     * @ORM\JoinTable(name="contract_products")
     **/
    private $products;

    /**
     * @ORM\OneToOne(targetEntity="Bp\ProductBundle\Entity\UserOrder", mappedBy="contract",cascade={"persist"})
     **/
    private $order;


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
     * @return Contract
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
     * Set type
     *
     * @param string $type
     * @return Contract
     */
    public function setType($type)
    {
        $this->type = $type;

        return $this;
    }

    /**
     * Get type
     *
     * @return string 
     */
    public function getType()
    {
        return $this->type;
    }

    /**
     * Set price
     *
     * @param string $price
     * @return Contract
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
     * Set dateStart
     *
     * @param \DateTime $dateStart
     * @return Contract
     */
    public function setDateStart($dateStart)
    {
        $this->dateStart = $dateStart;

        return $this;
    }

    /**
     * Get dateStart
     *
     * @return \DateTime 
     */
    public function getDateStart()
    {
        return $this->dateStart;
    }

    /**
     * Set dateEnd
     *
     * @param \DateTime $dateEnd
     * @return Contract
     */
    public function setDateEnd($dateEnd)
    {
        $this->dateEnd = $dateEnd;

        return $this;
    }

    /**
     * Get dateEnd
     *
     * @return \DateTime 
     */
    public function getDateEnd()
    {
        return $this->dateEnd;
    }
    /**
     * Constructor
     */
    public function __construct()
    {
        $this->objects = new \Doctrine\Common\Collections\ArrayCollection();
        $this->packs = new \Doctrine\Common\Collections\ArrayCollection();
        $this->customPacks = new \Doctrine\Common\Collections\ArrayCollection();
        $this->products = new \Doctrine\Common\Collections\ArrayCollection();
        $this->dateStart = new \DateTime("now");
    }

    /**
     * Set user
     *
     * @param \Bp\ProfileBundle\Entity\User $user
     * @return Contract
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
     * @return Contract
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
     * @return Contract
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
     * @return Contract
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
     * @return Contract
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
     * Set order
     *
     * @param \Bp\ProductBundle\Entity\UserOrder $order
     * @return Contract
     */
    public function setOrder(\Bp\ProductBundle\Entity\UserOrder $order = null)
    {
        $this->order = $order;

        return $this;
    }

    /**
     * Get order
     *
     * @return \Bp\ProductBundle\Entity\UserOrder 
     */
    public function getOrder()
    {
        return $this->order;
    }
}
