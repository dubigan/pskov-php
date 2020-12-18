<?php

namespace App\Entity;

use App\Repository\CarRepository;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints as Assert;
use App\Validator\DateMax;

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

    /**
     * @Assert\NotBlank(
     *      message = "Поле Модель не может быть пустым",
     * )
     */
    public function getModel(): ?string
    {
        return $this->model;
    }

    public function setModel(?string $model): self
    {
        $this->model = $model ? $model : '';

        return $this;
    }

    /**
     * @Assert\NotBlank(
     *      message = "Поле Цвет не может быть пустым",
     * )
     */
    public function getColor(): ?string
    {
        return $this->color;
    }

    public function setColor(?string $color): self
    {
        $this->color = $color ? $color : '';

        return $this;
    }

    /**
     * @Assert\NotBlank(
     *      message = "Поле Дата не может быть пустым",
     * )
     */
    /**
     * @Assert\DateTime(
     *      format = "d.m.Y",
     *      message = "Поле Дата должно быть в формате dd.mm.yyyy"
     * )
     * @var string A "Y-m-d H:i:s" formatted value
     */
    /**
     * @DateMax(
     *      format = "d.m.Y",
     *      maxDate = "now",
     *      message = "Поле Дата не должно превышать {{maxDate}}"
     * )
     * @var string A "Y-m-d H:i:s" formatted value
     */
    public function getProduction(): ?string
    {
        return $this->production;
    }

    public function setProduction(?string $production): self
    {
        $this->production = $production ? $production : '';

        return $this;
    }

    /**
     * @Assert\Positive(
     *      message = "Поле Мощность должно быть больше 0",
     * )
    */
    public function getPower(): ?int
    {
        return $this->power;
    }

     public function setPower(?int $power): self
    {
        $this->power = $power ? $power : 1;

        return $this;
    }

    /**
     * @Assert\NotBlank(
     *      message = "Поле Производитель не может быть пустым",
     * )
     */
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
            //'owner_id' => $this->getOwner() ? $this->getOwner->getId() : -1,
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

    /**
     * @Assert\Positive(
     *      message = "Поле Пробег должно быть больше 0",
     * )
    */
    public function getMileage(): ?int
    {
        return $this->mileage;
    }

    public function setMileage(?int $mileage): self
    {
        $this->mileage = $mileage ? $mileage : 1;

        return $this;
    }
}
