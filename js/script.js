$(document).ready(function(){
    $(".hidden").hide();
    $("#design, #design-desc").click(function(){
        $("#design-desc").toggle();
        $("#design").toggle();
    });
    $("#dev, #dev-desc").click(function(){
        $("#dev").toggle();
        $("#dev-desc").toggle();
    });
    $("#pj, #pj-desc").click(function(){
        $("#pj").toggle();
        $("#pj-desc").toggle();
    });

    $(".text-desc").hide();

    $("#work1").hover(function(){
        $(".p1").fadeIn();
        $(".p1").show();
    }, function(){
        $(".p1").hide();
    });

    $("#work2").hover(function(){
        $(".p2").fadeIn();
        $(".p2").show();
    }, function(){
        $(".p2").hide();
    });

    $("#work3").hover(function(){
        $(".p3").fadeIn();
        $(".p3").show();
    }, function(){
        $(".p3").hide();
    });

    $("#work4").hover(function(){
        $(".p4").fadeIn();
        $(".p4").show();
    }, function(){
        $(".p4").hide();
    });

    $("#work5").hover(function(){
        $(".p5").fadeIn();
        $(".p5").show();
    }, function(){
        $(".p5").hide();
    });

    $("#work6").hover(function(){
        $(".p6").fadeIn();
        $(".p6").show();
    }, function(){
        $(".p6").hide();
    });

    $("#work7").hover(function(){
        $(".p7").fadeIn();
        $(".p7").show();
    }, function(){
        $(".p7").hide();
    });

    $("#work8").hover(function(){
        $(".p8").fadeIn();
        $(".p8").show();
    }, function(){
        $(".p8").hide();
    });
});

function clicked(){
    var name=document.getElementById("name").value;
    alert("Thank you "+ name +"; We have received your message");
    event.preventDefault();
}