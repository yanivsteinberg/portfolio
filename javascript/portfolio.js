/*---Navi kutsut ---*/

$("#projectslink").click(function () {
  $('html, body').animate({
    scrollTop: $("#projects").offset().top
  }, 1000);
});

$("#customerslink2").click(function () {
  $('html, body').animate({
    scrollTop: $("#timeline").offset().top
  }, 1000);
});

$("#methodlink").click(function () {
  $('html, body').animate({
    scrollTop: $("#method").offset().top
  }, 1000);
});

$("#customerslink").click(function () {
  $('html, body').animate({
    scrollTop: $("#customers").offset().top
  }, 1000);
});

$("#contactlink").click(function () {
  $('html, body').animate({
    scrollTop: $("#contact").offset().top
  }, 1000);
});

$("#timelinelink").click(function () {
  $('html, body').animate({
    scrollTop: $("#timeline").offset().top
  }, 1000);
});

/*---projektikutsut---*/

$("#protieto").click(function () {
  $('html, body').animate({
    scrollTop: $("#protieto").offset().top
  }, 200);
});

$("#protieto").one("click", function () {
  $('.protieto-project').load("protieto.html", function () {

    $(".up1").click(function () {
      $('#protieto-project').toggle();
    });
    $("#protieto").click(function () {
      $('.protieto-project').toggle();
    });
  });
});

$("#opendigi").click(function () {
  $('html, body').animate({
    scrollTop: $("#opendigi").offset().top
  }, 200);
});

$("#opendigi").one("click", function () {
  $('.opendigi-project').load("opendigi.html", function () {

    $(".up1").click(function () {
      $('#opendigi-project').toggle();
    });
    $("#opendigi").click(function () {
      $('.opendigi-project').toggle();
    });
  });
});


$("#naurunpaikka").click(function () {
  $('html, body').animate({
    scrollTop: $("#naurunpaikka").offset().top
  }, 200);
});

$("#naurunpaikka").one("click", function () {
  $('.naurunpaikka-project').load("naurunpaikka.html", function () {

    $(".up2").click(function () {
      $('.naurunpaikka-project').toggle();
    });
    $("#naurunpaikka").click(function () {
      $('.naurunpaikka-project').toggle();
    });
  });
});


$("#lightguide").click(function () {
  $('html, body').animate({
    scrollTop: $("#lightguide").offset().top
  }, 200);
});

$("#lightguide").one("click", function () {
  $('.light-project').load("light-guide.html", function () {

    $(".up3").click(function () {
      $('.light-project').toggle();
    });
    $("#lightguide").click(function () {
      $('.light-project').toggle();
    });
  });
});


$("#ylojarvi").click(function () {
  $('html, body').animate({
    scrollTop: $("#ylojarvi").offset().top
  }, 200);
});

$("#ylojarvi").one("click", function () {
  $('.ylojarvi-project').load("ylojarvi.html", function () {

    $(".up4").click(function () {
      $('.ylojarvi-project').toggle();
    });
    $("#ylojarvi").click(function () {
      $('.ylojarvi-project').toggle();
    });
  });
});


$("#libraryeva").click(function () {
  $('html, body').animate({
    scrollTop: $("#libraryeva").offset().top
  }, 200);
});

$("#libraryeva").one("click", function () {
  $('.library-project').load("library.html", function () {

    $(".up5").click(function () {
      $('.library-project').toggle();
    });
    $("#libraryeva").click(function () {
      $('.library-project').toggle();
    });
  });
});

$('#portfolio-vid').mouseover(function () {
  $(this).get(0).play();
}).mouseout(function () {
  $(this).get(0).pause();
})


/*---contact---*/
$(document).ready(function () {
  $('.submit').click(function (event) {
    console.log('clicked button')

    var fullName = $('.fullName').val()
    var email = $('.email').val()
    var subject = $('.subject').val()
    var message = $('.message').val()
    var statusElm = $('.status')
    statusElm.empty();

    if (fullName.length > 2) {
      statusElm.append('<div>Name is valid</div>')
    } else {
      event.preventDefault()
      statusElm.append('<div>Enter your full name</div>')
    };

    if (email.length > 5 && email.includes('@') && email.includes('.')) {
      statusElm.append('<div>Email is valid</div>')
    } else {
      event.preventDefault()
      statusElm.append('<div>Email is not valid</div>')
    };

    if (subject.length >= 2) {
      statusElm.append('<div>Subject is valid</div>')
    } else {
      event.preventDefault()
      statusElm.append('<div>The subject is too short</div>')
    };

    if (message.length <= 10) {
      event.preventDefault()
      statusElm.append('<div>Message should be at least 10 characters</div>')
    };

  })
});