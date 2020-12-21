<?php

namespace App\Entity;

use App\Repository\CarRepository;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints as Assert;
use Symfony\Component\Validator\Mapping\ClassMetadata;
use App\Validator\DateMax;
use App\Validator\DateMin;

/**
 * @ORM\Entity(repositoryClass=CarRepository::class)
 */
class Car implements \JsonSerializable
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=50, nullable=true)
     */
    private $model;

    /**
     * @ORM\Column(type="string", length=20, nullable=true)
     */
    private $color;

    /**
     * @ORM\Column(type="string", length=50, nullable=true)
     */
    private $production;

    /**
     * @ORM\Column(type="integer", nullable=true)
     */
    private $power;

    /**
     * @ORM\Column(type="string", length=50, nullable=true)
     */
    private $manufacturer;

    /**
     * @ORM\ManyToOne(targetEntity=Owner::class, inversedBy="cars")
     */
    private $owner;

    /**
     * @ORM\Column(type="string", length=200, nullable=true)
     */
    private $comment;

    /**
     * @ORM\Column(type="bigint", nullable=true)
     */
    private $mileage;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getModel(): ?string
    {
        return $this->model;
    }

    public function setModel(?string $model): self
    {
        $this->model = $model ? $model : '';

        return $this;
    }

    public function getColor(): ?string
    {
        return $this->color;
    }

    public function setColor(?string $color): self
    {
        $this->color = $color ? $color : '';

        return $this;
    }

    public function getProduction(): ?string
    {
        return $this->production;
    }

    public function setProduction(?string $production): self
    {
        $this->production = $production ? $production : '';

        return $this;
    }

    public function getPower(): ?int
    {
        return $this->power;
    }

     public function setPower(?int $power): self
    {
        $this->power = $power;

        return $this;
    }

    public function getManufacturer(): ?string
    {
        return $this->manufacturer;
    }

    public function setManufacturer(?string $manufacturer): self
    {
        $this->manufacturer = $manufacturer ? $manufacturer : '';

        return $this;
    }

    public function getOwner(): ?Owner
    {
        return $this->owner;
    }

    public function setOwner(?Owner $owner): self
    {
        $this->owner = $owner;

        return $this;
    }

    public function getComment(): ?string
    {
        return $this->comment;
    }

    public function setComment(?string $comment): self
    {
        $this->comment = $comment ? $comment : '';

        return $this;
    }

    public function jsonSerialize()
    {
        return [
            'id' => $this->getId(),
            'model' => $this->getModel(),
            'color' => $this->getColor(),
            'production' => $this->getProduction(),
            'power' => $this->getPower(),
            'mileage' => $this->getMileage(),
            'manufacturer' => $this->getManufacturer(),
            'comment' => $this->getComment(),
            //'owner' => $this->getOwner(),
        ];
    }

    public function fillFromJson($json) {
        if (!isset($json)) return;
        $this->setModel($json['model']);
        $this->setColor($json['color']);
        $this->setProduction($json['production']);
        $this->setPower((int)$json['power']);
        $this->setMileage((int)$json['mileage']);
        $this->setManufacturer($json['manufacturer']);
        $this->setComment($json['comment']);
    }

    public function getMileage(): ?int
    {
        return $this->mileage;
    }

    public function setMileage(?int $mileage): self
    {
        $this->mileage = $mileage;

        return $this;
    }

    public static function loadValidatorMetadata(ClassMetadata $metadata)
    {
        $metadata->addPropertyConstraint('model', new Assert\NotBlank(array(
            'message' => 'Поле Модель не может быть пустым',
        )));
        $metadata->addPropertyConstraint('color', new Assert\NotBlank(array(
            'message' => 'Поле Цвет не может быть пустым',
        )));
        $metadata->addPropertyConstraint('production', new DateMax(array(
            'format' => "d.m.Y",
            'maxDate' => 'now',
            'message' => "Поле Дата не должно превышать {{maxDate}}",
        )));
        $metadata->addPropertyConstraint('production', new DateMin(array(
            'format' => "d.m.Y",
            'message' => "Поле Дата должно превышать {{minDate}}",
        )));
        $metadata->addPropertyConstraint('production', new Assert\DateTime(array(
            'format' => "d.m.Y",
            'message' => "Поле Дата должно быть в формате dd.mm.yyyy",
        )));
        $metadata->addPropertyConstraint('manufacturer', new Assert\NotBlank(array(
            'message' => 'Поле Производитель не может быть пустым',
        )));
        $metadata->addPropertyConstraint('power', new Assert\Type(array(
            'type'    => 'integer',
            'message' => 'Поле Мощность должно быть целым числом',
        )));
        $metadata->addPropertyConstraint('power', new Assert\Positive(array(
            'message' => 'Поле Мощность должно быть больше 0',
        )));
        $metadata->addPropertyConstraint('mileage', new Assert\Type(array(
            'type'    => 'integer',
            'message' => 'Поле Пробег должно быть целым числом',
        )));
        $metadata->addPropertyConstraint('mileage', new Assert\Positive(array(
            'message' => 'Поле Пробег должно быть больше 0',
        )));
    }
}
