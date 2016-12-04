$('#fixed-nav').hide();

$(window).scroll(function() {
    if ($(window).scrollTop() > 100) {
        $('#fixed-nav').fadeIn(200, function () {
          $(this).show();
        })
    } else {
        $('#fixed-nav').fadeOut(200, function () {
          $(this).hide();
        })
    }
});


