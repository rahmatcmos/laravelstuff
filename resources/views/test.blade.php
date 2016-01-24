<!DOCTYPE html>
<html lang="en">
<script src="//code.jquery.com/jquery-2.1.3.min.js"></script>
<script src="/js/chartmaker.js"></script>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width">
    <meta name="csrf_token" content="{{ csrf_token() }}" />
    <title></title>
    <!--insert bootstrap-->
</head>


<body>

<select class="form-control input-xs no-radius" name="countries" id="unitids">
    @foreach ($unitids as $id)
            <option id={{$id->unit_id}}>{!!$id->unit_id!!}</option>
    @endforeach
</select>


{!! Form::button('Select unit id', array('id' => "unitIdButton")) !!}
<select class="form-control input-xs no-radius" name= ="informations" id="selecteddata">
    <option id = "events">Ignition</option>
    <option id = "connections">Connection</option>
    <option id = "speed">Speed</option>
</select>
{!! Form::text('selectedId', "none" , array('readonly', 'id' => 'selectedId')) !!}
{!! Form::button('Make a chart', array('id' => "abutton")) !!}

<!--do something-->
</body>
<div id="LineChart" style="visibility: hidden"></div>
<div id="ColumnChart" style="visibility: hidden"></div>
@linechart('LineChart', 'LineChart')
@columnchart('ColumnChart', 'ColumnChart')
</html>


