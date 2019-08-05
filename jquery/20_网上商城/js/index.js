$(function(){

    $('#jnBrandTab li').on('click',function(){
        $(this).addClass("chos").siblings().removeClass("chos");
        var index = $(this).index();
        var width = $('#jnBrandList li').outerWidth(true)*4;
        $('#jnBrandList').animate({
            left: -index*width
        },1000)
    })

    $('#skin li').on('click',function(){
        $(this).addClass('selected').siblings().removeClass('selected');
        var index = $(this).index();
        $('#nav').attr('class','new_skin_'+index);


    })

})



