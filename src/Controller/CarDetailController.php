<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Psr\Log\LoggerInterface;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Validator\Validator\ValidatorInterface;
use App\Entity\Car;
use App\Repository\CarRepository;

class CarDetailController extends CommonController
{
    /**
     * @Route("/api/car/", name="car_detail", methods={"POST"})
     */
    public function car(
        Request $request, 
        EntityManagerInterface $entityManager,
        CarRepository $repository,
        ValidatorInterface $validator,
        LoggerInterface $logger
        ): Response
    {
        $data = $this->getJsonData($request);

        $owner_id = $request->getSession()->get('owner_id', -1);
        $car_id = $request->getSession()->get('car_id', -1);
        if ($car_id < 0) {
            $car = new Car();
            if ($owner_id > 1) $car->setOwner($owner_id);
        }
        if ($car_id > 0) $car = $repository->find($car_id);

        $response = $this->saveItem($data, $car, $entityManager, $validator, $logger);
        if (isset($response)) return $response;

        return $this->response($car);
    }
}
