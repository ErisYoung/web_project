$(function () {
    $("#submit").click(function () {
        var searchword = $("#searchword").val();
        console.log(searchword + "------------");
        $.ajax({
            type: "POST",
            url: "/posts/search",
            data: {
                searchword: searchword
            },
            success: function (data) {
                console.log("ajax success");
                // console.log(JSON.stringify(posts.posts)+'----------------');
                // console.log("             ----"+ JSON.stringify(posts.user)+'----               bind');
                bindHTML(data.posts, data.user);
            }
        });
    });
});

function bindHTML(posts, user) {
    var st = $("#module").html();
    var old = $("#posts").html("");
    // console.log("             ----" + user.id + '----               bind');
    var str = '<button id="test">test</button>' + '<% posts.forEach(function (post) { %><div class="post-content"><div class="ui grid"><div class="four wide column"><a class="avatar"href="/posts?author=<%= post.author._id %>"data-title="<%= post.author.name %> | <%= ({m:"男", f: "女", x: "保密"})[post.author.gender] %>"data-content="<%= post.author.bio %>"><img class="avatar" src="/img/<%= post.author.avatar %>"></a></div><div class="eight wide column"><div class="ui segment"><h3><a href="/posts/<%= post._id %>"><%= post.title %></a></h3><pre><%- post.content %></pre><div><span class="tag"><%= post.created_at %></span><span class="tag right"><span>浏览(<%= post.pv %>)</span><span>留言(<%= post.commentsCount %>)</span><% if (user && post.author._id && user._id.toString() === post.author._id.toString()) { %><div class="ui inline dropdown"><div class="text"></div><i class="dropdown icon"></i><div class="menu"><div class="item"><a href="/posts/<%= post._id %>/edit">编辑</a></div><div class="item"><a href="/posts/<%= post._id %>/remove">删除</a></div></div><% } %>  </span></div></div></div></div></div><% }) %>';
    $("#test").click(function () {
        alert("ok");
    });
    var result = ejs.render(str, {
        posts: posts,
        user: user
    });
    $("#show").html(result);
    $('.ui.dropdown').dropdown();
    // 鼠标悬浮在头像上，弹出气泡提示框
    $('.post-content .avatar').popup({
        inline: true,
        position: 'bottom right',
        lastResort: 'bottom right',
    });
}