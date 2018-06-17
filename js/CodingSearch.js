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
jQuery(function($) {
    $(document).ready(function() {
        $('.head').stickUp();
    });
});


// $(window).scroll(function(event){  
//         var sm=$(this).scrollTop()+$(window).height();  
//         //$(this).scrollTop():滚动条的滚动高度，不可见的部分  
//         //$(window).height():窗口，可见部分的高度  
//         // console.log($(this).scrollTop());
//         // console.log($(window).height());
//         var dsm=$(document).height();  
//         //$(document).height();整个文档的高度，（可见+不可见）  
//         // console.log(sm+"-----"+dsm);  
//         // console.log(dsm);
//         if((sm + 1) >= dsm){  
//             console.log("到底了---");  
//             var $main = $(".question-box");
//             var $newcnt = $('<div></div>');
//             $newcnt.addClass(".question");
//             $newcnt.appendTo($main);
//         }  
//     });
$(document).ready(function() {
    $(window).scroll(function() {
        if ($(document).scrollTop() >= $(document).height() - $(window).height()) {
            console.log("123");
            // alert("滚动条已经到达底部为" + $(document).scrollTop());
            var $main = $(".question-box");
            var $newcnt = $('<div></div>');
            $newcnt.addClass("question");
            $newcnt.appendTo($main);
        }
    });
});