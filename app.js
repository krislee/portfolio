let $burger = $('.burger')
$burger.on('click', function(e) {
    let $right = $('.right-burger');
    $right.toggleClass('show');
    $('.burger').toggleClass('xcross')
})

$(window).resize (function(e) {
   if($(window).width()>600){
       $('.right-burger').removeClass('show')
       $('.burger').removeClass('xcross')
   }
})

$('.preview1').hover(() => {
    $('.library').toggleClass('text-glow')
    $('.glow1').toggleClass('button-glow')

})
$('.preview2').hover(() => {
    $('.rps').toggleClass('text-glow')
    $('.glow2').toggleClass('button-glow')
})

const slideUp = () => {
    let options = {
        root: null,
        rootMargin: '0px',
        threshold: 0
    }
    let bodyWidth = document.querySelector('body').offsetWidth

    let observer = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if(entry.isIntersecting) {
                document.querySelector('.profile-pic').setAttribute('id','profile-pic-effect')
                document.querySelector('.short-blurb').setAttribute('id', 'short-blurb-effect')
            } 
        })
    }, options)
    let about = document.querySelector('.hp-flex')
    observer.observe(about)
}
slideUp()