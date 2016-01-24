<?php

namespace App\Http\Controllers;
use App\QueryHandler\QueryHandler;
use App\Charts\Charts;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use App\Http\Requests;
use App\Http\Controllers\Controller;
use Khill\Lavacharts\Lavacharts;

class JsonController extends Controller
{


    public function getJson()
    {
        $uid = $_GET['unitid'];
        $dataDetails = $_GET['dataSelected'];

        $dataTable = $this->createDataTable();
        $this->dataTableFiller($dataTable, $uid, $dataDetails);


        return $dataTable->toJson();

    }


    public function pushUnitId($uid){

        $array = $this->UnitIdArray;
        array_push($array, $uid);

    }

    public function dataTableFiller($dataTable, $UnitIds, $dataDetails){

        $xAxisData = 'Value';
        $this->xAxisDataFiller($dataTable, $xAxisData);
        $this->yAxisDataFiller($dataTable, $UnitIds, $dataDetails);

        return $dataTable;
    }

    public function createDataTable(){

        $dataTable = \Lava::DataTable();
        return $dataTable;

    }

    public function xAxisDataFiller($dataTable, $xAxisData){

        $dataTable->addDateColumn($xAxisData)
            ->setDateTimeFormat('Y-m-d');
        return $dataTable;

    }

    public function yAxisDataFiller($dataTable, $UnitIds, $dataDetails){

        $QueryHandler = new QueryHandler();
        $i = 0;
        #IF there's  1 unit id thrown in the array it will do one.
        if(count($UnitIds) > 0) {
            $this->unitIdAdder($dataTable, $UnitIds);
            $arrayDateHolder = array();
            foreach ($UnitIds as $UnitIdS){
                $arrayValueHolder[$i] = array();
                $dataFromDatabase = $QueryHandler->getMultiDatabaseData($dataDetails, $UnitIdS);
                foreach($dataFromDatabase as $chartRow){
                    array_push($arrayValueHolder[$i], $chartRow->values);
                    array_push($arrayDateHolder, $chartRow->days);
                }
                $i++;
            }

            $arrayDateHolder = $this->dateCalculator($arrayDateHolder);
            $this->cutDatabaseData($dataTable, $i, $arrayValueHolder, $arrayDateHolder);

        }

        else{
            foreach ($UnitIds as $UnitIds) {
                $dataTable->addNumberColumn(strval($UnitIds));
                $dataFromDatabase = $QueryHandler->getSingleDatabaseData($dataDetails);
                foreach ($dataFromDatabase as $chartRow) {
                    $dataTable->addRow(array($chartRow->days, $chartRow->values));
                }
            }


        }
        return $dataTable;
    }

    public function unitIdAdder($dataTable, $UnitIds){

        foreach ($UnitIds as $singleString) {
            $dataTable->addNumberColumn(strval($singleString));
        }
        return $dataTable;
    }


    public function dateCalculator($arrayDateHolder){

        $result = array_unique($arrayDateHolder);
        sort($result);
        return $result;
    }

    public function cutDatabaseData($dataTable, $i, $arrayDataHolder, $arrayDateHolder){

        $x = 0;
        foreach($arrayDateHolder as $arrayDateHolder){
            $a = 0;
            $dataTableArray = array($arrayDateHolder);


            for($c = 0; $c<$i;$c++)
                if(empty($arrayDataHolder[$a][$x])){
                    $arrayDataHolder[$a][$x] = 0;
                    array_push($dataTableArray, $arrayDataHolder[$a][$x]);
                    if($c<$i)
                        $a++;
                }
                else{
                    array_push($dataTableArray, $arrayDataHolder[$a][$x]);
                    if($c<$i)
                        $a++;
                }
            $x++;
            $dataTable->addRow($dataTableArray);
        }
        return $dataTable;
    }

}
