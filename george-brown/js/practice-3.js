$(document).ready(function(){
	$(".active").show();
    $("#flip").click(function(){
    $("#panel").slideToggle("slow");
	$("#panel2").hide();
	$("#panel3").hide();
	$("#panel4").hide();		
		
    });
	
});
$(document).ready(function(){
	$(".noshow").hide();
    $("#flip2").click(function(){
    $("#panel2").fadeToggle("slow");
	$("#panel").hide();
	$("#panel3").hide();
	$("#panel4").hide();	
    });
	
});

$(document).ready(function(){
	$(".noshow").hide();
    $("#flip3").click(function(){
    $("#panel3").fadeToggle("slow");
	
	$("#panel2").hide();
	$("#panel").hide();
	$("#panel4").hide();	
    });
	
});

$(document).ready(function(){
	$(".noshow").hide();
    $("#flip4").click(function(){
    $("#panel4").fadeToggle("slow");
	$("#panel2").hide();
	$("#panel3").hide();
	$("#panel").hide();	
    });
	
});