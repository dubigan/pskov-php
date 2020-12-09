<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class OwnersController extends AbstractController
{
    /**
     * @Route("/api/owners", name="owners")
     */
    public function index(): Response
    {
        return $this->render('owners/index.html.twig', [
            'controller_name' => 'OwnersController',
        ]);
    }
}
