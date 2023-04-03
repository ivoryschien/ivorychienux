$('a').click(function(e){
	var _elem = $(this);
  
  $('a').parent('li').each(function(){
  	$(this).removeClass('active');
  });
  
  _elem.parent('li').addClass('active');
});