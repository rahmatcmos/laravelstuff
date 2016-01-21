<?php

namespace App\QueryHandler;

class QueryHandler
{

    public function getUnitIds(){
        $UnitIds = \DB::table("events")
            ->select('unit_id')
            ->groupBy('unit_id')
            ->orderBy('unit_id', 'asc')
            ->get();

        return $UnitIds;
    }
}