** add this css

or include in <header>

.mktoForm .mktoFormRow:nth-of-type(1n+2),
.mktoForm .mktoButtonRow:nth-of-type(1n+2) {
    display: none;
}



.mktoForm[data-zi-managed="false"],
.mktoForm[data-zi-managed="true"][data-zi-managed-behaviors-ready="true"] {
    visibility: visible;
    position: static;
}

.mktoForm .mktoFormRow[data-zi-managed="true"] {
    height: 0;
    max-height: 0;
    transition: max-height 200ms ease-out;
    overflow: hidden;
}

.mktoForm .mktoFormRow[data-zi-managed="true"][data-zi-empty="true"] {
    height: auto;
    max-height: 200px;
    transition: max-height 200ms ease-in;
}

.mktoForm .mktoFormRow[data-zi-managed][data-mkto-error-ready] {
    overflow: visible;
}

.mktoForm .mktoFormRow[data-zi-field-enriched="true"] {
    display: none;
}

.mktoForm .mktoFormRow[data-zi-field-enriched="false"] {
    display: block;
}

***

add sciprts at the end of body in this order
 <script id="teknklFormsPlus-Tag-0.2.3" src="https://pages.conviva.com/rs/138-XJA-134/images/teknkl-formsplus-tag-0.2.3.js"></script>
    <script id="teknklZoomInfo-JS-1.0.1" src="https://pages.conviva.com/rs/138-XJA-134/images/teknkl-zoominfo-smartreveal-1.0.1.js"></script>

**

on landing page meta tage need to have this

<script>
    (function() {
        window._zi = {
            formId: 'bc8d6d19-8d38-48fc-aa53-7caf64edc9c8',
            formLoadTimeout: 4000,
            development: true
        };
        var zi = document.createElement('script');
        zi.type = 'text/javascript';
        zi.async = true;
        zi.src = 'https://ws-assets.zoominfo.com/formcomplete.js';
        var s = document.getElementsByTagName('script')[0];
        s.parentNode.insertBefore(zi, s);
    })();
</script>
