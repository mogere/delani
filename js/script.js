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

    $(".row-portfolio").hover(function(){
        $(".p1").show();
    });
});

function clicked(){
    var name=document.getElementById("name").value;
    alert("Thank you "+ name +"; We have received your message");
    event.preventDefault();
}