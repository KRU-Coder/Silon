$(document).ready(function(){
$('.product-warppers').owlCarousel({
    loop:true,
    margin:15,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:4
        }
    }
})
$('.d-down').click(function(){
$('.drop-down').toggle();
})
})
$(window).scroll(function(){
    $('.nav-bar').toggleClass('scrolled',$(this).scrollTop()>150);
})