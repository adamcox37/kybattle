// FIXED HEADER ON SCROLL //
// Scroll execution
window.onscroll = function() {scroll()};

// Get header
var header = document.getElementById("fixedHeader");

// Get offset position
var sticky = header.offsetTop;

// Add sticky class
function scroll() {
    if(window.pageYOffset > sticky) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
}