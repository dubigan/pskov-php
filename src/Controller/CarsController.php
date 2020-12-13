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



class CarsController extends CommonController
{
    /**
     * @Route("/api/cars/", name="cars", methods={"POST"})
     */
    public function cars(
        Request $request, 
        EntityManagerInterface $entityManager,
        CarRepository $repository, 
        LoggerInterface $logger): Response
    {
        $data = $this->getJsonData($request);
        
        $this->deleteItem($data, $entityManager, $repository);

        $response = $this->editItem($request, $data, '/car');
        if (isset($response)) return $response;

        return $this->response($this->getSortedQuerySet($data, $repository));
    }

    protected function setSessionParamsForItemEdit(Request $request, Array $data, $item_id) {
        $session = $request->getSession();
        $session->set('car_id', $item_id);
        $session->set('back_from_car', $data['url']);
    }

}
