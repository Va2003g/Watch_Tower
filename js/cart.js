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
  if (name != undefined && name !== "Login") {
    chosenItemsArray = JSON.parse(localStorage.getItem(name));
    showInCart();
    updateTotal();
  }
});

const add_cart_btn = document.querySelectorAll(".add-cart");

for (let a of add_cart_btn) {
  a.addEventListener("click", addInCart);
}

function search(id) {
  for (obj of chosenItemsArray) {
    if (obj.itemImg.includes(id)) {
      increaseQuantity(id);
      return true;
    }
  }
  return false;
}

function increaseQuantity(id)
{
  let cartData = document.querySelector('.cart-content');
  let targetBox = cartData.querySelector(`#${id}`);
  targetBox.querySelector("#plus").click();
}

function addInCart(event) {
  let userLoginName = sessionStorage.getItem("UserName");
  if (userLoginName == "Login" || userLoginName == undefined) {
    alert("Kindly Login first!!");
    return;
  }

  let target = event.target.parentElement;
  // console.log(target);
  let title = target.querySelector(".product-title").innerHTML;
  let price = target.querySelector(".product-price").innerHTML;
  let imgSrc = target.querySelector(".product-img").src;

  if (search(target.id)) {
    return;
  }
  // console.log(title, price, imgSrc);

  let chosenItems = {
    itemName: title,
    itemPrice: price,
    itemImg: imgSrc,
  };

  console.log(chosenItems);

  chosenItemsArray.push(chosenItems);

  if (userLoginName !== "Login" && userLoginName != undefined) {
    localStorage.setItem(userLoginName, JSON.stringify(chosenItemsArray));
  }

  cartIcon.click();
  // showInCart();
  let cartBoxElement = CartBoxComponent(
    chosenItems.itemName,
    chosenItems.itemPrice,
    chosenItems.itemImg
  );
  let newNode = document.createElement("div");
  newNode.innerHTML = cartBoxElement;
  const cartContent = cart.querySelector(".cart-content");
  cartContent.appendChild(newNode);

  update();
  updateTotal();
}

function showInCart() {
  let userLoginName = sessionStorage.getItem("UserName");

  if (localStorage.getItem(userLoginName) == undefined) {
    return;
  }
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
  updateTotal();
}

function CartBoxComponent(title, price, imgSrc) {
  
  let id = imgSrc.toString().split('/');
  id = id[id.length-1].split('.');
  id = id[0];
  return `
      <div class="cart-box" id=${id}>
          <img src=${imgSrc} alt="" class="cart-img">
          <div class="detail-box">
              <div class="cart-product-title">${title}</div>
              <div class="cart-price">${price}</div>
              <input type="number" value=1 class="cart-quantity">
              <button id="plus" class="quantityButtons cart-quantity">+</button>
              <button id="minus" class="quantityButtons cart-quantity">-</button>
          </div>
          <!-- REMOVE CART  -->
          <svg class="cart-remove" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><style>svg{fill:#e71313}</style><path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"/></svg>
        </div>`;
}

function increaseQuantityByClick(event) {
  console.log(event.target.parentElement.querySelector(".cart-quantity").value);
  console.log(event.target.id);
  let inputField = event.target.parentElement.querySelector(".cart-quantity");
  let btnId = event.target.id;

  if (btnId == "plus") {
    inputField.value= parseInt(inputField.value) + 1;
  } else if (btnId == "minus" && inputField.value > 0) {
    inputField.value -= 1;
  }
  updateTotal();
}
function update() {
  let deleteItem = document.querySelectorAll(".cart-remove");
  deleteItem.forEach((btn) => {
    btn.addEventListener("click", removeFromCart);
  });

  let qunatityBtn = document.querySelectorAll(".quantityButtons");
  qunatityBtn.forEach((btn) => {
    btn.addEventListener("click", increaseQuantityByClick);
  });
}

function updateTotal() {
  let cartBoxes = document.querySelectorAll(".cart-box");
  const totalElement = cart.querySelector(".total-price");
  let total = 0;
  cartBoxes.forEach((cartBox) => {
    let priceElement = cartBox.querySelector(".cart-price");
    let price = parseFloat(priceElement.innerHTML.replace("₹", ""));
    let quantity = cartBox.querySelector(".cart-quantity").value;
    total += price * quantity;
  });

  total = total.toFixed(2);

  totalElement.innerHTML = "₹" + total;
}

function removeFromLocalStorage(data) {
  data = data.querySelector(".cart-img").src.toString();
  for (let i in chosenItemsArray) {
    if (chosenItemsArray[i].itemImg === data) chosenItemsArray.splice(i, 1);
    break;
  }

  let userLoginName = sessionStorage.getItem("UserName");
  if (userLoginName !== "Login" && userLoginName != undefined) {
    localStorage.setItem(userLoginName, JSON.stringify(chosenItemsArray));
  }
}

function removeFromCart(event) {
  let dataToBeRemoved = event.target.parentElement.parentElement;
  dataToBeRemoved.remove();
  updateTotal();
  removeFromLocalStorage(dataToBeRemoved);
}

let buybtn = document.querySelector(".btn-buy");

buybtn.addEventListener("click", () => {
  if (chosenItemsArray.length > 0) {
    alert("Your order is on the way.");
  } else {
    alert("Your cart is empty!!");
  }
});
