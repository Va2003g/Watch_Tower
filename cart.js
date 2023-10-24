const cartIcon = document.querySelector("#cart-icon");
const cart = document.querySelector(".cart");
const closeCart = document.querySelector("#cart-close");
let chosenItemsArray = [];

cartIcon.addEventListener("click", () => {
  // console.log("clicked");
  cart.classList.add("active");
});

closeCart.addEventListener("click", () => {
  cart.classList.remove("active");
});

window.addEventListener("load", function () {
  let name = sessionStorage.getItem("UserName");
  if (name!=undefined && name!=="Login") {
    chosenItemsArray = JSON.parse(localStorage.getItem(name));
    showInCart();
  }
});

const add_cart_btn = document.querySelectorAll(".add-cart");

for (let a of add_cart_btn) {
  a.addEventListener("click", addInCart);
}


function addInCart(event) {
  let target = event.target.parentElement;
  // console.log(target);
  let title = target.querySelector(".product-title").innerHTML;
  let price = target.querySelector(".product-price").innerHTML;
  let imgSrc = target.querySelector(".product-img").src;

  // console.log(title, price, imgSrc);

  let chosenItems = {
    itemName: title,
    itemPrice: price,
    itemImg: imgSrc,
  };

  console.log(chosenItems);

  chosenItemsArray.push(chosenItems);

  let userLoginName = sessionStorage.getItem("UserName");
  if (userLoginName !== "Login" && userLoginName != undefined) {
   localStorage.setItem(userLoginName, JSON.stringify(chosenItemsArray));
  }

  cartIcon.click();
  // showInCart();
  let cartBoxElement = CartBoxComponent(
    chosenItems.itemName,
    chosenItems.itemPrice,
    chosenItems.itemImg,
    );
  let newNode = document.createElement("div");
    newNode.innerHTML = cartBoxElement;
    const cartContent = cart.querySelector(".cart-content");
    cartContent.appendChild(newNode);

    update();
}

function check(chosenItems, chosenItemsArray) {
  for (let a in chosenItemsArray) {
    if (JSON.stringify(chosenItemsArray[a]) === JSON.stringify(chosenItems))
      return a;
  }
  return -1;
}

function showInCart() {
  let userLoginName = sessionStorage.getItem("UserName");
  
  let data = JSON.parse(localStorage.getItem(userLoginName));
  
  for (let obj of data) {
    let cartBoxElement = CartBoxComponent(
      obj.itemName,
      obj.itemPrice,
      obj.itemImg,
      );
      
    let newNode = document.createElement("div");
    newNode.innerHTML = cartBoxElement;
    const cartContent = cart.querySelector(".cart-content");
    cartContent.appendChild(newNode);
  }
  update();
}

function CartBoxComponent(title, price, imgSrc) {
  return `
      <div class="cart-box">
          <img src=${imgSrc} alt="" class="cart-img">
          <div class="detail-box">
              <div class="cart-product-title">${title}</div>
              <div class="cart-price">${price}</div>
              <input type="number" value=1 class="cart-quantity">
              <button class="cart-quantity">+</button>
              <button class="quantityButtons cart-quantity">-</button>
          </div>
          <!-- REMOVE CART  -->
          <svg class="cart-remove" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><style>svg{fill:#e71313}</style><path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"/></svg>
        </div>`;
}



function update()
{
  let deleteItem = document.querySelectorAll('.cart-remove');
  deleteItem.forEach((btn)=>{btn.addEventListener('click',removeFromCart)});
}

function removeFromLocalStorage(data)
{
  data = data.querySelector(".cart-img").src.toString();
  for(let i in chosenItemsArray)
  {
    if(chosenItemsArray[i].itemImg === data)
      chosenItemsArray.splice(i,1);
  }

  let userLoginName = sessionStorage.getItem("UserName");
  if (userLoginName !== "Login" && userLoginName != undefined) {
   localStorage.setItem(userLoginName, JSON.stringify(chosenItemsArray));
  }
}

function removeFromCart(event)
{
  let dataToBeRemoved = event.target.parentElement.parentElement;
  dataToBeRemoved.remove();
  removeFromLocalStorage(dataToBeRemoved);
}