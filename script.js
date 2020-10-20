// Modal Image Gallery
function onClick(element) {
  document.getElementById("img01").src = element.src;
  document.getElementById("modal01").style.display = "block";
  var captionText = document.getElementById("caption");
  captionText.innerHTML = element.alt;
}

// Change style of navbar on scroll
window.onscroll = function() {myFunction()};
function myFunction() {
    var navbar = document.getElementById("myNavbar");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        navbar.className = "w3-bar " + " w3-card" + " w3-animate-top" + " w3-white";
    } else {
        navbar.className = navbar.className.replace(" w3-card w3-animate-top w3-white", "");
    }
}

// Used to toggle the menu on small screens when clicking on the menu button
function toggleFunction() {
    var x = document.getElementById("navDemo");
    if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
    } else {
        x.className = x.className.replace(" w3-show", "");
    }
}

$(function() {
  $('.chart').easyPieChart({
    // The color of the curcular bar. You can pass either a css valid color string like rgb, rgba hex or string colors. But you can also pass a function that accepts the current percentage as a value to return a dynamically generated color.
    barColor: '#ef1e25',
    // The color of the track for the bar, false to disable rendering.
    trackColor: '#f2f2f2',
    // The color of the scale lines, false to disable rendering.
    scaleColor: '#dfe0e0',
    // Defines how the ending of the bar line looks like. Possible values are: butt, round and square.
    lineCap: 'round',
    // Width of the bar line in px.
    lineWidth: 3,
    // Size of the pie chart in px. It will always be a square.
    size: 110,
    // Time in milliseconds for a eased animation of the bar growing, or false to deactivate.
    animate: 1000,
    // Callback function that is called at the start of any animation (only if animate is not false).
    onStart: $.noop,
    // Callback function that is called at the end of any animation (only if animate is not false).
    onStop: $.noop
  });
  $('.updatePieCharts').on('click', function(e) {
    e.preventDefault();
    var newValue = Math.floor(100 * Math.random());
    $('.chart').data('easyPieChart').update(newValue);
    $('span', $('.chart')).text(newValue);
  });
});
