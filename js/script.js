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
        $(".p1").fadeOut();
        $(".p1").hide();
    });
});

function clicked(){
    var name=document.getElementById("name").value;
    alert("Thank you "+ name +"; We have received your message");
    event.preventDefault();
}