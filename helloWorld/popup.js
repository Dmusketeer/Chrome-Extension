$(function(){
    $("#name").keyup(function(){
        $("h2").innerHTML("hello"+$("#name").val());
    });
});