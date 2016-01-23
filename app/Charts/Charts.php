<?php

namespace App\Charts;
use Khill\Lavacharts\Lavacharts;


class Charts
{



    public function createLineChart(){

        $dataTable = $this->createDataTable();

        $linechart = \Lava::LineChart('LineChart')
            ->dataTable($dataTable)
            ->title('LineChart');
    }

    public function createColumnChart(){

        $dataTable = $this->createDataTable();

        $columnchart = \Lava::ColumnChart('ColumnChart')
            ->dataTable($dataTable)
            ->title('Column');
    }

    public function createDataTable(){

        $dataTable = \Lava::DataTable();
        return $dataTable;

    }



}