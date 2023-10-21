// var hamburger = document.getElementById('hamburger');
var res_nav = document.getElementById("res-nav");
var back = document.getElementById("back");
var login = document.getElementsByClassName("loginContainer");
var body = document.getElementsByTagName("body");
var loginicon = document.getElementById("loginicon");
var cancel = document.getElementById("imagecross");

function showlogin() {
  login[0].style.transform = "scaleY(1)";
}

function hidelogin() {
  login[0].style.transform = "scaleY(0)";
}
// console.log(back,res_nav);
function showResNav() {
  res_nav.style.visibility = "visible";
}

function hideResNav() {
  res_nav.style.visibility = "hidden";
}

// hamburger.addEventListener('click',showResNav);
// back.addEventListener('click',hideResNav);
loginicon.addEventListener("click", showlogin);
cancel.addEventListener("click", hidelogin);

var instagram = document.querySelector(".insta");
instagram.addEventListener("click", () => {
  // window.location.href="https://www.instagram.com/",'_blank';
  window.open("https://www.instagram.com/", "_blank");
});
var facebook = document.querySelector(".face");
facebook.addEventListener("click", () => {
  // window.location.href="https://www.instagram.com/",'_blank';
  window.open("https://www.facebook.com/", "_blank");
});
var twitter = document.querySelector(".x");
twitter.addEventListener("click", () => {
  // window.location.href="https://www.instagram.com/",'_blank';
  window.open("https://www.x.com/", "_blank");
});

var men = document.querySelector("#men");
function menWatches() {
  men.scrollIntoView();
}

var userName;
function userLogin(event) {
  userName = event.target[0].value;
  event.preventDefault();
  updateName(userName);
  hidelogin();
}

window.addEventListener("load", function () {
  let name = sessionStorage.getItem("UserName");
  if(name)
  {
    loginicon.innerText = name;
  }
  else{
    loginicon.innerText = "Login";
  }
});

function updateName(name) 
{
  loginicon.innerText = name;
  sessionStorage.setItem("UserName", name);
}
