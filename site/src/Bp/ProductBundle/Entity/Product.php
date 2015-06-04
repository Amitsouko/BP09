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
     * @ORM\Column(name="specificite", type="text")
     */
    private $specificite;

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
     * @var string
     *
     * @ORM\Column(name="taxe", type="decimal")
     */
    private $taxe;

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
     * @var integer
     *
     * @ORM\Column(name="onHome", type="boolean")
     */
    private $onHome;

    /**
     * @ORM\OneToMany(targetEntity="Bp\ProductBundle\Entity\Object", mappedBy="product",cascade={"all"})
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

    /**
     * @ORM\ManyToMany(targetEntity="Bp\ProductBundle\Entity\Contract", mappedBy="products")
     **/
    private $contracts;


    /**
     * @ORM\ManyToMany(targetEntity="Bp\ProductBundle\Entity\Type", inversedBy="types",cascade={"persist"})
     * @ORM\JoinTable(name="type_product")
     **/
    private $types;

    /**
     * @ORM\OneToMany(targetEntity="Bp\ProductBundle\Entity\Photo", mappedBy="product")
     **/
    private $photos;

    /**
     * @ORM\OneToOne(targetEntity="Bp\ProductBundle\Entity\Photo")
     * @ORM\JoinColumn(name="main_photo_id", referencedColumnName="id")
     **/
    private $mainPhoto;

    /**
     * @ORM\OneToMany(targetEntity="Bp\ProfileBundle\Entity\Comment", mappedBy="product",cascade={"all"})
     **/
    private $comments;

    /**
     * @ORM\ManyToOne(targetEntity="Bp\ProductBundle\Entity\Brand", inversedBy="products",cascade={"persist"})
     * @ORM\JoinColumn(name="brand_id", referencedColumnName="id")
     **/
    private $brand;

    /**
     * @ORM\ManyToMany(targetEntity="Bp\ProductBundle\Entity\Category", inversedBy="products",cascade={"persist"})
     * @ORM\JoinTable(name="product_category")
     **/
    private $categories;

    public function __construct()
    {
        $this->active = true;
        $this->categories = new ArrayCollection();
        $this->objects = new ArrayCollection();
        $this->packs = new ArrayCollection();
        $this->customPacks = new ArrayCollection();
        $this->contracts = new ArrayCollection();
        $this->comments = new ArrayCollection();
        $this->taxe = 0;
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

    /**
     * Add orders
     *
     * @param \Bp\ProductBundle\Entity\UserOrder $orders
     * @return Product
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
     * @return Product
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

    /**
     * Set specificite
     *
     * @param string $specificite
     * @return Product
     */
    public function setSpecificite($specificite)
    {
        $this->specificite = $specificite;

        return $this;
    }

    /**
     * Get specificite
     *
     * @return string 
     */
    public function getSpecificite()
    {
        return $this->specificite;
    }

    /**
     * Add types
     *
     * @param \Bp\ProductBundle\Entity\Type $types
     * @return Product
     */
    public function addType(\Bp\ProductBundle\Entity\Type $types)
    {
        $this->types[] = $types;

        return $this;
    }

    /**
     * Remove types
     *
     * @param \Bp\ProductBundle\Entity\Type $types
     */
    public function removeType(\Bp\ProductBundle\Entity\Type $types)
    {
        $this->types->removeElement($types);
    }

    /**
     * Get types
     *
     * @return \Doctrine\Common\Collections\Collection 
     */
    public function getTypes()
    {
        return $this->types;
    }

    /**
     * Add photos
     *
     * @param \Bp\ProductBundle\Entity\Photo $photos
     * @return Product
     */
    public function addPhoto(\Bp\ProductBundle\Entity\Photo $photos)
    {
        $this->photos[] = $photos;

        return $this;
    }

    /**
     * Remove photos
     *
     * @param \Bp\ProductBundle\Entity\Photo $photos
     */
    public function removePhoto(\Bp\ProductBundle\Entity\Photo $photos)
    {
        $this->photos->removeElement($photos);
    }

    /**
     * Get photos
     *
     * @return \Doctrine\Common\Collections\Collection 
     */
    public function getPhotos()
    {
        return $this->photos;
    }

    /**
     * Set mainPhoto
     *
     * @param \Bp\ProductBundle\Entity\Photo $mainPhoto
     * @return Product
     */
    public function setMainPhoto(\Bp\ProductBundle\Entity\Photo $mainPhoto = null)
    {
        $this->mainPhoto = $mainPhoto;

        return $this;
    }

    /**
     * Get mainPhoto
     *
     * @return \Bp\ProductBundle\Entity\Photo 
     */
    public function getMainPhoto()
    {
        return $this->mainPhoto;
    }

    /**
     * Add comments
     *
     * @param \Bp\ProfileBundle\Entity\Comment $comments
     * @return Product
     */
    public function addComment(\Bp\ProfileBundle\Entity\Comment $comments)
    {
        $this->comments[] = $comments;

        return $this;
    }

    /**
     * Remove comments
     *
     * @param \Bp\ProfileBundle\Entity\Comment $comments
     */
    public function removeComment(\Bp\ProfileBundle\Entity\Comment $comments)
    {
        $this->comments->removeElement($comments);
    }

    /**
     * Get comments
     *
     * @return \Doctrine\Common\Collections\Collection 
     */
    public function getComments()
    {
        return $this->comments;
    }

    /**
     * Add categories
     *
     * @param \Bp\ProductBundle\Entity\Category $categories
     * @return Product
     */
    public function addCategory(\Bp\ProductBundle\Entity\Category $categories)
    {
        $this->categories[] = $categories;

        return $this;
    }

    /**
     * Remove categories
     *
     * @param \Bp\ProductBundle\Entity\Category $categories
     */
    public function removeCategory(\Bp\ProductBundle\Entity\Category $categories)
    {
        $this->categories->removeElement($categories);
    }

    /**
     * Get categories
     *
     * @return \Doctrine\Common\Collections\Collection 
     */
    public function getCategories()
    {
        return $this->categories;
    }

    /**
     * Set taxe
     *
     * @param string $taxe
     * @return Product
     */
    public function setTaxe($taxe)
    {
        $this->taxe = $taxe;

        return $this;
    }

    /**
     * Get taxe
     *
     * @return string 
     */
    public function getTaxe()
    {
        return $this->taxe;
    }

    /**
     * Set onHome
     *
     * @param boolean $onHome
     * @return Product
     */
    public function setOnHome($onHome)
    {
        $this->onHome = $onHome;

        return $this;
    }

    /**
     * Get onHome
     *
     * @return boolean 
     */
    public function getOnHome()
    {
        return $this->onHome;
    }

    /**
     * Set brand
     *
     * @param \Bp\ProductBundle\Entity\Brand $brand
     * @return Product
     */
    public function setBrand(\Bp\ProductBundle\Entity\Brand $brand = null)
    {
        $this->brand = $brand;

        return $this;
    }

    /**
     * Get brand
     *
     * @return \Bp\ProductBundle\Entity\Brand 
     */
    public function getBrand()
    {
        return $this->brand;
    }
}
