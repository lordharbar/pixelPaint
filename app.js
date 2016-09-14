$(document).ready(function() {
    var color = 'white';
    var colors = 'white green red blue yellow flesh'

    $('.box').on('mousedown', function() {
        if (!event.shiftKey){
          $(this).addClass(color);
          painting = true;
        }else if (event.shift.Key) {
          $(this).removeClass(colors);
          erasing = true;
        }

    })

    $(document).on('mouseup', function() {
        painting = false;
        erasing = false;
    })

    $('.box').on('mouseenter', function(event) {
        if (painting) {
            $(this).addClass(color);
        }

    })
    $('.box').on('dblclick', function() {
        $(this).removeClass(color);
    })
    $('#reset').on('click', function() {
        $('.box').removeClass(colors);
    })

    $('#red').on('click', function() {
        color = 'red';
    })

    $('#blue').on('click', function() {
        color = 'blue';
    })

    $('#green').on('click', function() {
        color = 'green';
    })

    $('#yellow').on('click', function() {
        color = 'yellow';
    })

    $('#white').on('click', function() {
        color = 'white';
    })

    $('#flesh').on('click', function() {
        color = 'flesh';
    })

});
