$(document).ready(function(){
    $(".hidden").hide();

    $("#design, #design-desc").click(function(){
        $("#design-desc").toggle();
        $("#design").toggle();
    });
    $("#dev").click(function(){
        $("#dev").toggle();
        $("#dev-desc").toggle();
    });
    $("#pj").click(function(){
        $("#pj").toggle();
        $("#pj-desc").toggle();
    });

    $(".row-portfolio").hover(function(){

    })
});

function clicked(){
    var name=document.getElementById("name").value;
    alert("Thank you "+ name +"; We have received your message");
}