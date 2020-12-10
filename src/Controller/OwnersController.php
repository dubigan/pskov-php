<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Psr\Log\LoggerInterface;

class OwnersController extends AbstractController
{
    /**
     * @Route("/api/owners/", name="owners")
     */
    public function index(LoggerInterface $logger): Response
    {
        if ($_SERVER["CONTENT_TYPE"] ==  'application/json') {
            try {
                $postData = file_get_contents('php://input');
                $data = json_decode($postData, true);
                $name = $data["sorted_by"]["name"];
                $direction = $data["sorted_by"]["direction"];
                $logger->debug($data["owner"]);
            }
            catch (Exception $e) {
                $logger->debug($e->getMessage());
            }
            catch (Error $e) {
                $logger->debug($e->getMessage());
            }
        }
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
        $output_json = json_encode($output);
        //$logger->debug($output_json);
        $response = new Response(
            $output_json,
            Response::HTTP_OK,
            ['content-type' => 'application/json']
        );
        //$request = Request::createFromGlobals();
        //$response->prepare($request);
        return $response;
    }
}
