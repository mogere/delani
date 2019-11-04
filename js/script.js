$(document).ready(function(){
    // $(".hidden").hide();
    $("#design").click(function(){
        $("#design").hide();
        $("#design-desc").toggle();
    });
    $("#dev").click(function(){
        $("#dev").hide();
        $("#dev-desc").toggle();
    });
    $("#pj").click(function(){
        $("#pj").hide();
        $("#pj-desc").toggle();
    });
});