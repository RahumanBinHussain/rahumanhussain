// Initiate loading elements
AOS.init();


// Nav slider
$('.humbeg').on('click', function() {

    $('span').toggleClass('grill');

    $('nav').toggleClass('showslide');

    $('.opc-mid').toggleClass('opc-midds');

    $('body').toggleClass('no-scroll');

});



// $('#owl-caro .item').each(function(index) {
//     const $img = $(this).find('figure img');
    
//     if (index % 2 === 0) {
//         $img.css('animation', 'slideLeft 60s linear infinite');
//     } else {
//         $img.css('animation', 'slideRight 60s linear infinite');
//     }
// });


// Logo dissapear transition
$(document).ready(function() {
    $(window).scroll(function() {
        const scrollDistance = 50; // Adjust this value as needed
        const $logo = $('.logo');
        const $humbeg = $('.social-nav');

        if ($(window).scrollTop() > scrollDistance) {
            $logo.css({
                'opacity': '0',
                'transition': 'opacity 0.5s ease'
            });
            $humbeg.css({
                'opacity': '0',
                'transition': 'opacity 0.5s ease'
            });
        } else {
            $logo.css('opacity', '1');
            $humbeg.css('opacity', '1');
        }
    });
});


$('#owl-caro').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1.1
        },
        600:{
            items:1.1
        },
        990:{
            items:1
        },
        1024:{
            items:2.09
        }
    }
})


$('#test').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1.1
        },
        990:{
            items:1
        },
        1024:{
            items:1
        }
    }
})
