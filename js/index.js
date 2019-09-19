$('.next').on('click', function(){
 $('.active').next('img').addClass('active').prev('img').removeClass('active');
});

$('.prev').on('click', function(){
 $('.active').prev('img').addClass('active').next('img').removeClass('active');
});