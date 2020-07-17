let $burger = $('.burger')
$burger.on('click', function(e) {
    let $right = $('.right-burger');
    $right.toggleClass('show');
})

$(window).resize (function(e) {
   if($(window).width()<600){
       $('.right-burger').removeClass('show')
   }
})

$(window).on('load', () => {
    $('.short-blurb').css('opacity', '1')
    $('.profile-pic').css('opacity', '1')
})

$('.preview1').hover(() => {
    $('.library').toggleClass('text-glow')
    $('.glow1').toggleClass('button-glow')

})
$('.preview2').hover(() => {
    $('.rps').toggleClass('text-glow')
    $('.glow2').toggleClass('button-glow')
})
