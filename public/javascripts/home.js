$(function () {
    // test 板块
    // $("#testAjax").click(function () {
    //     //Ajax调用处理
    //     $.ajax({
    //         type: "POST",
    //         url: "/home",
    //         data: {
    //             val: 1
    //         },
    //         success: function (data) {
    //             console.log(data);
    //             // var x="";
    //             // data.forEach(dat => {
    //             //     var st="<h1>"+dat.hha+"</h1><h2>"+dat.title+"</h2>";
    //             //     x+=st;
    //             // });
    //             // $('#show').html(x);
    //             // bindHTML(data);
    //             // alert('success');
    //         }
    //     });
    // });
    $("#search-button").on("click",function () {
        var searchword=$("#searchbar").val();

       $.ajax({
           type:"POST",
           url:"/home/search",
           data:{
            searchword:searchword
           },
           success:function(data){

            //     $("#question").append(data[0].detail);
            //    console.log('---------------------'+data);
               bindHTML(data);
           }
       });
    });

});

function bindHTML(datas) {
    // var str =  $('#newshow').text();
    var st=  '<% datas.forEach(function(data){  %><div class="question"><a href=<%= data.link %>><%= data.title %></a><div class="excerpt"><%= data.excerpt %></div></div><% }) %>';
    var result = ejs.render(st, {
        datas: datas
    });
    // console.log(result+'------------------------');
    $('#content').html(result);
    
}
