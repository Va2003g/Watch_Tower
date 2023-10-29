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
  console.log(event);
  userName = event.target[0].value;
  event.preventDefault();
  updateName(userName);
  hidelogin();
  displayLogout();
}

window.addEventListener("load", function () {
  let name = sessionStorage.getItem("UserName");
  if (name) {
    loginicon.innerText = name;
    displayLogout();
  } else {
    loginicon.innerText = "Login";
  }
});

function updateName(name) {

  loginicon.innerText = name;
  if(name!="Login")
  {
    sessionStorage.setItem("UserName", name);
    showInCart();
  }
  else
  {
    sessionStorage.clear();
  }
}

let logout = document.querySelector(".logout");

function displayLogout() {
  if (loginicon.innerText != "Login") {
    logout.style.visibility = "visible";
  }
  else
  {
    logout.style.visibility = "hidden";
  }
}

logout.addEventListener('click',()=>{
  loginicon.innerText = "Login";
  sessionStorage.clear();
  logout.style.visibility = "hidden";
  const cartContent = document.querySelector(".cart-content");
  let child = document.querySelectorAll(".cart-content > div");
  child.forEach((c)=>{cartContent.removeChild(c)});
  updateTotal();
});

