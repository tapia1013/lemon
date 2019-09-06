$('.menu').on('click', function () {
  $(this).toggleClass('active');
  $('.overlay').toggleClass('menu-open');
});

$('.nav a').on('click', () => {
  $('.remove').removeClass('active');
  $('.overlay').removeClass('menu-open');
});