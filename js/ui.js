$('#fixed-nav').hide();

$(window).scroll(function() {
    if ($(window).scrollTop() > 100) {
        $('#fixed-nav').fadeIn(200, function () {
          $(this).show();
          $('.prev').css({"z-index":"-1"});
          $('.next').css({"z-index":"-1"});

        })
    } else {
        $('#fixed-nav').fadeOut(200, function () {
          $(this).hide();
          $('.prev').css({"z-index":"1"});
          $('.next').css({"z-index":"1"});
        })
    }
});


