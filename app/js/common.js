//preloader
$(window).on('load', function () {
  $(".cssload-dots").fadeOut();
  $('#page-preloader').delay(400).fadeOut("slow");
  $(".offers-tabs-wrapper").animated("flipInY");
});

$(window).resize(function () {
  resetMap(map1);
  resetMap(map2);
  playMarkerAnimation();
});


function resetMap(m) {
  x = m.getZoom();
  c = m.getCenter();
  google.maps.event.trigger(m, 'resize');
  m.setZoom(x);
  m.setCenter(c);
}

$(function () {
  //SVG Fallback
  //  if (!Modernizr.svg) {
  //    $("img[src*='svg']").attr("src", function () {
  //      return $(this).attr("src").replace(".svg", ".png");
  //    });
  //  }

  //E-mail Ajax Send
  //Documentation & Example: https://github.com/agragregra/uniMail
  $("form").submit(function () { //Change
    var th = $(this);
    $.ajax({
      type: "POST",
      url: "mail.php", //Change
      data: th.serialize()
    }).done(function () {
      alert("Спасибо за заявку!");
      setTimeout(function () {
        // Done Functions
        th.trigger("reset");
      }, 1000);
      $.magnificPopup.close();
    });
    return false;
  });


  //Нельзя дергать картинки
  $("img, a").on("dragstart", function (event) {
    event.preventDefault();
  });
});
$(document).ready(function () {
  // tabs
  // main header top phone tabs
  $(".phone-tabs-wrapper .tab-item").not(":first").hide();
  $(".phone-tabs-wrapper .tab").click(function () {
    $(".phone-tabs-wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
    $(".phone-tabs-wrapper .tab-item").hide().eq($(this).index()).fadeIn();
  }).eq(0).addClass("active");
  // questioins tabs
  $(".questions-tabs-wrapper .tab-item").not(":first").hide();
  $(".questions-tabs-wrapper .tab").click(function () {
    $(".questions-tabs-wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
    $(".questions-tabs-wrapper .tab-item").hide().eq($(this).index()).fadeIn();
  }).eq(0).addClass("active");
  // main header offers tabs
  $(".offers-tabs-wrapper .tab-item").not(":first").hide();
  $(".offers-tabs-wrapper .tab").click(function () {
    $(".offers-tabs-wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
    $(".offers-tabs-wrapper .tab-item").hide().eq($(this).index()).fadeIn();
  }).eq(0).addClass("active");
  // find-us tabs
  $(".find-us-wrapper .tab-item").not(":first").hide();
  $(".find-us-wrapper .tab").click(function () {
    $(".find-us-wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
    $(".find-us-wrapper .tab-item").hide().eq($(this).index()).fadeIn();
    resetMap(map1);
    resetMap(map2);
    playMarkerAnimation();
  }).eq(0).addClass("active");

  // owl-carousel
  $(".owl-carousel").owlCarousel({
    items: 1,
    nav: true,
    navText: [],
    dots: true,
    loop: true
  });

  //popup
  $(".main-form-popup").magnificPopup({
    type: 'inline',
    preloader: false,
    focus: '#name',
    // When elemened is focused, some mobile browsers in some cases zoom in
    // It looks not nice, so we disable it:
    callbacks: {
      beforeOpen: function () {
        if ($(window).width() < 700) {
          this.st.focus = false;
        } else {
          this.st.focus = '#name';
        }
      }
    }
  });
  $(".image-link").magnificPopup();

  //animation
  animationToggle();
  $(window).resize(function () {
    animationToggle();
  });

  function animationToggle() {
    if ($(window).width() > 768) {
      $(".professionals-item, section h2, section .main-form, .levelup p").css("opacity", "0");
      $(".professionals-item").animated("slideInLeft");
      $("section .main-form").waypoint({
        handler: function (direction) {
          this.destroy();
          $("section .main-form").addClass("animated fadeInUp");
          $("section .main-form").css("opacity", 1);
        },
        offset: "60%"
      });
      $("section h2:not('.questions h2'), .levelup p").animated("fadeIn");
      $(".find-us h2").animated("slideInLeft");
      $(".questions h2").animated("rubberBand");
    }
  }

});