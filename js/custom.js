$(document).ready(function () {
    new WOW().init();
    $(".block-items").owlCarousel({
        loop:true,
        nav: true,
        items: 1,
        margin:130,
        stagePadding:30,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            960: {
                items: 3
            },
            1200: {
                items: 3
            }
        }

    });

    var owl = $('#cars-photos');
    owl.owlCarousel({
        loop: true,
        nav: true,
        margin: 25,
        stagePadding:30,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            960: {
                items: 4
            },
            1200: {
                items: 4
            }
        }
    });
    $('#study .item').click(function (e) {
        $("#gal-study a").click();
        e.preventDefault();
        e.stopPropagation();
        return false;
    });


    var owl = $('#study');
    owl.owlCarousel({
        loop: true,
        nav: true,
        margin: 40,
        stagePadding: 200,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            960: {
                items: 3
            },
            1200: {
                items: 3
            }
        }
    });

    var owl = $('#study-mobile');
    owl.owlCarousel({
        loop: true,
        nav: true,
        margin: 25,
        stagePadding:80,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            960: {
                items: 3
            },
            1200: {
                items: 3
            }
        }
    });

    var owl = $('#gramota2');
    owl.owlCarousel({
        margin: 50,
        stagePadding: 450,
        nav: false,
    });

    var owl = $('.owl-carousel');
    owl.owlCarousel({
        loop: true,
        nav: false,
        margin: 2,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            960: {
                items: 5
            },
            1200: {
                items: 10
            }
        }
    });

    $("#lightgallery .item").lightGallery();
    $("#lightgallery2 .item").lightGallery();
    $("#lightgallery3 .item").lightGallery();


    $("#gal-cars").lightGallery({
        download: false
    });

    $(".cab-gal .row > div").lightGallery();
    $(".cab-gal > div").lightGallery();
    $(".item").not('.reviews .item').lightGallery();
    // $('input[name="phone"]').inputmask('+7 (999) 999-99-99', { "clearIncomplete": true });


    $('#cars-photos .item').click(function (e) {
        $("#gal-cars a").click();
        e.preventDefault();
        return false;
    });

    $('.address a.btn').click(function () {
        id = $(this).attr('href');
        $('.multi-collapse').hide();
        $(id).show();
        $('html, body').scrollTop($(document).height());
    });

    $('.show-more').click(function (e) {
        $(this).hide();
        $(this).next().show();
        e.preventDefault();
        return false;
    });

    $('.btn-orange,.callback').not('.sender').click(function () {
        $('.where-input').val( $(this).attr('data-where') );
    });
    // Initiate with custom caret icon

});
