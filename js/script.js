$(document).ready(function(){

  /*//Overlay scrollbar
  $(function() {
    //The first argument are the elements to which the plugin shall be initialized
    //The second argument has to be at least a empty object or a object with your desired options
    OverlayScrollbars(document.querySelectorAll('body'), {
      className : "os-theme-light os-theme-dark-edgy",

    });
  });*/

  //Change .scrollbutton position on scroll
  $(window).on("scroll", function () {
    if ($(this).scrollTop() > 100) {
       $(".scrollbutton").css("bottom", "-40px");
    }
    else {
       $(".scrollbutton").css("bottom", "30px");
    }
  });

  //Disable scrolling in menu
  $('#checkbox').change(function() {
    if ($('#checkbox').is(":checked")) {
      $('body').css('overflow-y','hidden');
    } else {
      $('body').css('overflow-y','scroll');
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
