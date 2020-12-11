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
        $data = json_decode($request->getContent(), true);
        //$o = $request->request->get('owner', -10);
        //$logger->debug("request->get $o");
        if (array_key_exists('btn_del', $data)) {
            // delete owner
            $logger->debug('Delete owner');
        }
        if (array_key_exists('btn_edit', $data)) {
            // edit owner
            if (array_key_exists('item_pk', $data)) 
            {
                $owner_id = $data['item_pk'];
                $logger->debug("Edit owner $owner_id");
                $request->getSession()->set('owner_id', $owner_id);
                return $this->response(['redirect' => '/owner']);
            }
        }
        if (array_key_exists('btn_add', $data)) {
            // add owner
            $request->getSession()->set('owner_id', -1);
            $logger->debug('Add owner');
            return $this->response(['redirect' => '/owner']);
        }
        
        if (array_key_exists('sorted_by', $data)) {
            $owner_id = $data["owner"];
            $sorted_name = $data["sorted_by"]["name"];
            $direction = $data["sorted_by"]["direction"];
        }

        $data = $ownerRepository->findAll();
        return $this->response($data);

    }

    public function response($data, $status = 200, $headers = [])
    {
        return new JsonResponse($data, $status, $headers);
    }

    protected function testResponse() 
    {
        $output = 
        [
            [
                "id" => 1,
                "name" => "jbnjkbjlk", 
                "patronymic" => "", 
                "last_name" => "ffcc", 
                "age" => 20,
                "gender" => "f",
                "comment" => ""
            ],
            [
                "id" => 2,
                "name" => "tutu", 
                "patronymic" => "ddd", 
                "last_name" => "kuku", 
                "age" => 100,
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
