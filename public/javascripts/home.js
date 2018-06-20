$(function () {
    $("#search-button").on("click", function () {
        var searchword = $("#searchbar").val();

        $('.search').animate({
            top: '20%'
        }, "slow");

        $.ajax({
            type: "POST",
            url: "/home/search",
            data: {
                searchword: searchword
            },
            success: function (data) {
                //     $("#question").append(data[0].detail);
                //    console.log('---------------------'+data);
                bindHTML(data);
            }
        });
    });
    // $("#submit").on("click", function () {
    //     var username = $("#name").val();
    //     var password = $("#password").val();
    //     console.log("enter")
    //     $.ajax({
    //         type: "POST",
    //         url: "/signin",
    //         data: {
    //             username: username,
    //             password: password
    //         },
    //         success: function (data) {
    //             console.log(data + 'daaaaaaaaaaaaaaaaaaa');
    //             if (data == '1')
    //             {
    //                 $("#signin").click();
    //             }
                    
                
    //         }
    //     });
    // });

});

function bindHTML(datas) {
    // var str =  $('#newshow').text();
    var st = '<% datas.forEach(function(data){  %><div class="cnt-title"><a href=<%= data.link %>><%= data.title %></a></div><div class="cnt-summary"><%= data.excerpt %></div><% }) %>';
    var result = ejs.render(st, {
        datas: datas
    });
    // console.log(result+'------------------------');
    $('#content').html(result);

}
//effect functions
$('.ui.dropdown').dropdown();
// 鼠标悬浮在头像上，弹出气泡提示框
$('.post-content .avatar').popup({
    inline: true,
    position: 'bottom right',
    lastResort: 'bottom right',
});