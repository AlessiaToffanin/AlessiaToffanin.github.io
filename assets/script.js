//live time and date
function refreshTime() {
    const timeDisplay = document.getElementById("time");
    const dateString = new Date().toLocaleString();
    const formattedString = dateString.replace(", ", " - ");
    timeDisplay.textContent = formattedString;
    }
setInterval(refreshTime, 1000);;

//header scroll
$(window).scroll(function(){
    if($(document).scrollTop() > 100) {
        $('#MyBanner').addClass('small');
        $('#MyName').addClass('small');
        $('#MySurname').addClass('small');
        $('#MyMenu').addClass('small');
        $('#MyMobileMenu').addClass('small');

        $('.changeColor').addClass('color');
        $('.changeColor2').addClass('color2');
        $('.changeColorLogo').removeClass('colorLogo');
        
    } else {
        $('#MyBanner').removeClass('small');
        $('#MyName').removeClass('small');
        $('#MySurname').removeClass('small');
        $('#MyMenu').removeClass('small');   
        $('#MyMobileMenu').removeClass('small'); 

        $('.changeColor').removeClass('color');
        $('.changeColor2').removeClass('color2');
        $('.changeColorLogo').addClass('colorLogo');
    }
});


