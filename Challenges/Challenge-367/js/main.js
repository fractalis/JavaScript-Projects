$(document).ready(function() {
    $('#btnContactForm').click(function(event) {
        $('.form-popup').css({'display': 'block'});
    });

    $('#btnClose').click(function(event) {
        $('.form-popup').css({'display': 'none'});
    });
});