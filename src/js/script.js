$(document).ready(function() {

    $(window).scroll(function(){
        if($(this).scrollTop()>=200){
            $("#navBar").addClass("noTransparrent");
        }
        else{
            $("#navBar").removeClass("noTransparrent")
        }
    });


    $("a.scroll").on('click', function(event){ // تحريك الصفحة ضمن فترة زمنية محددة أي بإنزلاق
        var hash = this.hash;
        $('html, body').animate({scrollTop: $(hash).offset().top}, 800, function(){});
    });


    $('.circle').circleProgress({
        startAngle: -Math.PI / 2,
        lineCap: 'round',
        fill: {color: 'white'}
    }).on('circle-animation-progress', function(event, progress, stepValue) {
        $(this).find('span').html(Math.round(stepValue * 100) + '%');
    });
});

