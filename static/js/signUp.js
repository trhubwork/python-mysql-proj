$(function(){
	$('#btnSignUp').click(function(){
		console.log("this is working so far!")


		$.ajax({
			url: '/signUp',
			data: $('form').serialize(),
			type: 'POST',
			success: function(response){
				console.log(response);
			},
			error: function(error){
				console.log(error);
			}
		});
	});
});
