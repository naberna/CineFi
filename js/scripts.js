$(function () {
  // init feather icons
  feather.replace();

  // init tooltip & popovers
  $('[data-toggle="tooltip"]').tooltip();
  $('[data-toggle="popover"]').popover();

  //page scroll
  $("a.page-scroll").bind("click", function (event) {
    var $anchor = $(this);
    $("html, body")
      .stop()
      .animate(
        {
          scrollTop: $($anchor.attr("href")).offset().top - 20,
        },
        1000
      );
    event.preventDefault();
  });

  // slick slider
  $(".slick-about").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    dots: true,
    arrows: false,
  });

  //toggle scroll menu
  var scrollTop = 0;
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    //adjust menu background
    if (scroll > 80) {
      if (scroll > scrollTop) {
        $(".smart-scroll").addClass("scrolling").removeClass("up");
      } else {
        $(".smart-scroll").addClass("up");
      }
    } else {
      // remove if scroll = scrollTop
      $(".smart-scroll").removeClass("scrolling").removeClass("up");
    }

    scrollTop = scroll;

    // adjust scroll to top
    if (scroll >= 600) {
      $(".scroll-top").addClass("active");
    } else {
      $(".scroll-top").removeClass("active");
    }
    return false;
  });

  // scroll top top
  $(".scroll-top").click(function () {
    $("html, body").stop().animate(
      {
        scrollTop: 0,
      },
      1000
    );
  });

  /**Theme switcher - DEMO PURPOSE ONLY */
  $(".switcher-trigger").click(function () {
    $(".switcher-wrap").toggleClass("active");
  });
  $(".color-switcher ul li").click(function () {
    var color = $(this).attr("data-color");
    $("#theme-color").attr("href", "css/" + color + ".css");
    $(".color-switcher ul li").removeClass("active");
    $(this).addClass("active");
  });
});

$(function () {
  $('[data-toggle="tooltip"]').tooltip({ trigger: "manual" }).tooltip("show");
});

// $( window ).scroll(function() {
// if($( window ).scrollTop() > 10){  // scroll down abit and get the action
$(".progress-bar").each(function () {
  each_bar_width = $(this).attr("aria-valuenow");
  $(this).width(each_bar_width + "%");
});

//  }
// });

(function ($, document) {
  // get tallest tab__content element
  let height = -1;

  $(".tab__content").each(function () {
    height = height > $(this).outerHeight() ? height : $(this).outerHeight();
    $(this).css("position", "absolute");
  });

  // set height of tabs + top offset
  $("[data-tabs]").css("min-height", height + 40 + "px");
})(jQuery, document);

// Get the modal
var modal = document.getElementById("loginModal");
var modal2 = document.getElementById("registerModal");
var modal3 = document.getElementById("forgetPasswordModal");
var modal4 = document.getElementById("connectWalletModal");

// Get the button that opens the modal
var btn = document.getElementById("login");
var btn2 = document.getElementById("register");
var btn3 = document.getElementById("forgetPassword");
var btn4 = document.getElementById("connectWallet");

// Get the <span> element that closes the modal
var span = document.getElementById("close");
var span2 = document.getElementById("close2");
var span3 = document.getElementById("close3");
var span4 = document.getElementById("close4");

// When the user clicks the button, open the modal
btn.onclick = function () {
  modal.style.display = "block";
};
btn2.onclick = function () {
  modal2.style.display = "block";
};
btn3.onclick = function () {
  modal3.style.display = "block";
};
btn4.onclick = function () {
  modal4.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};
span2.onclick = function () {
  modal2.style.display = "none";
};
span3.onclick = function () {
  modal3.style.display = "none";
};
span4.onclick = function () {
  modal4.style.display = "none";
};
// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
window.onclick = function (event) {
  if (event.target == modal2) {
    modal2.style.display = "none";
  }
};
window.onclick = function (event) {
  if (event.target == modal3) {
    modal3.style.display = "none";
  }
};
window.onclick = function (event) {
  if (event.target == modal4) {
    modal4.style.display = "none";
  }
};

var button = document.querySelector('.navbar-toggler');

button.onclick = function() {
button.classList.toggle('collapsed');
}

const showWallet = () => {
    document.getElementById('wallet1').classList.add('show')
    const scrollY = document.documentElement.style.getPropertyValue('--scroll-y');
    const body = document.body;
    body.style.height = '100vh';
    body.style.overflowY = 'hidden';
  };
  const closeWallet = () => {
    const body = document.body;
    const scrollY = body.style.top;
    body.style.position = '';
    body.style.top = '';
    body.style.height = '';
    body.style.overflowY = '';
    window.scrollTo(0, parseInt(scrollY || '0') * -1);
    document.getElementById('wallet1').classList.remove('show');
  }
  window.addEventListener('scroll', () => {
    document.documentElement.style.setProperty('--scroll-y', `${window.scrollY}px`);
  });


  