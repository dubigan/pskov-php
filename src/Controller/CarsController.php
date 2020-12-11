<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Psr\Log\LoggerInterface;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use App\Entity\Car;
use App\Repository\CarRepository;



class CarsController extends AbstractController
{
    /**
     * @Route("/api/cars/", name="cars", methods={"POST"})
     */
    public function cars(Request $request, CarRepository $carRepository, 
        LoggerInterface $logger): Response
    {
        $data = json_decode($request->getContent(), true);
        if (array_key_exists('btn_del', $data)) {
            // delete car
            $logger->debug('Delete car');
        }
        if (array_key_exists('btn_edit', $data)) {
            // edit car
            $logger->debug('Edit car');
            return $this->response(['redirect' => '/car']);
        }

        $data = $carRepository->findAll();
        return $this->response($data);
    }

    public function response($data, $status = 200, $headers = [])
    {
        return new JsonResponse($data, $status, $headers);
    }

}
