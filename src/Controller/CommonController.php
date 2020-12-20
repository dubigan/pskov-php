<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Request;
use Psr\Log\LoggerInterface;

class CommonController extends AbstractController {
    
    public function getJsonData(Request $request) : ?Array
    {
        return json_decode($request->getContent(), true);
    }

    public function response($data, $status = 200, $headers = []) : ?Response
    {
        return new JsonResponse($data, $status, $headers);
    }

    public function getSortedQuerySet(
        Array $data, 
        $repository, 
        $owner = null, 
        $logger = null
        ) : ?Array
    {
        $crit = array();
        $querySet = null;
        if ($owner) {
            if ($owner == -10) return []; //new owner, no cars
            if ($owner > 0) $crit['owner'] = $owner;
        }
        if (array_key_exists('sorted_by', $data)) {
            $sorted_name = $data["sorted_by"]["name"];
            $direction = $data["sorted_by"]["direction"];
            if ($sorted_name && !empty($sorted_name))
                $querySet = $repository->findBy($crit, array("$sorted_name" => "$direction"));
        }

        if (!isset($querySet)) $querySet = $repository->findBy($crit);
        return $querySet;
    }

    public function deleteItem(
        Array $data, 
        $entityManager, 
        $repository, 
        $logger = null
        ) 
    {
        if (array_key_exists('btn_del', $data)) {
            // delete item
            $item_pk = $data['item_pk'];
            if ($logger) $logger->debug('Delete item: '.$item_pk);
            if ($item_pk && !empty($item_pk)) {
                $item = $repository->find($item_pk);
                $entityManager->remove($item);
                $entityManager->flush();
            }
        }
    }

    public function editItem(
        Request $request, 
        Array $data, 
        String $redirect_url, 
        $logger = null
        ) : ?Response
    {
        if (array_key_exists('btn_edit', $data)) {
            // edit item
            if (array_key_exists('item_pk', $data)) {
                $item_id = $data['item_pk'];
                if ($logger) $logger->debug('Edit item: '.$item_id);

                $this->setSessionParamsForItemEdit($request, $data, $item_id);

                return $this->response(['redirect' => $redirect_url]);
            }
        }
        return null;
    }

    public function addItem(
        Request $request, 
        Array $data, 
        String $redirect_url, 
        $logger = null
        ) : ?Response
    {
        if (array_key_exists('btn_add', $data)) {
            // add item
            $this->setSessionParamsForItemAdd($request, $data);
            //$request->getSession()->set('owner_id', -1);
            if (isset($logger)) $logger->debug('Add item');
            return $this->response(['redirect' => $redirect_url]);
        }
        return null;
    }

    public function saveItem(
        Request $request, 
        Array $data, 
        $item, 
        $entityManager, 
        $validator, 
        $logger = null
        ) : ?Response
    {
        if (array_key_exists('item', $data)) {
            // add new or update owner
            $item->fillFromJson($data['item']);

            $response = $this->validateErrors($validator, $item, $logger);
            if (isset($response)) return $response;

            $entityManager->persist($item);
            $entityManager->flush();
            //$logger->debug("id: ".$owner->getId());
            return $this->response($item);
        }       
        return null;
    }

    public function validateErrors($validator, $item, $logger = null) : ?Response
    {
        $errors = $validator->validate($item);
        if (count($errors) > 0) {
            $messages = [];
            $i = 0;
            foreach($errors as $error) {
                if ($logger) $logger->debug('validation errors: '.$error->getMessage());
                $messages[$i++] = $error->getMessage();
            }
            return $this->response($messages, 400);
        }
        return null;
    }

    protected function setSessionParamsForItemAdd(Request $request, Array $data) {}
    
    protected function setSessionParamsForItemEdit(Request $request, Array $data, $item_id) {}
}