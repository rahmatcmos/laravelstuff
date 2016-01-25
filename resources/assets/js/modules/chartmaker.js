exports.init = function() {
    /*
     * THESE FUNCTIONS ARE USED TO AJAX CALL THE DATA FOR EACH CHART
     */
    /*
     *VARIABLES USED FOR HOLDING DATA TO GENERATE CHARTS!
     */

    var unitIdholderIgnition = new Array();
    var unitIdholderConnection = new Array();
    var unitIdholderSpeed = new Array();

    var holdIgnitionChartSortable = 'none';
    var holdConnectionChartSortable = 'none';
    var holdSpeedChartSortable = 'none';

    var ignitionLineResult;
    var ignitionColumnResult;
    var connectionLineResult;
    var connectionColumnResult;
    var speedLineResult;
    var speedColumnResult;

    $(function() {

        $("#ignitionSortable li").not('.emptyMessage').click(function() {
            var dataSelected = this.id
                unitIdholderIgnition.push(dataSelected);
            var table = 'Ignition'
                $.ajax({
                    url: '/getJson',
                    data: {unitid:unitIdholderIgnition, dataSelected:table},
                    beforeSend: function (xhr) {
                        var token = $('meta[name="csrf_token"]').attr('content');

                        if (token) {
                            return xhr.setRequestHeader('X-CSRF-TOKEN', token);
                        }
                    },
                })
            .done(function (result) {

                if(holdIgnitionChartSortable == 'none'){
                    alert("please select a chart type!")
                        unitIdholderIgnition = [];
                }
                else{
                    lava.loadData('ignitionLineChart', result, function (chart) {
                        ignitionLineResult = result;
                    });
                    lava.loadData('ignitionColumnChart', result, function (chart) {
                        ignitionColumnResult = result;
                    });
                }

            })
            .fail(function (result) {
                console.log(unitIdholderIgnition);
                console.log(dataSelected);
                /*alert(result);
                  console.log(result);*/
            })
        })
    });

    /*
     *CLEARING BUTTONS AND THEIR FUNCTIONS!!
     */
    $(function() {
        $('#ignitionButton').click(function () {
            unitIdholderIgnition = [];
            $('#ignitionLineChart').css('visibility', 'hidden');
            $('#ignitionLineChart').css('display' ,'none');
            $('#ignitionColumnChart').css('display', 'none');
            $('#ignitionColumnChart').css('visibility', 'hidden');

        })
    });


    /*
     *SELECTING CHARTS AND THEIR FUNCTIONS!
     */

    $(function() {
        $("#ignitionChartSortable li").not('.emptyMessage').click(function() {
            holdIgnitionChartSortable = this.id

                if(holdIgnitionChartSortable == 'linechartIgnition')
                {
                    $('#ignitionLineChart').css('visibility', 'visible');
                    $('#ignitionColumnChart').css('visibility', 'hidden');
                    $('#ignitionLineChart').css('display', 'inherit');
                    $('#ignitionColumnChart').css('display', 'none');
                    lava.loadData('ignitionLineChart', ignitionLineResult, function (chart) {
                    });
                }

            if(holdIgnitionChartSortable == 'columnchartIgnition')
            {
                $('#ignitionLineChart').css('visibility', 'hidden');
                $('#ignitionColumnChart').css('visibility', 'visible');
                $('#ignitionLineChart').css('display', 'none');
                $('#ignitionColumnChart').css('display', 'inherit');
                lava.loadData('ignitionColumnChart', ignitionColumnResult, function (chart) {
                });
            }
        })
    });


    $(function() {

        $("#connectionSortable li").not('.emptyMessage').click(function() {
            var dataSelected = this.id
                unitIdholderConnection.push(dataSelected);
            var table = 'Connection'
                $.ajax({
                    url: '/getJson',
                    data: {unitid:unitIdholderConnection, dataSelected:table},
                    beforeSend: function (xhr) {
                        var token = $('meta[name="csrf_token"]').attr('content');

                        if (token) {
                            return xhr.setRequestHeader('X-CSRF-TOKEN', token);
                        }
                    },
                })
            .done(function (result) {

                if(holdConnectionChartSortable == 'none'){
                    alert("please select a chart type!")
                        unitIdholderConnection = [];
                }
                else{
                    lava.loadData('connectionLineChart', result, function (chart) {
                        connectionLineResult = result;
                    });

                    lava.loadData('connectionColumnChart', result, function (chart) {
                        connectionColumnResult = result;
                    });
                }

            })
            .fail(function (result) {
                console.log(unitIdholderConnection);
                console.log(dataSelected);
                /*alert(result);
                  console.log(result);*/
            })
        })
    });

    $(function() {

        $("#speedSortable li").not('.emptyMessage').click(function() {
            var dataSelected = this.id
                unitIdholderSpeed.push(dataSelected);
            var table = 'Speed'
                $.ajax({
                    url: '/getJson',
                    data: {unitid:unitIdholderSpeed, dataSelected:table},
                    beforeSend: function (xhr) {
                        var token = $('meta[name="csrf_token"]').attr('content');

                        if (token) {
                            return xhr.setRequestHeader('X-CSRF-TOKEN', token);
                        }
                    },
                })
            .done(function (result) {

                if(holdSpeedChartSortable == 'none'){
                    alert("please select a chart type!")
                        unitIdholderSpeed = [];
                }
                else{
                    lava.loadData('speedLineChart', result, function (chart) {
                        speedLineResult = result;
                    });
                    lava.loadData('speedColumnChart', result, function (chart) {
                        speedColumnResult = result;
                    });
                }

            })
            .fail(function (result) {
                console.log(unitIdholderSpeed);
                console.log(dataSelected);
                /*alert(result);
                  console.log(result);*/
            })
        })
    });


    $(function() {
        $("#connectionChartSortable li").not('.emptyMessage').click(function() {
            holdConnectionChartSortable = this.id

                if(holdConnectionChartSortable == 'linechartConnection')
                {
                    $('#connectionLineChart').css('visibility', 'visible');
                    $('#connectionColumnChart').css('visibility', 'hidden');
                    $('#connectionLineChart').css('display', 'inherit');
                    $('#connectionColumnChart').css('display', 'none');
                    lava.loadData('connectionLineChart', connectionLineResult, function (chart) {
                    });
                }

            if(holdConnectionChartSortable == 'columnchartConnection')
            {
                $('#connectionLineChart').css('visibility', 'hidden');
                $('#connectionColumnChart').css('visibility', 'visible');
                $('#connectionLineChart').css('display', 'none');
                $('#connectionColumnChart').css('display', 'inherit');
                lava.loadData('connectionColumnChart', connectionColumnResult, function (chart) {
                });
            }
        })
    });

    $(function() {
        $("#speedChartSortable li").not('.emptyMessage').click(function() {
            holdSpeedChartSortable = this.id

                if(holdSpeedChartSortable == 'linechartSpeed')
                {
                    $('#speedLineChart').css('visibility', 'visible');
                    $('#speedColumnChart').css('visibility', 'hidden');
                    $('#speedLineChart').css('display', 'inherit');
                    $('#speedColumnChart').css('display', 'none');
                    lava.loadData('speedLineChart', speedLineResult, function (chart) {
                    });
                }

            if(holdSpeedChartSortable == 'columnchartSpeed')
            {
                $('#speedLineChart').css('visibility', 'hidden');
                $('#speedColumnChart').css('visibility', 'visible');
                $('#speedLineChart').css('display', 'none');
                $('#speedColumnChart').css('display', 'inherit');
                lava.loadData('speedColumnChart', connectionColumnResult, function (chart) {
                });

            }
        })
    });

    $(function() {
        $('#connectionButton').click(function () {
            unitIdholderConnection = [];
            $('#connectionLineChart').css('visibility', 'hidden');
            $('#connectionLineChart').css('display' ,'none');
            $('#connectionColumnChart').css('display', 'none');
            $('#connectionColumnChart').css('visibility', 'hidden');

        })
    });

    $(function() {
        $('#speedButton').click(function () {
            unitIdholderSpeed = [];
            $('#speedLineChart').css('visibility', 'hidden');
            $('#speedLineChart').css('display' ,'none');
            $('#speedColumnChart').css('display', 'none');
            $('#speedColumnChart').css('visibility', 'hidden');

        })
    });
};
