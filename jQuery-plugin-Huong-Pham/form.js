$(document).ready(function () {
    //form validation plugign 
    $('#myform').validate({
        rules: {
            firstname: {
                required: true,
                minlength: 2,
                maxlength: 40
            },
            lastname: {
                required: true,
                minlength: 2,
                maxlength: 40
            },
            address: {
                required: true,
                minlength: 5,
                maxlength: 50
            },
            postalcode: {
                required: true,
                digits: true
            },
            email: {
                required: true,
                email: true
            },
            company: "required",
            country: "required"
        }
    });
    //select plugin 
    $(document).ready(function () {
        $('.js-example-basic-single').select2();
    });
}) 