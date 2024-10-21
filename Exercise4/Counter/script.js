// script.js
$(document).ready(function() {
    let count = 0;

    $('#increment').click(function() {
        count++;
        $('#counter').text(count);
    });

    $('#decrement').click(function() {
        count--;
        $('#counter').text(count);
    });

    $('#reset').click(function() {
        count = 0;
        $('#counter').text(count);
    });
});
