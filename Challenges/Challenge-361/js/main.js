$(document).ready(function() {

    $('.phone-input').mask('(000) 000-0000');

    $('#frmContact').validate({
        rules: {
            firstName: "required",
            lastName: "required",
            email: {
                required: true,
                email: true
            },
            phoneNumber: "required"
        }
    });

    $('#btnSubmit').click(function() {
        if(!$('#frmContact').valid()) {
            alert('Please fill out the missing fields');
        }
    })
});

