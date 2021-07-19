<?php

namespace App\Entity;

use App\Repository\OwnerRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Mapping\ClassMetadata;
use Symfony\Component\Validator\Constraints as Assert;

/**
 * @ORM\Entity(repositoryClass=OwnerRepository::class)
 */
class Owner implements \JsonSerializable
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=50)
     */
    private $name;

    /**
     * @ORM\Column(type="string", length=50, nullable=true)
     */
    private $patronymic;

    /**
     * @ORM\Column(type="string", length=50)
     */
    private $last_name;

    /**
     * @ORM\Column(type="integer")
     */
    private $age;

    /**
     * @ORM\Column(type="string", length=1)
     */
    private $gender;

    /**
     * @ORM\Column(type="string", length=200, nullable=true)
     */
    private $comment;

    /**
     * @ORM\OneToMany(targetEntity=Car::class, mappedBy="owner", orphanRemoval=true)
     */
    private $cars;

    public function __construct()
    {
        $this->cars = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name): self
    {
        $this->name = $name;

        return $this;
    }

    public function getPatronymic(): ?string
    {
        return $this->patronymic;
    }

    public function setPatronymic(string $patronymic): self
    {
        $this->patronymic = $patronymic ? $patronymic : '';

        return $this;
    }
    
    public function getLastName(): ?string
    {
        return $this->last_name;
    }

    public function setLastName(string $last_name): self
    {
        $this->last_name = $last_name;

        return $this;
    }

    public function getAge(): ?int
    {
        return $this->age;
    }

    public function setAge(int $age): self
    {
        $this->age = $age;

        return $this;
    }

    public function getGender(): ?string
    {
        return $this->gender;
    }

    public function setGender(string $gender): self
    {
        $this->gender = $gender;

        return $this;
    }

    public function getComment(): ?string
    {
        return $this->comment;
    }

    public function setComment(?string $comment): self
    {
        $this->comment = $comment ? $comment : "";

        return $this;
    }

    public function jsonSerializeCars() {
        $cars = [];
        $i = 0;
        if ($this->getCars()) {
            foreach($this->getCars() as $car) {
                $cars[$i++] = $car->jsonSerialize();
            }
        }
        return $cars;
    }

    public function jsonSerialize()
    {
        return [
            "id" => $this->getId(),
            "name" => $this->getName(),
            "patronymic" => $this->getPatronymic(),
            "last_name" => $this->getLastName(),
            "age" => $this->getAge(),
            "gender" => $this->getGender(),
            "comment" => $this->getComment(),
            "cars" => $this->jsonSerializeCars()
        ];
    }

    public function fillFromJson($json) {
        $this->setName($json['name']);
        $this->setPatronymic($json['patronymic']? $json['patronymic']: '');
        $this->setLastName($json['last_name']);
        $this->setAge((int)$json['age']);
        $this->setGender($json['gender']);
        $this->setComment($json['comment']);
    }

    /**
     * @return Collection|Car[]
     */
    public function getCars(): Collection
    {
        return $this->cars;
    }

    public function addCar(Car $car): self
    {
        if (!$this->cars->contains($car)) {
            $this->cars[] = $car;
            $car->setOwner($this);
        }

        return $this;
    }

    public function removeCar(Car $car): self
    {
        if ($this->cars->removeElement($car)) {
            // set the owning side to null (unless already changed)
            if ($car->getOwner() === $this) {
                $car->setOwner(null);
            }
        }

        return $this;
    }

    public function setCars(Array $cars) {
        foreach($cars as $car) {
            $this->addCar($car);
        }
    }

    public static function loadValidatorMetadata(ClassMetadata $metadata)
    {
        $metadata->addPropertyConstraint('name', new Assert\NotNull(array(
            'message' => 'Поле Имя не может быть пустым',
        )));
        $metadata->addPropertyConstraint('name', new Assert\NotBlank(array(
            'message' => 'Поле Имя не может быть пустым',
        )));
        $metadata->addPropertyConstraint('patronymic', new Assert\NotNull(array(
            'message' => 'Поле Отчество не может быть пустым',
        )));
        $metadata->addPropertyConstraint('last_name', new Assert\NotNull(array(
            'message' => 'Поле Фамилия не может быть пустым',
        )));
        $metadata->addPropertyConstraint('last_name', new Assert\NotBlank(array(
            'message' => 'Поле Фамилия не может быть пустым',
        )));
        $metadata->addPropertyConstraint('age', new Assert\NotNull(array(
            'message' => 'Поле Возраст не может быть пустым',
        )));
        $metadata->addPropertyConstraint('age', new Assert\Range(array(
            'min'        => 18,
            'max'        => 120,
            'notInRangeMessage' => "Ваш возраст должен быть между {{ min }} и {{ max }} годами",
        )));
        // $metadata->addPropertyConstraint('age', new Assert\Positive(array(
        //     'message' => 'Поле Возраст должно быть больше 0',
        // )));
        $metadata->addPropertyConstraint('age', new Assert\Type(array(
            'type'    => 'integer',
            'message' => 'Поле Возраст должно быть целым числом',
        )));

    }
}
