    $(function (){
        $("button.login").mouseover(function() {
            $("button.login").css("background","#00893C");
        });
        $("button.login").mouseout(function() {
            $("button.login").css("background","#27AE60");
        });

        $("button.sign").mouseover(function() {
            $("button.sign").css("background","#00893C");
        });
        $("button.sign").mouseout(function() {
            $("button.sign").css("background","#27AE60");
        });
    });
    $(function(){
        $("a").mouseover(function() {
            $(this).css("color","white");
        });
        $("a").mouseout(function() {
            $(this).css("color","#dddddd");
        });
    });