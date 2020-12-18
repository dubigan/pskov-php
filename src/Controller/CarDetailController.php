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
use App\Entity\Owner;
use App\Repository\CarRepository;
use App\Repository\OwnerRepository;

class CarDetailController extends CommonController
{
    /**
     * @Route("/api/car/", name="car_detail", methods={"POST"})
     */
    public function car(
        Request $request, 
        EntityManagerInterface $entityManager,
        CarRepository $carRepo,
        OwnerRepository $ownerRepo,
        ValidatorInterface $validator,
        LoggerInterface $logger
        ): Response
    {
        $data = $this->getJsonData($request);

        $owner_id = $request->getSession()->get('owner_id', -1);
        $car_id = $request->getSession()->get('car_id', -1);
        $logger->debug('car_id: '.$car_id);
        $logger->debug('owner_id: '.$owner_id);
        $car = new Car();
        if ($car_id < 0) {
           if ($owner_id > 1) $car->setOwner($ownerRepo->find($owner_id));
        }
        if ($car_id > 0) $car = $carRepo->find($car_id);

        $response = $this->saveItem($request, $data, $car, $entityManager, $validator, $logger);
        if (isset($response)) return $response;

        return $this->response($car);
    }

    public function saveItem(
        Request $request, 
        Array $data, $item, 
        $entityManager, 
        $validator, 
        $logger = null
        ) : ?Response
    {
        $response = parent::saveItem($request, $data, $item, $entityManager, $validator, $logger);
        if (isset($response)) {
            if ($response->getStatusCode() == 200) {
                $redirect_url = $request->getSession()->get('back_from_car', null);
                $logger->debug('saveItem redirect url: '.$redirect_url);
                if (isset($redirect_url)) {
                    return $this->response(['redirect' => $redirect_url]);
                }
            }
            else {
                return $response;
            }
        }
        return null;
    }
}
