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

const menData = [
  {
    image:"m1",
    title:"fasttrack"
  },
  {
    image:"m2",
    title:"TITAN"
  },
  {
    image:"m3",
    title:"FOSSIL"
  },
  {
    image:"m4",
    title:"TOMMY HILFIGER"
  },
  {
    image:"m5",
    title:"ARMANI EXCHANGE"
  },
  {
    image:"m6",
    title:"DANIEL WELLINGTON"
  },
  {
    image:"m7",
    title:"KENNETH COLE"
  },
  {
    image:"m8",
    title:"TITAN"
  },
]

var menSection = document.getElementById('imagesM');

for(var i = 0;i<menData.length;i++)
{
  let temp = `<div class="product-box">
  <img src="./images/${menData[i].image}.jpg" alt="" class="product-img">
  <h2 class="product-title">${menData[i].title}</h2>
  <span class="product-price">Rs:- ${Math.round(Math.random()*10000+100)}</span>
  <i class="fas fa-shopping-cart add-cart"></i>
</div>`;
  menSection.innerHTML+=temp;
}

const womenData = [
  {
    image:"w1",
    title:"TITAN"
  },
  {
    image:"w2",
    title:"RADO"
  },
  {
    image:"w9",
    title:"SONATA"
  },
  {
    image:"w4",
    title:"GUCCI"
  },
  {
    image:"w5",
    title:"TIMEX"
  },
  {
    image:"w6",
    title:"FASTRACK"
  },
  {
    image:"w7",
    title:"BALMAIN"
  },
  {
    image:"w8",
    title:"SEIKO"
  },
]

var womenSection = document.getElementById('imagesw');

for(var i = 0;i<womenData.length;i++)
{
  let temp = `<div class="product-box">
  <img src="./images/${womenData[i].image}.jpg" alt="" class="product-img">
  <h2 class="product-title">${womenData[i].title}</h2>
  <span class="product-price">Rs:- ${Math.round(Math.random()*10000+100)}</span>
  <i class="fas fa-shopping-cart add-cart"></i>
</div>`;
  womenSection.innerHTML+=temp;
}

const kidsData = [
  {
    image:"k1",
    title:"G-SHOCK"
  },
  {
    image:"k2",
    title:"SONATA KIDS"
  },
  {
    image:"k3",
    title:"TITAN"
  },
  {
    image:"k4",
    title:"SONICX"
  },
  {
    image:"k5",
    title:"CALVIN KLEIN"
  },
  {
    image:"k6",
    title:"LACOSTE"
  },
  {
    image:"k7",
    title:"DIGITAL APPLE"
  },
  {
    image:"k8",
    title:"FOSSIL"
  },
]

var kidsSection = document.getElementById('imagesk');

let extension = "jpeg";
for(var i = 0;i<womenData.length;i++)
{
  if(i==6||i==7)
  {
    extension = "jpg";
  }
  let temp = `<div class="product-box">
  <img src="./images/${kidsData[i].image}.${extension}" alt="" class="product-img">
  <h2 class="product-title">${kidsData[i].title}</h2>
  <span class="product-price">Rs:- ${Math.round(Math.random()*10000+100)}</span>
  <i class="fas fa-shopping-cart add-cart"></i>
</div>`;
  kidsSection.innerHTML+=temp;
}

const wallData = [
  {
    image:"c1",
    title:"CLARKE"
  },
  {
    image:"c2",
    title:"MINERVA"
  },
  {
    image:"c3",
    title:"AUSTERE"
  },
  {
    image:"c4",
    title:"CASABLANCA"
  },
  {
    image:"c5",
    title:"CORSICA"
  },
  {
    image:"c6",
    title:"SENSU"
  },
  {
    image:"c7",
    title:"QUARTZ"
  },
  {
    image:"c8",
    title:" MONT BLANC"
  },
]

var wallSection = document.getElementById('imagesc');

extension = "jpeg";
for(var i = 0;i<womenData.length;i++)
{
  let temp = `<div class="product-box">
  <img src="./images/${wallData[i].image}.${extension}" alt="" class="product-img">
  <h2 class="product-title">${wallData[i].title}</h2>
  <span class="product-price">Rs:- ${Math.round(Math.random()*10000+100)}</span>
  <i class="fas fa-shopping-cart add-cart"></i>
</div>`;
  wallSection.innerHTML+=temp;
}
