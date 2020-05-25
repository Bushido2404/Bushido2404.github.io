$(".page-scroll").on("click", function () {
    // console.log('ok');

    //link href
    var dest = $(this).attr('href');

    //tangkap elemen
    var fdest = $(dest);

    //pindahkan scroll
    $('html,body').animate({
        scrollTop: fdest.offset().top - 60
    }, 1000, 'easeInOutExpo');
});
//tombol naik
$(document).ready(function(){
    
    $(window).scroll(function(){
        if($(this).scrollTop() > 700){
            $('#topBtn').fadeIn();
        }else{
            $('#topBtn').fadeOut();
        }
    });

    $('#topBtn').click(function(){
        $('html, body').animate({
            scrollTop: 0
        }, 800,'easeInOutExpo');
    })
})
