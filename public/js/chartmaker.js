var unitIdholder = new Array();
$(function() {

        $('#abutton').click(function() {

                alert(unitIdholder);
                $.ajax({
                    url: '/getJson',
                    data: {unitid:unitIdholder},
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
    })
});
