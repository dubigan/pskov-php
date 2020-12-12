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
    public function owners(
        Request $request, 
        EntityManagerInterface $entityManager,
        OwnerRepository $repository, 
        LoggerInterface $logger): Response
    {
        $data = json_decode($request->getContent(), true);
        if (array_key_exists('btn_del', $data)) {
            // delete owner
            $item_pk = $data['item_pk'];
            $logger->debug('Delete owner: '.$item_pk);
            if (isset($item_pk) && !empty($item_pk)) {
                $owner = $repository->find($item_pk);
                $entityManager->remove($owner);
                $entityManager->flush();
            }
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
            //$owner_id = $data["owner"];
            $sorted_name = $data["sorted_by"]["name"];
            $direction = $data["sorted_by"]["direction"];
            if (isset($sorted_name) && !empty($sorted_name))
                $querySet = $repository->findBy(array(), array("$sorted_name" => "$direction"));
        }

        if (!isset($querySet)) $querySet = $repository->findAll();
        
        return $this->response($querySet);

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
