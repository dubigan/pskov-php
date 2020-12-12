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


class OwnerDetailController extends AbstractController
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
        $data = json_decode($request->getContent(), true);
        if (array_key_exists('btn_add', $data)) {
            // add car
            $logger->debug('Add car');
            return $this->response(['redirect' => '/car']);
        }

        $owner_id = $request->getSession()->get('owner_id', -1);
        $logger->debug("owner_id: ".$owner_id);
        $owner = new Owner();
        if ($owner_id > 0) {  
            // get owner
            $owner = $repository->find($owner_id);
        }
        
        if (array_key_exists('owner', $data)) {
            // add new or update owner
            $owner_json = $data['owner'];
            $name = $owner_json['name'];
            $owner->setName($name ? $name : "");
            $patronymic = $owner_json['patronymic'];
            $owner->setPatronymic($patronymic ? $patronymic : "");
            $lastName = $owner_json['last_name'];
            $owner->setLastName($lastName ? $last_name : "");
            $age = $owner_json['age'];
            $owner->setAge($age ? $age : 0);
            $gender = $owner_json['gender'];
            $owner->setGender($gender ? $gender : 'm');
            $comment = $owner_json['comment'];
            $owner->setComment($comment ? $comment : "");

            $errors = $validator->validate($owner);
            if (count($errors) > 0) {
                $logger->debug('validation errors: '.$errors);
                return $this->response((string)$errors, 400);
            }

            $entityManager->persist($owner);
            $entityManager->flush();
            //$logger->debug("id: ".$owner->getId());
            return $this->response($owner);
        }

        //$logger->debug("id: ".$owner->getId());
        return $this->response($owner);
    }

    public function response($data, $status = 200, $headers = []) {
        return new JsonResponse($data, $status, $headers);
    }
}
