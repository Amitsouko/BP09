<?php

namespace Bp\ProductBundle\Entity;

use Bp\CartBundle\Interfaces\ItemInterface;
use Doctrine\ORM\Mapping as ORM;
use \Doctrine\Common\Collections\ArrayCollection;
/**
 * Pack
 *
 * @ORM\Table()
 * @ORM\Entity(repositoryClass="Bp\ProductBundle\Entity\PackRepository")
 */
class Pack implements ItemInterface
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
     * @ORM\Column(name="specificite", type="text")
     */
    private $specificite;

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
     * @var integer
     *
     * @ORM\Column(name="onHome", type="boolean", nullable=true)
     */
    private $onHome;

    /**
     * @ORM\ManyToMany(targetEntity="Bp\ProductBundle\Entity\Product", inversedBy="packs",cascade={"persist"})
     * @ORM\JoinTable(name="pack_product")
     **/
    private $products;

    /**
     * @ORM\ManyToMany(targetEntity="Bp\ProductBundle\Entity\Contract", mappedBy="packs")
     **/
    private $contracts;

    /**
     * @ORM\ManyToMany(targetEntity="Bp\ProductBundle\Entity\Type", inversedBy="packs",cascade={"persist"})
     * @ORM\JoinTable(name="type_pack")
     **/
    private $types;

    /**
     * @ORM\OneToMany(targetEntity="Bp\ProductBundle\Entity\Photo", mappedBy="pack")
     **/
    private $photos;

    /**
     * @ORM\OneToOne(targetEntity="Bp\ProductBundle\Entity\Photo")
     * @ORM\JoinColumn(name="main_photo_id", referencedColumnName="id")
     **/
    private $mainPhoto;

    /**
     * @ORM\ManyToMany(targetEntity="Bp\ProductBundle\Entity\Category", inversedBy="packs",cascade={"persist"})
     * @ORM\JoinTable(name="pack_category")
     **/
    private $categories;

    /**
     * @ORM\OneToMany(targetEntity="Bp\ProfileBundle\Entity\Comment", mappedBy="pack",cascade={"all"})
     **/
    private $comments;

    public function __construct()
    {
        $this->categories = new ArrayCollection();
        $this->products = new ArrayCollection();
        $this->comments = new ArrayCollection();
        $this->contracts = new ArrayCollection();
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
     * @return Pack
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
     * Set description
     *
     * @param string $description
     * @return Pack
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
     * Set reference
     *
     * @param string $reference
     * @return Pack
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
     * @return Pack
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
     * @return Pack
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
     * Set active
     *
     * @param boolean $active
     * @return Pack
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
     * Add products
     *
     * @param \Bp\ProductBundle\Entity\Product $products
     * @return Pack
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
     * @return Pack
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
     * @return Pack
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
     * Add types
     *
     * @param \Bp\ProductBundle\Entity\Type $types
     * @return Pack
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
     * @return Pack
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
     * @return Pack
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
     * @return Pack
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
     * @return Pack
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
     * Set onHome
     *
     * @param boolean $onHome
     * @return Pack
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
     * Set specificite
     *
     * @param string $specificite
     * @return Pack
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
}
