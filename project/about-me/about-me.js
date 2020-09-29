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

const slideUp = () => {
    let options = {
        root: null,
        rootMargin: '0px',
        threshold: 0
    }
    let bodyWidth = document.querySelector('body').offsetWidth
    // if (bodyWidth< 600 && bodyWidth>500){
    //     options.threshold = 0.1
    // } else if (bodyWidth <=500 && bodyWidth >400) {
    //     options.threshold = 0.2
    // } else if (bodyWidth <500 && bodyWidth >400) {
    //     options.threshold = 0.3
    // }
    let observer = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if(entry.isIntersecting) {
                document.querySelector('.about').setAttribute('id','slide-up')
                document.querySelector('.profile').setAttribute('id', 'profile-appear')
            } 
        })
    }, options)
    let about = document.querySelector('.about')
    observer.observe(about)
}
slideUp()

// IntersectionObserver is introduced to me by my peer, Kwok Ren
const slideUp2 = () => {
    let options = {
        root: null,
        rootMargin: '0px',
        threshold: 0
    }
    
    let observer = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                document.querySelector('.skills-outerdiv').setAttribute('id', 'slide-up-skills')
                document.querySelectorAll('.flex-icon')[0].setAttribute('id', 'icons-appear')
                document.querySelectorAll('.flex-icon')[1].setAttribute('id', 'icons-appear')
            }
        })
    }, options)
    let about = document.querySelector('.skills-outerdiv')
    observer.observe(about)
}
slideUp2()


