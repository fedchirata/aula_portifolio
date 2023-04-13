$("p").hover(function(){
  $(this).toggleClass("aumenta");
});

$("p:first-child").css("color","green");
$("p:nth-child(2)").css("color","red")