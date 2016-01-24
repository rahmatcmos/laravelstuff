<?php

namespace App\Charts;
use Khill\Lavacharts\Lavacharts;


/*
 * This class will used to generate the charts before filling it with the data.
 * The Data will be filled with the JsonController and returned as a JSONobject
 * to the Ajaxcall turning it into a nice chart.
 */
class Charts
{
    public function createLineChart($chartName){

        $dataTable = $this->createDataTable();

        $linechart = \Lava::LineChart($chartName)
            ->dataTable($dataTable)
            ->title('');
    }

    public function createColumnChart($chartName){

        $dataTable = $this->createDataTable();

        $columnchart = \Lava::ColumnChart($chartName)
            ->dataTable($dataTable)
            ->title('');
    }

    public function createDataTable(){

        $dataTable = \Lava::DataTable();
        return $dataTable;

    }



}
