<?php
namespace Bp\AdminBundle\Command;

use Symfony\Bundle\FrameworkBundle\Command\ContainerAwareCommand;
use Symfony\Component\Console\Input\InputArgument;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Input\InputOption;
use Symfony\Component\Console\Output\OutputInterface;
use Symfony\Component\Yaml\Parser;
use Bp\ProductBundle\Entity\Product;
use Bp\ProductBundle\Entity\Pack;

class AdminCommand extends ContainerAwareCommand
{
    protected function configure()
    {
        $this
            ->setName('fill:db')
            ->setDescription('Générer les objets par défaut dans la base de données.')
            // ->addArgument('name', InputArgument::OPTIONAL, 'Qui voulez vous saluer??')
            // ->addOption('yell', null, InputOption::VALUE_NONE, 'Si définie, la tâche criera en majuscules')
        ;
    }

    protected function execute(InputInterface $input, OutputInterface $output)
    {
        // $name = $input->getArgument('name');
        // if ($name) {
        //     $text = 'Bonjour '.$name;
        // } else {
        //     $text = 'Bonjour';
        // }

        // if ($input->getOption('yell')) {
        //     $text = strtoupper($text);
        // }


        $yaml = new Parser();

        $data = $yaml->parse(file_get_contents(dirname(__FILE__).'/data.yml'));

        $em = $this->getContainer()->get("doctrine")->getEntityManager();

        $products = $data["product"];
        foreach($products as $reference => $value)
        {
            $product = $em->getRepository("BpProductBundle:Product")->findOneByReference($reference);
            if(!$product)
            {
                $product = new Product();
                $output->writeln("Produit créé : ".$value["name"]);
            }else{
                $output->writeln("Produit mis à jour : ".$value["name"]);
            }
            $product->setReference($reference);
            $product->setName($value["name"]);
            $product->setPrice($this->tvaToHt($value["price"]));
            $product->setDescription($value["description"]);
            $product->setSpecificite($value["specificite"]);
            $product->setQuantity($value["quantity"]);
            $em->persist($product);
            
        }
        $em->flush();

        $pack = $data["pack"];

        foreach($pack as $reference => $value)
        {
            $p = $em->getRepository("BpProductBundle:Pack")->findOneByReference($reference);
            if(!$p)
            {
                $p = new Pack();
                $output->writeln("Pack créé : ".$value["name"]);
            }else{
                $output->writeln("Pack mis à jour : ".$value["name"]);
            }
            $p->setReference($reference);
            $p->setName($value["name"]);
            $p->setPrice($this->tvaToHt($value["price"]));
            $p->setDescription($value["description"]);
            $p->setQuantity("1");
            $p->setActive(true);
            
            foreach($value["products"] as $ref )
            {
                $refProd = $em->getRepository("BpProductBundle:Product")->findOneByReference($ref);
                if($refProd && !$p->getProducts()->contains($refProd))
                {
                    $p->addProduct($refProd);
                }
            }
            $em->persist($p);
            
        }
        $em->flush();

        $output->writeln("Ayé (>^.^)>, tout fini :)");
    }

    private function tvaToHt($price)
    {
        return 5/6*$price;
    }
}