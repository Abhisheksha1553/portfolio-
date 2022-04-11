$('.sldr').slick({
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows:false,
            }
        }
    ]
});

var typed = new Typed('.type', {
    strings: ['Developer.', 'Programmer.', 'Designer.', 'Photographer.'],
    typeSpeed: 100,
    backSpeed: 70,
    loop: true,
});

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("mains").style.width = "290px";
    document.getElementById("close").style.display ="block";
    document.getElementById("openMenu").style.display ="none";
    document.getElementById("menuTiles").style.width = "250px";

  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("mains").style.width= "0";
    document.getElementById("openMenu").style.display ="block";
    document.getElementById("close").style.display ="none";
    document.getElementById("menuTiles").style.width = "80px";

  }