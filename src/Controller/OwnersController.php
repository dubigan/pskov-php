<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
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
    public function index(Request $request, LoggerInterface $logger): Response
    {
        //$request = Request::createFromGlobals();
        $data = json_decode($request->getContent(), true);
        $logger->debug($data["owner"]);

        $output = 
        [
            [
                "id" => 1,
                "name" => "jbnjkbjlk", 
                "patronymic" => "", 
                "last_name" => "ffcc", 
                "age" => 20,
                "gender" => "m",
                "comment" => ""
            ]
        ];
        $response = new JsonResponse(
            $output,
            Response::HTTP_OK,
        );
        return $response;
    }
}
