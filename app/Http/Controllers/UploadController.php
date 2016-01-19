<?php

namespace App\Http\Controllers;

use App\Exceptions\MimeError;
use App\Exceptions\WrongFile;
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

        return view('dividers.upload', compact('page'));
    }


    /**
     * @param UploadRequest $request
     * @return mixed
     */
    public function postUpload(UploadRequest $request)
    {
        $old_path = getcwd();
        chdir('../CityGisProcess/scripts');
        shell_exec('./CityGisProcess');
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
                $extension = $file->getClientOriginalExtension(); // getting file extension
                // $fileName = rand(11111, 99999) . '.' . $extension; // renaming file
                $fileName="Connections.csv";
                $file->move($destinationPath, $fileName); // Uploading file to given path

                // sending back with message
                alert()->success('Upload succesvol!')->autoclose(2500);
                return redirect()->back();
            } catch (MimeError $e) {
                alert()->error('Verkeerde file extensie, alleen .csv of .txt toegestaan');
                return redirect()->back();
            }
        }
        alert()->error('Selecteer een .csv of .txt bestand a.u.b.!')->autoclose(2500);
        return redirect()->back();
    }
}
