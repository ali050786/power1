 $(window).load(function() {
	 
	 
	
	 $('.mission').css("width","0px") 
	 $('.mission .bodycontent').css("width","0px") 
	 	
	  $('.vision').css("width","0px") 
	 $('.vision .bodycontent').css("width","0px") 
	 
	$('.team').css("width","0px") 
	 $('.team .bodycontent').css("width","0px") 
	 
	  $('.companies').css("width","0px") 
	 $('.companies .bodycontent').css("width","0px") 
	 
	   $('.founder').css("width","0px") 
	 $('.founder .bodycontent').css("width","0px") 
	 
	 
	 
	$('.missionbtn').click(function (){	
	$('.mission').animate({width:'100%'},{duration:1000, easing:'easeInOutQuart' })
	$('.mission .bodycontent').animate({width:'50%'},{duration:800, easing:'easeInOutQuart' })
	
	});
	
	$('.mission .close').click(function (){	
	$('.mission .bodycontent').animate({width:'0%'},{duration:1000, easing:'easeInOutQuart' })
	$('.mission').animate({width:'0%'},{duration:1200, easing:'easeInOutQuart' })
	$('.mission').css("width","0px") 
	
	});
	
 	$('.visionbtn').click(function (){	
	$('.vision').animate({width:'100%'},{duration:1000, easing:'easeInOutQuart' })
	$('.vision .bodycontent').animate({width:'50%'},{duration:800, easing:'easeInOutQuart' })
	
	});
	
	$('.vision .close').click(function (){	
	$('.vision .bodycontent').animate({width:'0%'},{duration:1000, easing:'easeInOutQuart' })
	$('.vision').animate({width:'0%'},{duration:1200, easing:'easeInOutQuart' })
	$('.vision').css("width","0px") 
	
	});
	
 	$('.teambtn').click(function (){	
	$('.team').animate({width:'100%'},{duration:1000, easing:'easeInOutQuart' })
	$('.team .bodycontent').animate({width:'50%'},{duration:800, easing:'easeInOutQuart' })
	
	});
	
	$('.team .close').click(function (){	
	$('.team .bodycontent').animate({width:'0%'},{duration:1000, easing:'easeInOutQuart' })
	$('.team').animate({width:'0%'},{duration:1200, easing:'easeInOutQuart' })
	$('.team').css("width","0px") 
	
	});
	
	$('.companiesbtn').click(function (){	
	$('.companies').animate({width:'100%'},{duration:1000, easing:'easeInOutQuart' })
	$('.companies .bodycontent').animate({width:'80%'},{duration:800, easing:'easeInOutQuart' })
	
	});
	
	$('.companies .close').click(function (){	
	$('.companies .bodycontent').animate({width:'0%'},{duration:1000, easing:'easeInOutQuart' })
	$('.companies').animate({width:'0%'},{duration:1200, easing:'easeInOutQuart' })
	$('.companies').css("width","0px") 
	
	 	});
		
		
	  $('#companies-info #buy').click(function (){	
	  $('*#buyers').animate({height:"100px"},500)
	  $('#companies-info div:not(#buyers)').animate({height:"0px"},200)
	  })
	  
	   $('#companies-info #invest').click(function (){	
	  $('*#investors').animate({height:"100px"},500)
	  $('#companies-info div:not(#investors)').animate({height:"0px"},200)  
	  })
	   
	   $('#companies-info #develop').click(function (){	
	  $('*#developers').animate({height:"120px"},500)
	  $('#companies-info div:not(#developers)').animate({height:"0px"},200)  
	  })

	 
	$('.founderbtn').click(function (){	
	$('.founder').animate({width:'100%'},{duration:1000, easing:'easeInOutQuart' })
	$('.founder .bodycontent').animate({width:'50%'},{duration:800, easing:'easeInOutQuart' })
	
	});
	
	$('.founder .close').click(function (){	
	$('.founder .bodycontent').animate({width:'0%'},{duration:1000, easing:'easeInOutQuart' })
	$('.founder').animate({width:'0%'},{duration:1200, easing:'easeInOutQuart' })
	$('.founder').css("width","0px") 
	
	});
	

	
	
	
   $('.box').mouseleave(function (){

	$(this).find('.innner-box').animate({top:'170px'},{duration:200, easing:'easeInOutQuart'})

	});
		
		
	});