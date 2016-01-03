{{-- Connections modal --}}
<div class="modal fade" id="connectionsModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"
     aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true"></button>
                <h4 class="modal-title" id="myModalLabel">CSV data example snippet</h4>
            </div>
            <div class="modal-body">
                <center>
                    <img src="{{ asset('img/webshop/connections.png') }}" width="140" height="140" border="0"
                         class="img-circle"></a>
                    <h3 class="media-heading">Connections</h3>
                    <span><strong>Data: </strong></span>
                    <span class="label label-info">DateTime</span>
                    <span class="label label-info">UnitId</span>
                    <span class="label label-info">Port</span>
                    <span class="label label-info">Value</span>
                </center>
                <hr>
                <center>
                    <p class="text-left"><strong>Raw data example: </strong><br>
                        2015-03-10 00:47:24;357566040024266;Connection;1<br>
                        2015-03-10 00:55:47;357566000058056;Connection;0<br>
                        2015-03-10 01:53:03;357566000058106;Connection;0<br>
                        2015-03-10 02:51:21;357566000058064;Connection;0<br>
                        2015-03-10 04:45:39;357566040005661;Connection;1<br>
                        2015-03-10 04:46:20;357566040005687;Connection;1<br>
                        2015-03-10 06:10:39;357566040005620;Connection;1<br>
                        2015-03-10 06:42:48;357566040005661;Connection;0<br>
                        2015-03-10 06:43:19;357566040005661;Connection;1<br>
                        2015-03-10 06:47:02;357566040005661;Connection;0</p>
                    <br>
                </center>
            </div>
            <div class="modal-footer">
                <center>
                    <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                </center>
            </div>
        </div>
    </div>
</div>

{{-- Events modal --}}
<div class="modal fade" id="eventsModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"
     aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true"></button>
                <h4 class="modal-title" id="myModalLabel">CSV data example snippet</h4>
            </div>
            <div class="modal-body">
                <center>
                    <img src="{{ asset('img/webshop/events.png') }}" width="140" height="140" border="0"
                         class="img-circle"></a>
                    <h3 class="media-heading">Events</h3>
                    <span><strong>Data: </strong></span>
                    <span class="label label-info">DateTime</span>
                    <span class="label label-info">UnitId</span>
                    <span class="label label-info">Port</span>
                    <span class="label label-info">Value</span>
                </center>
                <hr>
                <center>
                    <p class="text-left"><strong>Raw data example: </strong><br>
                        2015-03-10 07:12:25;14100071;Ignition;1<br>
                        2015-03-10 07:19:55;14100064;Ignition;1<br>
                        2015-03-10 07:21:58;14100042;Ignition;1<br>
                        2015-03-10 07:27:58;14120026;Ignition;1<br>
                        2015-03-10 07:28:19;14100042;Ignition;0<br>
                        2015-03-10 07:31:52;14100042;Ignition;1<br>
                        2015-03-10 07:37:57;14100042;Ignition;0<br>
                        2015-03-10 07:40:23;14100042;Ignition;1<br>
                        2015-03-10 07:58:19;14100042;Ignition;1<br>
                        2015-03-10 07:59:40;14100042;Ignition;1</p>
                    <br>
                </center>
            </div>
            <div class="modal-footer">
                <center>
                    <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                </center>
            </div>
        </div>
    </div>
</div>

