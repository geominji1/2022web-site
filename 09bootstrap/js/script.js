new Swiper('.swiper',{
    loop:true,
    mode:"horizontal",
    navigation:{
        nextEl:".swiper-button-next",
        prevEl:".swiper-button-prev",
        
    }
})

$(".banner1 > .row > div").hover(function(){
    $(this).find(".card-img").removeClass("moon")
},function(){
    $(".card-img").addClass("moon")
})