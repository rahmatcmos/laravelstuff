<?php

namespace App\Http\Controllers;

use App\Exceptions\MimeError;
use App\Exceptions\FileNotSupportedError;
use App\Exceptions\EmptyFileError;
use App\Http\Requests\UploadRequest;
use App\Validators\FileValidator;
use Input;
use Validator;
use Request;
use Response;

class UploadController extends Controller
{

    protected $page;


    public function getUpload()
    {
        $page = "Upload";

        $old_path = getcwd();
        chdir('../CityGisProcess/scripts/');
        shell_exec('./launch');

        return view('dividers.upload', compact('page'));
    }


    /**
     * @param UploadRequest $request
     * @return mixed
     */
    public function postUpload(UploadRequest $request)
    {
        return $this->upload($request->file);
    }

    /*
     * Upload the file to the folderwatcher directory
     *
     * @param $file
     * @return \Illuminate\Http\RedirectResponse
     * @internal param $request
     * @internal param $file
     */
    private function upload($file)
    {
        if ($file !== null) {
            try {
                FileValidator::FILE_TYPE($file, 'csv');
                $old_path = getcwd();
                $destinationPath = '../CityGisProcess/bin/uploads'; // upload path
                $extension = $file->getClientOriginalExtension(); // get the file extension
                $file->getClientOriginalName();
                $file->move($destinationPath, $file->getClientOriginalName()); // Upload file to given path

                // sending back with message
                alert()->success('Upload succesvol!')->autoclose(2500);
                return redirect()->back();
            }
            catch (EmptyFileError $ex)
            {
                alert()->error('Kan geen lege file uploaden...')->autoclose(2500);
                return redirect()->back();
            }
            catch (FileNotSupportedError $ex)
            {
                alert()->error('Verkeerde filenaam, alleen bovenstaande file namen worden geaccepteerd.')->autoclose(2500);
                return redirect()->back();
            }
            catch (MimeError $e) {
                alert()->error('Verkeerde file extensie, alleen .csv toegestaan.')->autoclose(2500);
                return redirect()->back();
            }
        }
        alert()->error('Selecteer één van de bovengenoemde csv bestanden a.u.b.!')->autoclose(2500);
        return redirect()->back();
    }
}
