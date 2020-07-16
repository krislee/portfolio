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

const slideUp = () => {
    let options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    }
    
    if (document.querySelector('body').offsetWidth < '600px'){
        options.threshold = 0.5
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


const opacityChange = () => {
let options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.
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