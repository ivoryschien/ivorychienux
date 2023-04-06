$('a').click(function(e){
	var _elem = $(this);
  
  $('a').parent('li').each(function(){
  	$(this).removeClass('active');
  });
  
  _elem.parent('li').addClass('active');
});

const sentence = 'The quick brown fox jumps over the lazy dog.';

console.log(sentence.toLowerCase());
// Expected output: "the quick brown fox jumps over the lazy dog."

