$(function () {
    //按钮单击时执行
    $("#testAjax").click(function () {
        //Ajax调用处理
        $.ajax({
            type: "POST",
            url: "/home",
            data: {
                val: 1
            },
            success: function (data) {
                console.log(data);
                // var x="";
                // data.forEach(dat => {
                //     var st="<h1>"+dat.hha+"</h1><h2>"+dat.title+"</h2>";
                //     x+=st;
                // });
                // $('#show').html(x);
                bindHTML(data);
                
                // alert('success');
            }
        });

    });
});

function bindHTML(data) {
    var str =  $('#newshow').text();
    var st=  " <% if(data) { %>"+
        "<% data.forEach(function(dat){  %><h1><%= dat.hha %></h1><% console.log(dat.hha+'-------------------') %><% }) %><% } %> "
    var result = ejs.render(st, {
        data: data
    });
    console.log(result);
    $('#show').html(result);
}
