<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Psr\Log\LoggerInterface;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use App\Entity\Car;
use App\Repository\CarRepository;

class CarDetailController extends AbstractController
{
    /**
     * @Route("/api/car/", name="car_detail", methods={"POST"})
     */
    public function car(Request $request, CarRepository $carRepository, 
        LoggerInterface $logger): Response
    {
        return $this->response([]);
    }

    public function response($data, $status = 200, $headers = [])
    {
        return new JsonResponse($data, $status, $headers);
    }
}
