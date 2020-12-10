<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Doctrine\ORM\EntityManagerInterface;
use App\Entity\Owner;
use App\Repository\OwnerRepository;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Psr\Log\LoggerInterface;

class OwnersController extends AbstractController
{
    /**
     * @Route("/api/owners/", name="owners", methods={"POST"})
     */
    public function owners(Request $request, OwnerRepository $ownerRepository, 
    LoggerInterface $logger): Response
    {
        //$request = Request::createFromGlobals();
        $data = json_decode($request->getContent(), true);
        $logger->debug($data["owner"]);

        $data = $ownerRepository->findAll();
        return $this->response($data);


        // $output = 
        // [
        //     [
        //         "id" => 1,
        //         "name" => "jbnjkbjlk", 
        //         "patronymic" => "", 
        //         "last_name" => "ffcc", 
        //         "age" => 20,
        //         "gender" => "f",
        //         "comment" => ""
        //     ],
        //     [
        //         "id" => 2,
        //         "name" => "tutu", 
        //         "patronymic" => "ddd", 
        //         "last_name" => "kuku", 
        //         "age" => 100,
        //         "gender" => "m",
        //         "comment" => ""
        //     ]
        // ];
        // $response = new JsonResponse(
        //     $output,
        //     Response::HTTP_OK,
        // );
        // return $response;
    }

    public function response($data, $status = 200, $headers = [])
    {
        return new JsonResponse($data, $status, $headers);
    }
}
