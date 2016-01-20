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
            'txt',
            'csv',
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
                switch ($file)
                {
                case 'Connections.csv':
                    return true;
                    break;
                case 'Monitoring.csv':
                    return true;
                    break;
                case 'Events.csv':
                    return true;
                    break;
                case 'Positions.csv':
                    return true;
                    break;
                default :
                    return false;
                    break;
                }
                return true;
            } elseif (( $file->getClientOriginalExtension() === $type)) {
                switch ($file)
                {
                case 'Connections.csv':
                    return true;
                    break;
                case 'Monitoring.csv':
                    return true;
                    break;
                case 'Events.csv':
                    return true;
                    break;
                case 'Positions.csv':
                    return true;
                    break;
                default :
                    return false;
                    break;
                }
            } else {
                throw new MimeError(); // Throw a new mimeError
            }
        }
    }
}
