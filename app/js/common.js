
 $('.owl-carousel').slick({
  	autoplay: true,
  	arrows: false,
  	 dots: true
  });

 $("#phone").mask("+38(099)999-99-99");


 $('.recomendations-link').click(function(){
       $('html, body').animate({scrollTop:$('#recomendations').position().top}, 2000);
});

  $('.rules-link').click(function(){
       $('html, body').animate({scrollTop:$('#rules').position().top}, 2000);
});

    $('.man-link').click(function(){
       $('html, body').animate({scrollTop:$('#man').position().top}, 2000);
});

        $('.woman-link').click(function(){
       $('html, body').animate({scrollTop:$('#woman').position().top}, 2000);
});
   $('.young-woman-link').click(function(){
       $('html, body').animate({scrollTop:$('.woman-price-table').position().top}, 2000);
});
      $('.old-woman-link').click(function(){
       $('html, body').animate({scrollTop:$('.woman-price-table').position().top}, 2000);
});
       $('.young-man-link').click(function(){
       $('html, body').animate({scrollTop:$('.man-price-table').position().top}, 2000);
});
      $('.old-man-link').click(function(){
       $('html, body').animate({scrollTop:$('.man-price-table').position().top}, 2000);
});

