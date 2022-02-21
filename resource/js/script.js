//mixitUp

var mixer = mixitup('.grid-portfolio-container');

//scrollify

 $(function() {
          $.scrollify({
            section : ".scrollify",
            setHeights: false,
            updateHash: false,
            scrollSpeed: 1000,
     });
});

//Hamburger Menu

function openMenu() {
    
    document.getElementById('navbar').style.height = "100%";
}
function closeMenu(){
    document.getElementById('navbar').style.height = "0%";
}

// Smooth Scroll

$('.menu-item ul li a, .scroll-down a').on('click', function(){
    $('html, body').animate({
        scrollTop: $($.attr(this,'href')).offset().top
    }, 1000);
    
    return false;
});