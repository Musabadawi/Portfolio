	$(document).ready(function(){
	$(window).scroll(function(){
		if(this.scrolly >  20){
           if ('.navbar').addClass('sticky');
		}else{
           if ('.navbar').removeClass('sticky');
		}
	})
