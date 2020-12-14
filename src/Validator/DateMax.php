<?php

namespace App\Validator;

use Symfony\Component\Validator\Constraint;

/**
 * @Annotation
 */
class DateMax extends Constraint {
    
    public $message = 'Date field {{string}} exceeds max value of "{{maxDate}}"';
    public $format = 'd.m.Y';
    public $maxDate = "now";
}