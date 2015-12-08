<?php

namespace App\Validators;

use App\Exceptions\MimeError;

class FileValidator
{

    static $TYPES = [
        'csv' => [
            'application/csv',
            'application/excel',
            'application/vnd.ms-excel',
            'application/vnd.msexcel',
            'text/csv',
            'text/anytext',
            'text/comma-separated-values'
        ]
    ];


    /**
     * @param $file
     * @param $type
     * @return bool
     * @throws MimeError
     */
    static public function FILE_TYPE($file, $type)
    {
        if (( $file->isValid() ) && ( $file->getClientSize() > 0 )) {
            if (in_array($file->getClientMimeType(), SELF::$TYPES[$type])) {
                return true;
            } elseif (( $file->getClientOriginalExtension() === $type ) && ( $file->getClientMimeType() === 'text/plain' )) {
                return true;
            }
            throw new MimeError(); // Throw a new mimeError
        }
    }
}