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