let $burger = $('.burger')
$burger.on('click', function(e) {
    let $right = $('.right-burger');
    $right.toggleClass('show');
    $('.burger').toggleClass('xcross')
})

$(window).resize (function(e) {
   if($(window).width()<600){
       $('.right-burger').removeClass('show')
       $('.burger').removeClass('xcross')
   }
})

$(window).on('load', () => {
    $('.short-blurb').addClass('short-blurb-effect')
    $('.profile-pic').addClass('profile-pic-effect')
})

$('.preview1').hover(() => {
    $('.library').toggleClass('text-glow')
    $('.glow1').toggleClass('button-glow')

})
$('.preview2').hover(() => {
    $('.rps').toggleClass('text-glow')
    $('.glow2').toggleClass('button-glow')
})
