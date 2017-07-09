



$(document).ready(function(){

function init(){
$("#homeForm").show();
$("#menu1Form").hide();
$("#menu2Form").hide();
$("#menu3Form").hide();
}
init();
/*
$("#Step2").click(function(e) {
$("#homeForm").hide();
$("#menu1Form").show();
$("#menu2Form").hide();
$("#menu3Form").hide();
e.preventDefault();
});

$("#homeForm").click(function() {
$("#homeForm").show();
$("#menu1Form").hide();
$("#menu2Form").hide();
$("#menu3Form").hide();


});
*/
$("#menu1").click(function() {
$("#homeForm").hide();
$("#menu1Form").show();
$("#menu2Form").hide();
$("#menu3Form").hide();

});

$("#menu2").click(function() {
$("#homeForm").hide();
$("#menu1Form").hide();
$("#menu2Form").show();
$("#menu3Form").hide();

});

$("#menu3").click(function() {
$("#homeForm").hide();
$("#menu1Form").hide();
$("#menu2Form").hide();
$("#menu3Form").show();

});

$("#forward").submit(function() {

alert($("#email1").val());
alert($("#password1").val());

});


//Number spinner
  $( function() {
    var spinner = $( "#spinner3" ).spinner();
	var spinner = $( "#spinner2" ).spinner();
    $( "#getvalue" ).on( "click", function() {
      alert( spinner.spinner( "value" ) );
    });
    $( "#setvalue" ).on( "click", function() {
      spinner.spinner( "value", 5 );
    });
 
    $( "button" ).button();
  });
});



