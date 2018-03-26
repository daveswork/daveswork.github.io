var main = function() {
  $('.glyphicon').click(function(){
    event.preventDefault();
	  $(this).toggleClass('glyphicon-plus').toggleClass('glyphicon-minus').toggleClass('active');
    $(this).next('.content').toggleClass('hide');
  });

};


$(document).ready(main);
