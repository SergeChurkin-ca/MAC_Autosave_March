 var st = window.pageYOffset || document.documentElement.scrollTop;
 if (st < lastScrollTop) {
     // downscroll code
 } else {
     // upscroll code
 }
 lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling