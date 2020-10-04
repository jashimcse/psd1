;(function($, window, document, undefined) {
	var $win = $(window);
	var $doc = $(document);

	$doc.ready(function() {

        $('.ht-slider-wrap').slick({
            speed: 400,
            slidesToShow: 3,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 480,
                    settings: "unslick"
                }
            ]
        });

        $("#home_carousel .item").each(function (i) {
            var $this = $(this),
                img_url = $this.children('img').attr('src');
            $this.css('background-image', 'url("' + img_url +'")');
        });

	});

})(jQuery, window, document);
