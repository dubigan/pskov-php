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
use App\Entity\Owner;
use App\Repository\CarRepository;
use App\Repository\OwnerRepository;



class CarsController extends CommonController
{
    /**
     * @Route("/api/cars/", name="cars", methods={"POST"})
     */
    public function cars(
        Request $request, 
        EntityManagerInterface $entityManager,
        CarRepository $carRepo, 
        OwnerRepository $ownerRepo, 
        LoggerInterface $logger): Response
    {
        $data = $this->getJsonData($request);
        $owner = null;
        if (array_key_exists('owner', $data)) {
            //$owner = $ownerRepo->find($data['owner']);
            $owner = $data['owner'];
            //$owner = $data['owner'] > 0 ? $data['owner'] : null;
            //$logger->debug('owner'.$owner);
        }
        
        $this->deleteItem($data, $entityManager, $carRepo);

        $response = $this->editItem($request, $data, '/car');
        if ($response) return $response;

        $querySet = $this->getSortedQuerySet($data, $carRepo, $owner, $logger);
        return $this->response($querySet);
    }

    protected function setSessionParamsForItemEdit(Request $request, Array $data, $item_id) {
        $session = $request->getSession();
        $session->set('car_id', $item_id);
        $session->set('back_from_car', $data['url']);
    }

}
