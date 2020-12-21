<?php

namespace App\Validator;

use Symfony\Component\Validator\Constraint;

/**
 * @Annotation
 */
class DateMin extends Constraint {
    
    public $message = 'Date field {{string}} is below min value of "{{minDate}}"';
    public $format = 'd.m.Y';
    public $minDate = "01.01.1900";
}