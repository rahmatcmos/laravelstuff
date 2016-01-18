<?php

namespace App\Charts;
use Khill\Lavacharts\Lavacharts;

class Charts
{

    public function createChart($UnitIds, $ChartTable, $Chart){

        If($Chart == 'Line'){
            $this->createLineChart($UnitIds, $ChartTable);
        } else if($Chart == 'Column'){
            $this->createColumnChart($UnitIds, $ChartTable);
        } else {
            ##No chart is selected
        }


    }

    public function createLineChart($UnitIds, $ChartTable){

        $dataTable = $this->dataTableFiller($UnitIds, $ChartTable);

        $linechart = \Lava::LineChart('LineChart')
            ->dataTable($dataTable)
            ->title('Linechart');
    }

    public function createColumnChart($UnitIds, $ChartTable){

        $dataTable = $this->dataTableFiller($UnitIds, $ChartTable);

        $columnchart = \Lava::ColumnChart('ColumnChart')
            ->dataTable($dataTable)
            ->title('Column');
    }

    public function dataTableFiller($UnitIds, $ChartTable){

        $xAxisData = 'Ignition';

        $dataTable = $this->createDataTable();
        $this->xAxisDataFiller($dataTable, $xAxisData);
        $this->yAxisDataFiller($dataTable, $UnitIds, $ChartTable);

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

    public function yAxisDataFiller($dataTable, $UnitIds, $ChartTable){

        $i = 0;
        #IF there's  1 unit id thrown in the array it will do one.
        if(count($UnitIds) > 1) {
            $this->unitIdAdder($dataTable, $UnitIds);
            $arrayDateHolder = array();
            foreach ($UnitIds as $UnitIdS){
                $arrayValueHolder[$i] = array();
                $dataFromDatabase = $this->getMultiDatabaseData($ChartTable, $UnitIdS);
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
                $dataFromDatabase = $this->getSingleDatabaseData($ChartTable);
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

    public function getSingleDatabaseData($ChartTable){

        $connection = \DB::table($ChartTable)
            ->select(\DB::raw('SUBSTRING(date_time,0,11) AS days'),
                \DB::raw('SUM(CAST(value AS INT)) AS values'))
            ->groupBy('days')
            ->orderBy('days', 'asc')
            ->get();

        return $connection;

    }

    public function getMultiDatabaseData($ChartTable, $UnitIds){

        $connection = \DB::table($ChartTable)
            ->select(\DB::raw('SUBSTRING(date_time,0,11) AS days'),
                \DB::raw('SUM(CAST(value AS INT)) AS values'),
                'unit_id')
            ->where('unit_id', '=', $UnitIds)
            ->groupBy('days', 'unit_id')
            ->orderBy('days', 'asc')
            ->get();

        return $connection;
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