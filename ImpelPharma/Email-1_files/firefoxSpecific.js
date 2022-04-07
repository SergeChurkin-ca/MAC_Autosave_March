/**
 * Javascript functions specific to Firefox peculiarities.
 */
 
Mkt = {};
Mkt.util = {};
Mkt.util.Firefox = {};

/**
 * Firefox will only show broken image icons when running in Quirks-mode (ie. no DOCTYPE).
 * We run in HTML transitional mode, so we have to go through hoops to get
 * Firefox to show these broken images.
 */
Mkt.util.Firefox.showBrokenImages = function(doc, addBrokenImgStyle ) {

  var ua = navigator.userAgent.toLowerCase();
  var isGecko = ua.indexOf("gecko") > -1;

  // Only do this for Firefox.
  if (!isGecko) {
    return;
  }

  if (addBrokenImgStyle == undefined) {
    addBrokenImgStyle = true;
  }
  
  var images = doc.images;

  for (var i = 0; i < images.length; i++) {
    var img = images[i];

    // naturalWidth and naturalHeight are only available on Firefox, not IE.
    // These values specify the actual width and height of the image before
    // any resizing is applied.  If they are both 0, we have no image.
    //
    if (img.complete &&
        (img.naturalWidth == undefined || img.naturalWidth == 0) &&
        (img.naturalHeight == undefined || img.naturalHeight == 0)) {

      // Use the <img> width if defined, else default to 24.
      //
      if (img.getAttribute("width")) {
        img.width = img.getAttribute("width");
      } else {
        img.width = 24;
      }

      // Use the <img> height if defined, else default to 24.
      //
      if (img.getAttribute("height")) {
        img.height = img.getAttribute("height");
      } else {
        img.height = 24;
      }

      // Show the broken image icon even if the <img> has an alt 
      // attribute.
      //
      if (addBrokenImgStyle) {
        img.style.MozForceBrokenImageIcon = 1;
      }
    }
  }
}
