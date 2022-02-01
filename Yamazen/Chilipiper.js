function q(a) { return function() { ChiliPiper[a].q = (ChiliPiper[a].q || []).concat([arguments]) } }
window.ChiliPiper = window.ChiliPiper || "submit scheduling showCalendar submit widget bookMeeting".split(" ").reduce(function(a, b) { a[b] = q(b); return a }, {});
ChiliPiper.scheduling("account", "router")