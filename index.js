var hamburger = document.getElementById('hamburger');
var res_nav = document.getElementById('res-nav');
var back = document.getElementById("back");
var login = document.getElementsByClassName("loginContainer");
var body = document.getElementsByTagName("body");
var loginicon = document.getElementById("loginicon");
var cancel = document.getElementById("imagecross");

function showlogin()
{
    // login[0].style.visibility="visible";
    login[0].style.transform="scaleY(1)";
    // body[0].style.opacity="0.5";
    
}
function hidelogin()
{
    // login[0].style.visibility="hidden";
    login[0].style.transform="scaleY(0)";
    // body[0].style.opacity="1.0";
    
}
// console.log(back,res_nav);
function showResNav(){
    res_nav.style.visibility="visible";
    
}

function hideResNav(){
    res_nav.style.visibility="hidden";
}

hamburger.addEventListener('click',showResNav);
back.addEventListener('click',hideResNav);
loginicon.addEventListener('click',showlogin);
cancel.addEventListener('click',hidelogin);