{{-- Monitoring modal --}}
<div class="modal fade" id="monitoringModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"
     aria-hidden="true">
    <div class="modal-dialog modal-lg">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true"></button>
                <h4 class="modal-title" id="myModalLabel">CSV data example snippet</h4>
            </div>
            <div class="modal-body">
                <center>
                    <img src="{{ asset('img/webshop/monitoring.png') }}" width="140" height="140" border="0"
                         class="img-circle"></a>
                    <h3 class="media-heading">Monitoring</h3>
                    <span><strong>Data: </strong></span>
                    <span class="label label-info">UnitId</span>
                    <span class="label label-info">BeginTime</span>
                    <span class="label label-info">EndTime</span>
                    <span class="label label-info">Type</span>
                    <span class="label label-info">Min</span>
                    <span class="label label-info">Max</span>
                    <span class="label label-info">Sum</span>
                </center>
                <hr>
                <center>
                    <p class="text-left"><strong>Raw data example: </strong><br>
                        14100071;2015-03-10 07:12:20;2015-03-10 07:13:20;Gps/GpsAccuracyGyroBias;0;0;0<br>
                        14100071;2015-03-10 07:12:21;2015-03-10 07:13:20;Hsdpa/SQual;0;17;833<br>
                        14100071;2015-03-10 07:12:20;2015-03-10
                        07:13:20;SystemInfo/ManagedMemoryUsage;0;7458144;3.653942E+08<br>
                        14100071;2015-03-10 07:12:20;2015-03-10
                        07:13:20;SystemInfo/AvailableDiskSpace;0;4900000;2.587E+08<br>
                        14100071;2015-03-10 07:12:20;2015-03-10 07:13:20;Gps/GpsGyroMean;0;35295.3;1934020<br>
                        14100071;2015-03-10 07:12:20;2015-03-10 07:13:20;Gps/GpsTemperature;0;13;722<br>
                        14100071;2015-03-10 07:12:21;2015-03-10 07:13:20;Hsdpa/NumberOfConnects;0;1;57<br>
                        14100071;2015-03-10 07:12:20;2015-03-10 07:13:20;Hsdpa/RSSI;29;74;3549<br>
                        14100071;2015-03-10 07:12:20;2015-03-10 07:13:20;Gps/NumberOfSatellitesTracked;4;9;491<br>
                        14100071;2015-03-10 07:12:20;2015-03-10 07:13:20;Gps/Speed;0;53.29871;2626.716</p>
                    <br>
                </center>
            </div>
            <div class="modal-footer">
                <center>
                    <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                </center>
            </div>
        </div>
    </div>
</div>

{{-- Positions modal --}}
<div class="modal fade" id="positionsModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"
     aria-hidden="true">
    <div class="modal-dialog modal-lg">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true"></button>
                <h4 class="modal-title" id="myModalLabel">CSV data example snippet</h4>
            </div>
            <div class="modal-body">
                <center>
                    <img src="{{ asset('img/webshop/positions.png') }}" width="140" height="140" border="0"
                         class="img-circle"></a>
                    <h3 class="media-heading">Positions</h3>
                    <span><strong>Data: </strong></span>
                    <span class="label label-info">DateTime</span>
                    <span class="label label-info">UnitId</span>
                    <span class="label label-info">Rdx</span>
                    <span class="label label-info">Rdy</span>
                    <span class="label label-info">Speed</span>
                    <span class="label label-info">Course</span>
                    <span class="label label-info">NumSatellites</span>
                    <span class="label label-info">HDOP</span>
                    <span class="label label-info">Quality</span>
                </center>
                <hr>
                <center>
                    <div class="container">
                        <p class="text-left"><strong>Raw data example: </strong><br>
                            2015-03-10 00:00:02;357566000058106;158126.102542985;380446.027478599;0;31;7;1;Gps<br>
                            2015-03-10 00:00:02;357566000058064;164299.882381978;383920.580845648;9;356;6;6;Gps<br>
                            2015-03-10 00:00:45;357566000058064;164296.821514547;383890.073807984;1;221;5;6;Gps<br>
                            2015-03-10 00:00:45;357566000058106;158129.606152475;380442.858994944;0;0;7;1;Gps<br>
                            2015-03-10 00:01:28;357566000058064;164295.501812043;383902.030906155;2;352;5;2;Gps<br>
                            2015-03-10 00:01:28;357566000058106;158116.487718299;380431.577461665;1;281;7;1;Gps<br>
                            2015-03-10 00:02:11;357566000058064;164288.968719716;383894.639240674;1;340;6;2;Gps<br>
                            2015-03-10 00:02:11;357566000058106;158116.623827349;380436.491128548;1;300;7;1;Gps<br>
                            2015-03-10 00:02:54;357566000058064;164287.106163279;383899.34546446;2;345;5;2;Gps<br>
                            2015-03-10 00:02:54;357566000058106;158119.383854447;380435.769699998;0;213;7;1;Gps</p>
                        <br>
                    </div>
                </center>
            </div>
            <div class="modal-footer">
                <center>
                    <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                </center>
            </div>
        </div>
    </div>
</div>