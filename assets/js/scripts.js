(function ($) {
    "use strict";

    // $(document).on('ready', function () {
    //     $('.mainmenu').meanmenu(
    //         meanMenuContainer: '.mobile-menu'
    //     );
    // });
    // jQuery(document).ready(function () {
    // });
    $(document).ready(function () {
        $('.home-hero-slider').slick({
            dots: true,
            autoplay: true,
            autoplaySpeed: 5000,
            prevArrow: '<div class="slick-prev slick-arrow"><i class="fa-solid fa-arrow-left"></i></div>',
            nextArrow: '<div class="slick-next slick-arrow"><i class="fa-solid fa-arrow-right"></i></div>',
            responsive: [
                { breakpoint: 767, settings: { arrows: false } }
            ]

        });
    });


    jQuery('header nav').meanmenu({
        meanMenuContainer: '.mobile-menu',
        meanScreenWidth: "991",
        meanMenuOpen: "<span></span><span></span><span></span>",
        meanShowChildren: true,
    });




})(jQuery);