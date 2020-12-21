<?php

namespace App\Validator;use Symfony\Component\Validator\Constraint;
use Symfony\Component\Validator\ConstraintValidator;
use Symfony\Component\Validator\Exception\UnexpectedTypeException;
use Symfony\Component\Validator\Exception\UnexpectedValueException;
use DateTime;

class DateMinValidator extends ConstraintValidator {
    
    public function validate($value, Constraint $constraint) {
        if (!$constraint instanceof DateMin) {
            throw new UnexpectedTypeException($constraint, DateMin::class);
        }

        if (null === $value || '' === $value) {
            return;
        }

        if (!is_string($value)) {
            throw new UnexpectedValueException($value, 'string');
        }
        
        try {
            $minDate = DateTime::createFromFormat($constraint->format, $constraint->minDate);

            $valDate = DateTime::createFromFormat($constraint->format, $value);
            if ($valDate < $minDate) {
                $this->context->buildViolation($constraint->message)
                    ->setParameter('{{ string }}', $value)
                    ->setParameter('{{minDate}}', $minDate->format($constraint->format))
                    ->addViolation();
            }
        } catch (\Exception $e) {
            // nothing to do - other validators should work
        }
    }
}