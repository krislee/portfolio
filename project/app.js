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

// const changeText = () => {
//     count = 0;
//     wordsArray = ["learn", "be curious", "make a positive impact"]
//     setInterval(() => {
//         count ++;
//         $('.changeword')
//             $('.changeword').text(wordsArray[count%wordsArray.length])
//         })
//     }, 2000)
// }
// changeText()

const breakWord = () => {
    let bodyWidth = document.querySelector('body').offsetWidth
    if (bodyWidth< 599){
        $('.hungry span').append('<br>')
    }
}
breakWord()