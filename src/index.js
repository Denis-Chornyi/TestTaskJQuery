$(document).ready(function () {
  function updateTexts() {
    $('.header1__navigation-item-description').each(function () {
      const newText = window.innerWidth <= 990 ? $(this).data('small') : $(this).data('large');
      $(this).text(newText);
    });
  }

  updateTexts();

  $(window).resize(updateTexts);
});

$(document).ready(function () {
  let timer = 90;
  setInterval(() => {
    timer--;
    $('#timer').text(timer);

    if (timer === 0) {
      timer = 90;

      $('#header1').toggleClass('visible hidden');
      $('#header2').toggleClass('visible hidden');

      $('#footer1').toggleClass('visible hidden');
      $('#footer2').toggleClass('visible hidden');
    }
  }, 1000);
});

$(document).ready(function () {
  $('.scroll-to-top').on('click', function () {
    $('html, body').animate({ scrollTop: 0 }, 800);
  });
});
