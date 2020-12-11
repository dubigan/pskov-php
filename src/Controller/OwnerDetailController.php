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
    public function owner(Request $request, OwnerRepository $ownerRepository, 
        LoggerInterface $logger): Response
    {
        $data = json_decode($request->getContent(), true);
        if (array_key_exists('btn_add', $data)) {
            // add car
            $logger->debug('Add car');
            return $this->response(['redirect' => '/car']);
        }

        return $this->response([]);
    }

    public function response($data, $status = 200, $headers = [])
    {
        return new JsonResponse($data, $status, $headers);
    }
}
