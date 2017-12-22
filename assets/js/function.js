//scrollTop
  $(document).ready(function(){
     $(window).scroll(function () {
            if ($(this).scrollTop() > 50) {
                $('#back-to-top').fadeIn();
            } else {
                $('#back-to-top').fadeOut();
            }
        });
        // scroll body to 0px on click
        $('#back-to-top').click(function () {
            $('#back-to-top').tooltip('hide');
            $('body,html').animate({
                scrollTop: 0
            }, 800);
            return false;
        });
        
        $('#back-to-top').tooltip('show');
});

//Carousel
  $(document).ready(function(){
    $("#myCarousel").carousel({interval:5000});
  });

  $(document).ready(function(){
    $("#myCarouseli").carousel({interval:2000});
  });
//Remove Header
  $(document).on("scroll", function() {

  if($(document).scrollTop()>50) {
    $("nav").removeClass("transparent").addClass("un");
  } else {
    $("nav").addClass("transparent").removeClass("un");
  }
  
});
//smooth
$(document).ready(function(){
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

