$(document).ready(function(){
  $('#bxslider').bxSlider({
    mode: 'fade',
    captions: true,
    pager: false,
    auto: true,
    pause: 5000
  });

  $('#raptor').raptorize({
		'enterOn' : 'konami-code'
	});

  // If a user scrolls below the absolute top, then update the header
  $(window).scroll(function () {
  	var $header = $("#header");

  	if ($header.offset().top == 0) {
  		$header.removeClass("alternate-header");
  	}
  	else if (!$header.hasClass("alternate-header"))
  	{
  		$header.addClass("alternate-header");
  	}
  });
});

function initMap() {
  var uluru = { lat: 39.849733, lng: -105.0515423 };
  
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 14,
    center: uluru
  });

  var marker = new google.maps.Marker({
    position: uluru,
    map: map
  });
}