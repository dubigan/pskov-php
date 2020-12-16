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


class DownloadController extends CommonController
{
    /**
     * @Route("/api/download/", name="download")
     */
    public function download(
        Request $request, 
        EntityManagerInterface $entityManager,
        OwnerRepository $repository,
        LoggerInterface $logger
    ): Response
    {
        $format = $request->get('format', 'json');
        $logger->debug('download: '.$format);
        $owners = $repository->findAll();
        switch($format) {
            case 'csv':
                break;
            default: //json
                return $this->response($owners, 200, ['content-disposition' => 'attachment; filename=file.json']);
        }

        return $this->response([]);
    }

}
