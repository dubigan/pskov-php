<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class DefaultController extends AbstractController
{

    /**
     * @Route("/{reactRouting}", name="home", defaults={"reactRouting": null})
     */
    public function index()
    {
        return $this->render('default/index.html.twig');
    }



    // /**
    //  * @Route("/default", name="default")
    //  */
    // public function index(): Response
    // {
    //     return $this->render('default/index.html.twig', [
    //         'controller_name' => 'DefaultController',
    //     ]);
    // }
}
