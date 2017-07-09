$(document).ready(function(){
	$(".active").show();
    $("#flip").click(function(){
    $("#panel").slideToggle("slow");
	$("#RC").css( "padding-top", "+=14%" );
	$("#panel2").hide();
	$("#panel3").hide();
	$("#panel4").hide();
	$("#filter2").val();
		
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
	//$("#RC").css( "padding-top", "+=8%" );
	$("#panel2").hide();
	$("#panel").hide();
	$("#panel4").hide();	
    });
	
});

$(document).ready(function(){
	$(".noshow").hide();
    $("#flip4").click(function(){
    $("#panel4").fadeToggle("slow");
	//$("#RC").css( "padding-top", "+=12%" );
	$("#panel2").hide();
	$("#panel3").hide();
	$("#panel").hide();	
    });
	
});

/*Pizza Base Removal and Running Count*/
$(document).ready(function(){
 
    $("#RemoveAdd").click(function(){
		$('#PBX li:last').remove();
		var n = $("#PBX li").length;
		$("#PBXcnt").text("Your order has " + n + " items");	
		$("#PBXqty").val( n );
    });
});
/*Meat Toppings Removal and Running Count*/
$(document).ready(function(){
 
    $("#RemoveAddMTX").click(function(){
		$('#MTX li:last').remove();
		var n = $("#MTX li").length;
		$("#MTXcnt").text("Your order has " + n + " items");	
		$("#MTXqty").val( n );
    });
});
/*Sauces Removal and Running Count*/
$(document).ready(function(){
 
    $("#RemoveAddSX").click(function(){
		$('#SX li:last').remove();
		var n = $("#SX li").length;
		$("#SXcnt").text("Your order has " + n + " items");	
		$("#SXqty").val( n );
    });
});
/*Vegetable Toppings Removal and Running Count*/
$(document).ready(function(){
 
    $("#RemoveAddVTX").click(function(){
		$('#VTX li:last').remove();
		var n = $("#VTX li").length;
		$("#VTXcnt").text("Your order has " + n + " items");	
		$("#VTXqty").val( n );
    });
});
/*Pizza Base*/

$(document).ready(function(){
 
    $("#AddGroup1, .product-quantity input").click(function(){
        updateQuantity(this);
		$("<li id='PBX'>Thin Crust</li>").appendTo("#PBX");
		var n = $("#PBX li").length;
		$("#PBXcnt").text("Your order has " + n + " items");
		$("#PBXcnt").val( n );	
		if("PBXqty" < 1){
        $('#PBXcnt').after('<div class="red">amount is required</div>');
    }
		
    });
});

$(document).ready(function(){
 
    $("#AddGroup1-2").click(function(){
        //$("ol").append("<li id='PBX'>Normal Base</li>");
		$("<li id='PBX'>Normal Base</li>").appendTo("#PBX");
		var n = $("#PBX li").length;
		$("#PBXcnt").text("Your order has " + n + " items");
		$("#PBXqty").val( n );
    });
});

$(document).ready(function(){
 
    $("#AddGroup1-3").click(function(){
        //$("ol").append("<li id='PBX'>Pan Pizza</li>");
		$("<li id='PBX'>Pan Pizza</li>").appendTo("#PBX");
		var n = $("#PBX li").length;
		$("#PBXcnt").text("Your order has " + n + " items");
		$("#PBXqty").val( n );
    });
});
/*Meat Toppings*/
$(document).ready(function(){
 
    $("#AddGroup2").click(function(){
        $("<li id='MTX'>Chicken</li>").appendTo("#MTX");
		var n = $("#MTX li").length;
		$("#MTXcnt").text("Your order has " + n + " items");
		$("#MTXqty").val( n );
    });
});

$(document).ready(function(){
 
    $("#AddGroup2-2").click(function(){
        $("<li id='MTX'>Beef</li>").appendTo("#MTX");
		var n = $("#MTX li").length;
		$("#MTXcnt").text("Your order has " + n + " items");
		$("#MTXqty").val( n );
    });
});

$(document).ready(function(){
 
    $("#AddGroup2-3").click(function(){
        $("<li id='MTX'>Mix of two</li>").appendTo("#MTX");
		var n = $("#MTX li").length;
		$("#MTXcnt").text("Your order has " + n + " items");
		$("#MTXqty").val( n );
    });
});

/*Sauces*/
$(document).ready(function(){
 
    $("#AddGroup3").click(function(){
        $("<li id='SX'>Sweet Basil</li>").appendTo("#SX");
		var n = $("#SX li").length;
		$("#SXcnt").text("Your order has " + n + " items");
		$("#SXqty").val( n );
    });
});

$(document).ready(function(){
 
    $("#AddGroup3-2").click(function(){
        $("<li id='SX'>Garlic</li>").appendTo("#SX");
		var n = $("#SX li").length;
		$("#SXcnt").text("Your order has " + n + " items");
		$("#SXqty").val( n );
    });
});

$(document).ready(function(){
 
    $("#AddGroup3-3").click(function(){
        $("<li id='SX'>Tomatoes</li>").appendTo("#SX");
		var n = $("#SX li").length;
		$("#SXcnt").text("Your order has " + n + " items");
		$("#SXqty").val( n );
    });
});
$(document).ready(function(){
 
    $("#AddGroup3-4").click(function(){
        $("<li id='SX'>Mushroom</li>").appendTo("#SX");
		var n = $("#SX li").length;
		$("#SXcnt").text("Your order has " + n + " items");
		$("#SXqty").val( n );
    });
});

$(document).ready(function(){
 
    $("#AddGroup3-5").click(function(){
        $("<li id='SX'>Spicy</li>").appendTo("#SX");
		var n = $("#SX li").length;
		$("#SXcnt").text("Your order has " + n + " items");
		$("#SXqty").val( n );
    });
});

/*Vegetable Toppings*/
$(document).ready(function(){
 
    $("#AddGroup4").click(function(){
        $("<li id='VTX'>Green pepper</li>").appendTo("#VTX");
		var n = $("#VTX li").length;
		$("#VTXcnt").text("Your order has " + n + " items");	
		$("#VTXqty").val( n );
    });
});

$(document).ready(function(){
 
    $("#AddGroup4-2").click(function(){
        $("<li id='VTX'>Onions</li>").appendTo("#VTX");
		var n = $("#VTX li").length;
		$("#VTXcnt").text("Your order has " + n + " items");	
		$("#VTXqty").val( n );
    });
});

$(document).ready(function(){
 
    $("#AddGroup4-3").click(function(){
        $("<li id='VTX'>Tomatoes</li>").appendTo("#VTX");
		var n = $("#VTX li").length;
		$("#VTXcnt").text("Your order has " + n + " items");	
		$("#VTXqty").val( n );
    });
});
$(document).ready(function(){
 
    $("#AddGroup4-4").click(function(){
        $("<li id='VTX'>Pineapple</li>").appendTo("#VTX");
		var n = $("#VTX li").length;
		$("#VTXcnt").text("Your order has " + n + " items");	
		$("#VTXqty").val( n );
    });
});

$(document).ready(function(){
 
    $("#AddGroup4-5").click(function(){
        $("<li id='VTX'>Hot Peppers</li>").appendTo("#VTX");
		var n = $("#VTX li").length;
		$("#VTXcnt").text("Your order has " + n + " items");	
		$("#VTXqty").val( n );
    });
});




