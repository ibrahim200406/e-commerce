import headerFunc from "./header.js";
import productFunc from "./products.js"
import searchFunc from "./search.js"

//!add products to localStorage start

(async function getData() {
  const photos = await fetch("../js/data.json");
  const data = await photos.json();

  data ? localStorage.setItem("products", JSON.stringify(data)) : [];
  productFunc(data);
  searchFunc(data);
})();
//!add products to localStorage end


//! add cartItems to localstorege start

const cartItems = document.querySelector(".header-cart-count");

cartItems.innerHTML = localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")).length :
  "0";

//! add cartItems to localstorege end



//! modal dialog start
const modalDialogDOM = document.querySelector(".modal-dialog");
const btnCloseDialog = document.querySelector(".modal-dialog .modal-close");
const modalContentDOM= document.querySelector(".modal-dialog .modal-content");

btnCloseDialog.addEventListener("click", function () {
  modalDialogDOM.classList.remove("show")
});

document.addEventListener("click",(e) => {
  if(!e.composedPath().includes(modalContentDOM)){
    modalDialogDOM.classList.remove("show")
  }
})



setTimeout(() => {
  modalDialogDOM.classList.add("show")
}, 1000)

//! modal dialog end