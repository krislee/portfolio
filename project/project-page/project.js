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



const url = 'https://spreadsheets.google.com/feeds/list/1TfxvlFob_O3oOgSFAW-pfBBPPGfMN0E5z7gfqq6xg0k/od6/public/values?alt=json'
fetch(url)
.then(response => response.json())
.then(retrievedData => {
    //console.log(retrievedData)
    const arr = retrievedData.feed.entry.map(eachentry => {
        return {
            description: eachentry.gsx$description.$t,
            image: eachentry.gsx$image.$t,
            title: eachentry.gsx$title.$t,
            url: eachentry.gsx$url.$t
        }
    })
    console.log(arr)
    
    create(arr)
})

const create  = (array) => {
    array.forEach ((eachArrayElement) => {
        const $div = $("<div>").addClass("container")
        const $source = $("<source>").attr({src: eachArrayElement.image, type: "video/mp4"})
        const $video = $("<video autoplay muted loop playsinline>").addClass("video")
        const $divVideo = $("<div>").addClass("videoDiv")
        $divVideo.append($video.append($source))
        
        const $div2 = $("<div>").addClass("paraContainer")
        $div2.append($("<h1>").addClass("projectheading").text(eachArrayElement.title))
        $div2.append($("<p>").addClass("para").text(eachArrayElement.description))

        const $a = $("<a>").attr({target: "_blank", href: eachArrayElement.url}).append($("<i>").addClass("fa fa-github"))
        $div2.append($("<div>").addClass("icons").append($a))
        
        $div.append($divVideo)
        $div.append($div2)
        $(".flex").append($div)
    
    })
}