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