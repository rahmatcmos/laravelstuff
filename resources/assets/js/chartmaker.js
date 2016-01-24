var unitIdholder = new Array();
var dataSelected;
$(function() {

    $('#abutton').click(function() {
        //alert(unitIdholder);
        $.ajax({
            url: '/getJson',
            data: {unitid:unitIdholder, dataSelected:dataSelected},
            beforeSend: function (xhr) {
                var token = $('meta[name="csrf_token"]').attr('content');

                if (token) {
                    return xhr.setRequestHeader('X-CSRF-TOKEN', token);
                }
            },
        })
        .done(function (result) {
            lava.loadData('LineChart', result, function (chart) {
                $('#LineChart').css('visibility', 'visible');
                console.log(result);
                console.log("LineChart generated");
            });

            lava.loadData('ColumnChart', result, function(chart) {
                $('#ColumnChart').css('visibility', 'visible');
                console.log("ColumnChart generated")
            });

        })
        .fail(function (result) {
            alert(result);
        })
    })
});

$(function() {
    $('#unitIdButton').click(function () {
        var value = $('#unitids option:selected').val();
        unitIdholder.push(value);
        $('#selectedId').val(unitIdholder);

        dataSelected = $('#selecteddata option:selected').val();
    })

});
