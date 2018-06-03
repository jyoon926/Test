$(document).ready(function(){

  //Change .scrollbutton position on scroll
  $(window).on("scroll", function () {
    if ($(this).scrollTop() > 200) {
       $(".scrollbutton").css("bottom", "-40px");
    }
    else {
       $(".scrollbutton").css("bottom", "30px");
    }
  });

  //Disable scrolling in menu
  $('#checkbox').change(function() {
    if ($('#checkbox').is(":checked")) {
      $('body').css('overflow','hidden');
    } else {
      $('body').css('overflow','scroll');
    }
  });

  //Smooth Scrolling
	$("a").on('click', function(event) {
		if (this.hash !== "") {
			event.preventDefault();
			var hash = this.hash;
			$('html, body').animate({
				scrollTop: $(hash).offset().top
			}, 800, function(){
				window.location.hash = hash;
			});
		}
	});
});
