import { thumbsActiveFunc } from "./single-product/thumbsActive.js";
import { singleThumbs } from "./glide.js";
import  zoomFunc  from "./single-product/zoom.js";
import  colorsFunc  from "./single-product/colors.js";
import  valueFunc  from "./single-product/values.js";
import  tabsFunc  from "./single-product/tabs.js";
import  commentFunc  from "./single-product/comment.js";



const productId = localStorage.getItem("productId")? JSON.parse(localStorage.getItem("productId"))
: localStorage.setItem("productId",JSON.stringify(1));

const products =  localStorage.getItem("products")? JSON.parse(localStorage.getItem("products"))
: localStorage.setItem("products",JSON.stringify([]));

const findProduct = products.find((itme) => itme.id === Number(productId));



const productTitle = document.querySelector(".product-title");
productTitle.innerHTML = findProduct.name;



const productNewPrice = document.querySelector(".new-price")
const productOldPrice = document.querySelector(".old-price")

productNewPrice.innerHTML = findProduct.price.newPrice.toFixed(2); 
productOldPrice.innerHTML = findProduct.price.oldPrice.toFixed(2); 


//* product gallery

const single_image = document.querySelector("#single-image");
single_image.src = findProduct.img.single_image

const galleryThumbs = document.querySelector(".gallery-thumbs");
let result = "";
findProduct.img.thumbs.forEach((item) => {
result += `
        <li class="glide__slide">
            <img src=${item} alt="" class="img-fluid ">
        </li>
`
});
galleryThumbs.innerHTML = result;
singleThumbs();
thumbsActiveFunc();

const productThumps = document.querySelectorAll(".product-thumb  .glide__slide img ")

productThumps[0].classList.add("active")

//! add to cart

let cart = localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart"))
: [];
const findCart = cart.find((item) => item.id === findProduct.id);
const btnAddToCart = document.getElementById("add-to-cart");
const quantityDOM = document.getElementById("quantity");
let cartItems = document.querySelector(".header-cart-count");

if (findCart) {
    btnAddToCart.setAttribute("disabled", "disabled");
  } else {
    btnAddToCart.addEventListener("click", function () {
      cart.push({ ...findProduct, quantity: Number(quantityDOM.value) });
      btnAddToCart.setAttribute("disabled", "disabled");
      localStorage.setItem("cart", JSON.stringify(cart));
      cartItems.innerHTML = cart.length;
    });
  }