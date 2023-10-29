let closeSearch = document.getElementById("imageCrossSearch");
let result = document.querySelector("#search");
let inputField = document.querySelector(".search-bar");
let openSearch = document.getElementsByClassName("openSearch");

const allData = [...menData, ...womenData, ...kidsData, ...wallData];
let resultWindowtemp = document.querySelector(".resultList");

closeSearch.addEventListener("click", () => {
  result.style.transform = "scaleY(0)";
});

openSearch[0].addEventListener("click", () => {
  result.style.transform = "scaleY(1)";
});

let searchData;
inputField.addEventListener("input", () => {
  if (inputField.value == "") {
    resultWindowtemp.innerHTML = "";
    return;
  }
  searchData = allData.filter(
    (obj) =>
      obj.title.toLowerCase().includes(inputField.value.toLowerCase()) == true
  );
  showOnWindow(searchData);
});

function createItem(img, title) {
  let category;

  if (img.includes("m")) {
    category = "Men's Watches";
  } else if (img.includes("w")) {
    category = "Women's Watches";
  } else if (img.includes("k")) {
    category = "Kids' Watches";
  } else if (img.includes("c")) {
    category = "Wall Clocks";
  } else {
    category = "Unknown Category";
  }
  
  var extension = "jpg";
  if((img.includes("k") && (img!= "k8" && img!="k7"))|| img.includes("c"))
  {
    extension = "jpeg";
  }
  const listItem = document.createElement("li");
  listItem.className = "searchItem";
  listItem.id = img;
  listItem.innerHTML = `
  <img src="./images/${img}.${extension}" alt="" class="imageSearch">
  <p class="title">${title}</p>
  <p class="category">${category}</p>`;
  return listItem;
}

function showOnWindow(data) {
  resultWindowtemp.innerHTML = "";
  for (obj of data) {
    let resultWindow = document.querySelector(".resultList");
    let createProduct = createItem(obj.image, obj.title);
    createProduct.addEventListener("click", moveToThatItem);
    resultWindow.appendChild(createProduct);
  }
}

function moveToThatItem(event) {
  let id = event.target.parentElement.id;
  console.log(id);
  closeSearch.click();
  var target = document.getElementById(id);
  target.scrollIntoView();
}

//Search handling
