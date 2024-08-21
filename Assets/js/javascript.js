$(document).ready(function(){
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if(scroll > 100){
            $(".kworld-navbar").css("background", "#0C0C0C")
        }
        else{
            $(".kworld-navbar").css("background", "transparent")
        }
    })
})

$(document).ready(function(){
    $("#email").keyup(function(){
        var regx_email = /^([a-zA-z]+)([0-9]+)?(@)([a-zA-Z]{5,10}(.)([a-zA-Z]+))$/i;

        var email_inp = $(this).val();
        if(regx_email.test(email_inp)){
            $("#email_status").text("valid");
            $("#email_status").removeClass("text-danger");
        }
        else {
            $("#email_status").addClass("text-danger");
            $("#email_status").text("Invalid");
        }
    });

    $("#pass").keyup(function(){
        var regx_pass = /^([a-zA-z]+)([0-9]+)([$&+,:;=?@#|'<>.^*()%!-]+)$/i;

        var pass_inp = $(this).val();
        if(regx_pass.test(pass_inp)){
            $("#pass_status").text("valid");
            $("#pass_status").removeClass("text-danger");
        }
        else {
            $("#pass_status").addClass("text-danger");
            $("#pass_status").text("Invalid");
        }
    });
})