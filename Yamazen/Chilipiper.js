function q(a) { return function() { ChiliPiper[a].q = (ChiliPiper[a].q || []).concat([arguments]) } }
window.ChiliPiper = window.ChiliPiper || "submit scheduling showCalendar submit widget bookMeeting".split(" ").reduce(function(a, b) { a[b] = q(b); return a }, {});
ChiliPiper.scheduling("account", "router")


// 



function q(a) { return function() { ChiliPiper[a].q = (ChiliPiper[a].q || []).concat([arguments]) } }
window.ChiliPiper = window.ChiliPiper || "submit scheduling showCalendar submit widget bookMeeting".split(" ").reduce(function(a, b) { a[b] = q(b); return a }, {});

document.addEventListener('DOMContentLoaded', () => { ChiliPiper.scheduling("yamazen", "inbound-router", { title: "Thanks! What time works best for a quick call?" }) })


///


// 

function q(a) { return function() { ChiliPiper[a].q = (ChiliPiper[a].q || []).concat([arguments]) } }
window.ChiliPiper = window.ChiliPiper || "submit scheduling showCalendar submit widget bookMeeting".split(" ").reduce(function(a, b) { a[b] = q(b); return a }, {});
ChiliPiper.scheduling("yamazen", "router", {
    map: true
})