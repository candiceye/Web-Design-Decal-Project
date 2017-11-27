$(document).ready(function() {
	
	$("#welcome-phone").hover(function() {
		// jQuery Function Number 1
		$("#welcome-phone").css({"top": "-120px", 
			"animation-name": "lift-phone", 
			"animation-duration": "0.5s"})
		$("#welcome-phone-shadow").css({"height": "20px", "opacity": "50", 
			"animation-name": "shadow-shrink", 
			"animation-duration": "0.5s"})
	}, function() {
		// jQuery Function Number 2
		$("#welcome-phone").css({"top": "-100px", 
			"animation-name": "land-phone", 
			"animation-duration": "0.5s"})
		$("#welcome-phone-shadow").css({"height": "24px", "opacity": "100", 
			"animation-name": "shadow-grow", 
			"animation-duration": "0.5s"})
	})

	$(".tag").hover(function() {
		// jQuery Function Number 3
		$(this).css({"top": "155px", 
			"animation-name": "lift-tag", 
			"animation-duration": "0.35s", 
			"transition-duration": "0.35s"})
	}, function() {
		// jQuery Function Number 4
		$(this).css({"top": "160px", 
			"animation-name": "land-tag", 
			"animation-duration": "0.35s"})
	})

	$(".tag").click(function() {
		// jQuery Function Number 5
		$("body").css({"background-color": "#FFFFFF", 
			"transition-duration": "5s"})
	})

	$("#location-pin").click(function() {
		// jQuery Function Number 6
		$("location").html("Plano, Texas")
	})


});