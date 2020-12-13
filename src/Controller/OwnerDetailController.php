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
use App\Entity\Owner;
use App\Repository\OwnerRepository;


class OwnerDetailController extends CommonController
{
    /**
     * @Route("/api/owner/", name="owner_detail")
     */
    public function owner(
        Request $request, 
        EntityManagerInterface $entityManager,
        OwnerRepository $repository,
        ValidatorInterface $validator,
        LoggerInterface $logger
        ): Response
    {
        $url_add = $url_edit = '/car';
        $data = $this->getJsonData($request);
        
        $response = $this->addItem($request, $data, $url_add);
        if (isset($response)) return $response;

        $response = $this->editItem($request, $data, $url_edit);
        if (isset($response)) return $response;

        $owner_id = $request->getSession()->get('owner_id', -1);
        $logger->debug("owner_id: ".$owner_id);
        $owner = new Owner();
        if ($owner_id > 0) {  
            // get owner
            $owner = $repository->find($owner_id);
        }
        
        $response = $this->saveItem($request, $data, $owner, $entityManager, $validator, $logger);
        if (isset($response)) return $response;

        return $this->response($owner);
    }

    protected function setSessionParamsForItemEdit(Request $request, Array $data, $item_id) {
        $session = $request->getSession();
        $session->set('car_id', $item_id);
        $session->set('back_from_car', $data['url']);
    }
}
