<?php

namespace Bp\ProductBundle\Entity;

use Doctrine\ORM\Mapping as ORM;
use Bp\CartBundle\Interfaces\ItemInterface;
use Doctrine\Common\Collections\ArrayCollection;

/**
 * Product
 *
 * @ORM\Table()
 * @ORM\Entity(repositoryClass="Bp\ProductBundle\Entity\ProductRepository")
 */
class Product implements ItemInterface
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
     * @ORM\Column(name="name", type="string", length=255)
     */
    private $name;

    /**
     * @var string
     *
     * @ORM\Column(name="description", type="text")
     */
    private $description;
    
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
     * @var integer
     *
     * @ORM\Column(name="quantity", type="integer")
     */
    private $quantity;

    /**
     * @var integer
     *
     * @ORM\Column(name="active", type="boolean")
     */
    private $active;

    /**
     * @ORM\OneToMany(targetEntity="Bp\ProductBundle\Entity\Object", mappedBy="product")
     **/
    private $objects;

    /**
     * @ORM\ManyToMany(targetEntity="Bp\ProductBundle\Entity\Pack", mappedBy="products")
     **/
    private $packs;

    /**
     * @ORM\ManyToMany(targetEntity="Bp\ProductBundle\Entity\CustomPack", mappedBy="products")
     **/
    private $customPacks;

    public function __construct()
    {
        $this->active = true;
        $this->objects = new ArrayCollection();
        $this->packs = new ArrayCollection();
        $this->customPacks = new ArrayCollection();
    }
  
    public function __toString()
    {
        return $this->name;
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
     * Set name
     *
     * @param string $name
     * @return Product
     */
    public function setName($name)
    {
        $this->name = $name;

        return $this;
    }

    /**
     * Get name
     *
     * @return string 
     */
    public function getName()
    {
        return $this->name;
    }

    /**
     * Set reference
     *
     * @param string $reference
     * @return Product
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
     * Set price
     *
     * @param string $price
     * @return Product
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
     * Set quantity
     *
     * @param integer $quantity
     * @return Product
     */
    public function setQuantity($quantity)
    {
        $this->quantity = $quantity;

        return $this;
    }

    /**
     * Get quantity
     *
     * @return integer 
     */
    public function getQuantity()
    {
        return $this->quantity;
    }

    /**
     * Set description
     *
     * @param string $description
     * @return Product
     */
    public function setDescription($description)
    {
        $this->description = $description;

        return $this;
    }

    /**
     * Get description
     *
     * @return string 
     */
    public function getDescription()
    {
        return $this->description;
    }

    /**
     * Set active
     *
     * @param boolean $active
     * @return Product
     */
    public function setActive($active)
    {
        $this->active = $active;

        return $this;
    }

    /**
     * Get active
     *
     * @return boolean 
     */
    public function getActive()
    {
        return $this->active;
    }



    /**
     * Add objects
     *
     * @param \Bp\ProductBundle\Entity\Object $objects
     * @return Product
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
     * @return Product
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
     * @return Product
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
}
