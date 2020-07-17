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

const slideUp = () => {
    let options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.0
    }
    let bodyWidth = document.querySelector('body').offsetWidth
    if (bodyWidth< 600 && bodyWidth>500){
        options.threshold = 0.1
    } else if (bodyWidth <=500 && bodyWidth >400) {
        options.threshold = 0.2
    } else if (bodyWidth <500 && bodyWidth >400) {
        options.threshold = 0.4
    }
    let observer = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            console.log(entry)
            if(entry.isIntersecting) {
                document.querySelector('.about').setAttribute('id','slide-up')
                document.querySelector('.profile').setAttribute('id', 'profile-appear')
            } 
            // else {
            //     document.querySelector(selector1).setAttribute('id', 'slide-up-skills')
            //     document.querySelectorAll(selector2)[0].setAttribute('id', 'icons-appear')
            //     document.querySelectorAll(selector2)[1].setAttribute('id', 'icons-appear')
            // }
        })
    }, options)
    // let about = document.querySelector(selector1)
    // observer.observe(about)
    let about = document.querySelector('.about')
    observer.observe(about)
}
slideUp()


const slideUp2 = () => {
    let options = {
        root: null,
        rootMargin: '0px',
        threshold: 0
    }
    
    let observer = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            console.log(entry)
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

// Credit to StackOverflow: https://stackoverflow.com/questions/13250325/show-hide-div-on-scroll
// $(window).scroll(function() {
//     if ($(this).scrollTop() > 800) {
//       $('.about').fadeOut();
//     } else {
//       $('.about').fadeIn();
//     //   $('.skills-outerdiv').fadeOut();
//     }
//   });


