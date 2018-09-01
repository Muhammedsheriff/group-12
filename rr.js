

$(".item-image").click(function(){
    var imageSrc = $(this).attr("src");
    $("#main-image").attr("src",imageSrc);
})
