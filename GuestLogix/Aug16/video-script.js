$(document).ready(function() {

    $('.popup-btn2').on('click', function() {
        $(this).hide();
        $('.video-play-btn').hide();
        $('.video-popup').fadeIn('slow');
        return false;
    });

    //   $('.popup-bg').on('click', function(){
    //     $('.video-popup').slideUp('slow');
    //     return false;
    //   });

    $('.close-btn').on('click', function() {
        jQuery("iframe").each(function() {
            var url = jQuery(this).attr('src');
            jQuery(this).attr('src', url);
        });
        $('.video-popup').fadeOut('slow');

        $('.popup-btn2').show();
        $('.video-play-btn').show();
        $('.video-popup')[0].pause();
        return false;
    });

});