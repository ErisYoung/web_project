$(function () {
    $("#search-button").on("click", function () {
        var searchword = $("#searchbar").val();

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

});

function bindHTML(datas) {
    // var str =  $('#newshow').text();
    var st = '<% datas.forEach(function(data){  %><div class="question"><a href=<%= data.link %>><%= data.title %></a><div class="excerpt"><%= data.excerpt %></div></div><% }) %>';
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