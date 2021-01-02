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

class OwnersController extends CommonController
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
        $url_edit = $url_add = '/owner';
        $data = $this->getJsonData($request);

        $this->deleteItem($data, $entityManager, $repository);

        $response = $this->editItem($request, $data, $url_edit);
        if ($response) return $response;
       
        $response = $this->addItem($request, $data, $url_add);
        if ($response) return $response;
        
        return $this->response($this->getSortedQuerySet($data, $repository));
        //return $this->testResponse();

    }

    protected function setSessionParamsForItemAdd(Request $request, Array $data) {
        $request->getSession()->set('owner_id', -1);
    }

    protected function setSessionParamsForItemEdit(Request $request, Array $data, $item_id) {
        $request->getSession()->set('owner_id', $item_id);
    }

    protected function testResponse() {
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
