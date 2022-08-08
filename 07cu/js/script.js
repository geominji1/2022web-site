console.log("test");

$(".navbar>ul>li").hover(function(){
    $(this).addClass("on");
},function(){
    $(this).removeClass("on");
});

$(".toggle").click(function(){
    $(".navbarClone").css("left",0);
    // $(".overlay").show();
    $(".mMenu>i").show();
})
// $(".overlay").click(function(){
//     $(".navbarClone").css("left","-100%");
//     $(".overlay").hide();
// });

$(".mMenu>i").click(function(){
    $(".navbarClone").css("left","-100%");
    $(".mMenu>i").hide();
});

$(".language div").click(function(){
    $(".language div").removeClass("active");
    $(this).addClass("active")

    console.log($(this))
})

$(".navbar>ul").clone().appendTo(".mMenu")


$(".navbar>ul>li>a").click(function(e){
    e.preventDefault();

$(".navbar>ul>li>a").parent().find(".submenu").slideUp()

if($(this).hasClass("active")){
    $(".navbar>ul>li>a").removeClass("active");

}else{
    $(this).parent().find(".submenu").slideDown();
    $(".navbar>ul>li>a").removeClass("active");
            $(this).addClass("active"); 

        
}

})

$(".mMenu>ul>li>a").click(function(e){
    e.preventDefault();

    $(".mMenu>ul>li>a").parent().find(".submenu").slideUp()

    if( $(this).hasClass("active") ){ 
        $(".mMenu>ul>li>a").removeClass("active");
    }else{
        $(this).parent().find(".submenu").slideDown();
        $(".mMenu>ul>li>a").removeClass("active");
        $(this).addClass("active"); 
        

    }
})

$(window).scroll(function(){
    let scrollY = window.pageYOffset;

    if( scrollY > 100 ){
        //$(".header").attr("style","position:fixed")
        $("#header").addClass("fixed");
    }else{
        //$(".header").attr("style","");
        $("#header").removeClass("fixed");
    }

    $(".scroll").html(parseInt(scrollY))
});


$(document).ready(function(){
    $(".modal").colorbox({
        rel:'modal'
    })
    $(".youtube").colorbox({
        iframe:true,
        innerWidth:700,
        innerHeight:394
    })
});


var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    autoplay:true,
    centeredSlides: true,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    
});