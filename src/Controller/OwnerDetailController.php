<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Psr\Log\LoggerInterface;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use App\Entity\Owner;
use App\Repository\OwnerRepository;


class OwnerDetailController extends AbstractController
{
    /**
     * @Route("/api/owner/", name="owner_detail")
     */
    public function owner(Request $request, EntityManagerInterface $entityManager,
        OwnerRepository $ownerRepository, 
        LoggerInterface $logger): Response
    {
        $data = json_decode($request->getContent(), true);
        if (array_key_exists('btn_add', $data)) {
            // add car
            $logger->debug('Add car');
            return $this->response(['redirect' => '/car']);
        }

        $owner_id = $request->getSession()->get('owner_id', -1);
        $logger->debug("owner_id: ".$owner_id);
        $owner = new Owner();
        if ($owner_id > 0)
        {  
            // get owner
            $owner = $ownerRepository->find($owner_pk);
        }
        
        if (array_key_exists('owner', $data))
        {
            // add new or update owner
            $owner_json = $data['owner'];
            //$logger->debug("name: ".$owner_json['name']);
            $owner->setName($owner_json['name']);
            //$logger->debug("patronymic: ".$owner_json['patronymic']);
            $owner->setPatronymic($owner_json['patronymic']);
            //$logger->debug("last_name: ".$owner_json['last_name']);
            $owner->setLastName($owner_json['last_name']);
            //$logger->debug("age: ".$owner_json['age']);
            $owner->setAge($owner_json['age']);
            //$logger->debug("gender: ".$owner_json['gender']);
            $owner->setGender($owner_json['gender']);
            //$logger->debug("comment: ".$owner_json['comment']);
            $owner->setComment($owner_json['comment']);
            $entityManager->persist($owner);
            $entityManager->flush();
            //$logger->debug("id: ".$owner->getId());
            return $this->response($owner);
        }

        $logger->debug("id: ".$owner->getId());
        return $this->response($owner);
    }

    public function response($data, $status = 200, $headers = [])
    {
        return new JsonResponse($data, $status, $headers);
    }
}
