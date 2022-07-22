console.log("test");

$(".navbar>ul>li").hover(function(){
    $(this).addClass("on");
},function(){
    $(this).removeClass("on");
});

$(".toggle").click(function(){
    $(".navbarClone").css("left",0);
    $(".overlay").show();
})
$(".overlay").click(function(){
    $(".navbarClone").css("left","-100%");
    $(".overlay").hide();
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