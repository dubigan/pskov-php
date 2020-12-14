<?php

namespace App\Validator;

use Symfony\Component\Validator\Constraint;
use Symfony\Component\Validator\ConstraintValidator;
use Symfony\Component\Validator\Exception\UnexpectedTypeException;
use Symfony\Component\Validator\Exception\UnexpectedValueException;
use DateTime;

class DateMaxValidator extends ConstraintValidator {
    
    public function validate($value, Constraint $constraint) {
        if (!$constraint instanceof DateMax) {
            throw new UnexpectedTypeException($constraint, DateMax::class);
        }

        if (null === $value || '' === $value) {
            return;
        }

        if (!is_string($value)) {
            throw new UnexpectedValueException($value, 'string');
        }
        
        try {
            $maxDate;
            if ($constraint->maxDate == 'now') {
                $maxDate = new DateTime();
            } else {
                $maxDate = DateTime::createFromFormat($constraint->format, $constraint->$maxDate);
            }
            $valDate = DateTime::createFromFormat($constraint->format, $value);
            if ($valDate > $maxDate) {
                $this->context->buildViolation($constraint->message)
                    ->setParameter('{{ string }}', $value)
                    ->setParameter('{{maxDate}}', $maxDate->format($constraint->format))
                    ->addViolation();
            }
        } catch (\Exception $e) {
            // nothing to do - other validators should work
        }
    }
}