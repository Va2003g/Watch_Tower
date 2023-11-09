var login = document.getElementsByClassName("loginContainer");
var body = document.getElementsByTagName("body");
var loginIcon = document.getElementById("loginIcon");
var cancel = document.getElementById("imageCross");
var heroSection = document.getElementsByClassName("hero-section");
function showLogin() {
  login[0].style.transform = "scaleY(1)";
}

function hideLogin() {
  login[0].style.transform = "scaleY(0)";
}

function toTop()
{
  heroSection[0].scrollIntoView();
}


loginIcon.addEventListener("click", showLogin);
cancel.addEventListener("click", hideLogin);

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
  hideLogin();
  displayLogout();
}

window.addEventListener("load", function () {
  let name = sessionStorage.getItem("UserName");
  if (name) {
    loginIcon.innerText = name;
    displayLogout();
  } else {
    loginIcon.innerText = "Login";
  }
});

function updateName(name) {

  loginIcon.innerText = name;
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
  if (loginIcon.innerText != "Login") {
    logout.style.visibility = "visible";
  }
  else
  {
    logout.style.visibility = "hidden";
  }
}

logout.addEventListener('click',()=>{
  loginIcon.innerText = "Login";
  sessionStorage.clear();
  logout.style.visibility = "hidden";
  const cartContent = document.querySelector(".cart-content");
  let child = document.querySelectorAll(".cart-content > div");
  child.forEach((c)=>{cartContent.removeChild(c)});
  updateTotal();
});
