//----------------menu-----------------------------
$(document).ready(function (){
    $("#btn1").hide()
    $("#btn").click(function(){
        $("#menu").toggle(".dis-none", function (){
            $("#btn").hide()
            $("#btn1").show()
        } )
})
   $("#btn1").click(function (){
       $("#menu").toggle(".dis-none", function (){
           $("#btn").show()
           $("#btn1").hide()
       } )
   })
    $("#slid-2").hide();
    $("#slid-3").hide();
    $("#click1").click(function(){
        $("#slid-1").show();

    });
    $("#click2").click(function(){
        $("#slid-2").show();
        $("#slid-1").hide();
        $("#slid-3").hide();

    });
    $("#click3").click(function(){
        $("#slid-3").show();
        $("#slid-1").hide();
        $("#slid-2").hide();

    });




    $(".icon-hidden").hide();
    $(".up-icon1").click(function (){
        $(this).hide();
        $(".icon-hidden1").show();
        $(".p-slid1").toggle();

    })
    $(".icon-hidden1").click(function (){
        $(this).hide();
        $(".up-icon1").show();
        $(".p-slid1").toggle();

    })
    $(".up-icon2").click(function (){
        $(this).hide();
        $(".icon-hidden2").show();
        $(".p-slid2").toggle();

    })
    $(".icon-hidden2").click(function (){
        $(this).hide();
        $(".up-icon2").show();
        $(".p-slid2").toggle();

    })
    $(".up-icon3").click(function (){
        $(this).hide();
        $(".icon-hidden3").show();
        $(".p-slid3").toggle();

    })
    $(".icon-hidden3").click(function (){
        $(this).hide();
        $(".up-icon3").show();
        $(".p-slid3").toggle();

    })
    $(".up-icon4").click(function (){
        $(this).hide();
        $(".icon-hidden4").show();
        $(".p-slid4").toggle();

    })
    $(".icon-hidden4").click(function (){
        $(this).hide();
        $(".up-icon4").show();
        $(".p-slid4").toggle();

    })
})