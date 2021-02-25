$(document).ready(function(){

    $('.btnMo').on('click', function(e){
        e.preventDefault();
        
        var isOpen = $('#moPanel').hasClass('on');

        if(isOpen){
            $('#moPanel').removeClass('on');
        }else{
            $('#moPanel').addClass('on');
        }
    });
    
    $(window).resize(function(){
        var width_size = window.outerWidth; //윈도우창크기
        
        if(width_size>=577) {
            $('#moPanel').css({"display":"none"});
        }else{
            $('#moPanel').css({"display":"block"});
        }
    });
});