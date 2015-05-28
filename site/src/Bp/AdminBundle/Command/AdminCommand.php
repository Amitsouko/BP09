<?php
namespace Bp\AdminBundle\Command;

use Symfony\Bundle\FrameworkBundle\Command\ContainerAwareCommand;
use Symfony\Component\Console\Input\InputArgument;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Input\InputOption;
use Symfony\Component\Console\Output\OutputInterface;
use Symfony\Component\Yaml\Parser;

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

        $value = $yaml->parse(file_get_contents(dirname(__FILE__).'/data.yml'));
        var_dump($value);
        $output->writeln("coucou");
    }
}