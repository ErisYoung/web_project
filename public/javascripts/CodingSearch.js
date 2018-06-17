$(function() {
    $("button.login").mouseover(function() {
        $("button.login").css("background", "#00893C");
    });
    $("button.login").mouseout(function() {
        $("button.login").css("background", "#27AE60");
    });
    $("button.sign").mouseover(function() {
        $("button.sign").css("background", "#00893C");
    });
    $("button.sign").mouseout(function() {
        $("button.sign").css("background", "#27AE60");
    });
});
$(function() {
    $("a.nav").mouseover(function() {
        $(this).css("color", "white");
    });
    $("a.nav").mouseout(function() {
        $(this).css("color", "#dddddd");
    });
});
$(function() {
    $('.login').click(function() {
        $('.login-form-mask').fadeIn(100);
        $('.login-form').slideDown(200);
    })
    $('.login-close').click(function() {
        $('.login-form-mask').fadeOut(100);
        $('.login-form').slideUp(200);

    })
});
$(function() {
    $(".head-searchinput").click(function() {
        $(".head-searchinput").css("background", "white");
        $(".head-searchbtn").css("background", "white");
    });
});
$(document).click(function() {
    $(".head-searchinput").css("background", "#555555");
    $(".head-searchinput").click(function(event) {
        event.stopPropagation();
    });
    $(".head-searchbtn").css("background", "#555555");
    $(".head-searchbtn").click(function(event) {
        event.stopPropagation();
    });
});
