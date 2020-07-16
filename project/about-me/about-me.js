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

let options = {
    root: null,
    rootMargin: '0px',
    threshold: 0
}

let observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
        console.log(entry)
        if(entry.isIntersecting) {
            document.querySelector('.about').setAttribute('id','slide-up')
            document.querySelector('.profile').setAttribute('id', 'profile-appear')
        }
    })
}, options)
let about = document.querySelector('.about')
observer.observe(about)