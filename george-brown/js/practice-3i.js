$(document).ready(function(){
		
	var onLoad = function(){
		$("#signUpForm").show();
		$("#signInForm").hide();
	}
	onLoad();


	$("#email").focus(function(){
		var msg = '<span style="color:red"> Please fill it';
		$("#emailText").html(msg);
		$("#emailText").fadeToggle(3000);
	});
		
	$("#psw").focus(function(){
		var msg = '<span style="color:red"> Please fill it';
		$("#password").html(msg);
		$("#password").fadeToggle(3000);
	});

	$("#rpsw").focus(function(){
		var msg = '<span style="color:red"> Please fill it';
		$("#repeatPassword").html(msg);
		$("#repeatPassword").fadeToggle(3000);

	});

	$("#check").click(function(){
        $("#term").slideDown("slow");
    });

	$("#cancelbtn").click(function(){
		$("input").val("");
		$('#check').attr('checked', false);
		$("#term").slideUp("fast");
	});

	$("#signUp").click(function(){
		alert("Congrats and welcome");
		$("#signUpForm").hide();
		$("#signInForm").show();
	});


	$("#email1").focus(function(){
		var msg = '<span style="color:red"> Please fill it';
		$("#emailText1").html(msg);
		$("#emailText1").fadeToggle(3000);
	});
		
	$("#psw1").focus(function(){
		var msg = '<span style="color:red"> Please fill it';
		$("#password1").html(msg);
		$("#password1").fadeToggle(3000);
	});

	$("#cancelbtn1").click(function(){
		$("input").val("");
		$('#check').attr('checked', false);
		$("#term").slideUp("fast");
	});

	$("#signIn").click(function(){
		alert("Congrats and welcome");
	});

});