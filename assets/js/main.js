// import { data } from "../../data/js/data.js";

const hambuger = document.querySelector(".hambuger");
const close = document.querySelector(".close");
const navMenu = document.querySelector(".nav");
const navLinks = document.querySelectorAll(".nav__link");
const cartEl = document.querySelector(".cart");
const closeCartBtn = document.querySelector(".close__btn");
const cartItem = document.querySelector(".cart__item");
const overlay = document.querySelector(".overlay");

// Show Menu Function
const showMenu = () => {
  navMenu.style.left = "0";
};

// Open cart Items Function
const openCart = () => {
  cartItem.style.right = "0";
  overlay.style.left = "0";
};

// Close cart Items Function
const closeCart = () => {
  cartItem.style.right = "-100%";
  overlay.style.left = "-100%";
};
// Hide Menu Function
const hideMenu = () => {
  navMenu.style.left = "-100%";
};

navLinks.forEach((link) => {
  link.addEventListener("click", hideMenu);
});
// Event Listeners
hambuger.addEventListener("click", showMenu);
close.addEventListener("click", hideMenu);
cartEl.addEventListener("click", openCart);
closeCartBtn.addEventListener("click", closeCart);
overlay.addEventListener("click", closeCart);

let productHTML = "";
products.forEach((product) => {
  const { id, img, name, desc, price } = product;
  productHTML += `
  <div class="card__wrapper">
          <div class="card__image-container">
            <img src="${img}" alt="" />
            <span class="heart"><img src="assets/img/heart-1.png" alt=""></span>
          </div>
          <div class="product__info">
            <h5 class="pdt__name">${name}</h5>
            <p class="desc">${desc}</p>
            <h3 class="cost__perItem">$${price}</h3>
            <button class="add__toCart btn" data-product-id="${id}">Add to Cart</button>
          </div>
        </div>
  `;
  console.log(productHTML);
});

document.querySelector(".product__container").innerHTML = productHTML;

document.querySelectorAll(".add__toCart").forEach((button) => {
  button.addEventListener("click", () => {
    const productId = button.dataset.productId;

    let matchingItem;
    cart.forEach((cartItem) => {
      if (productId === cartItem.productId) {
        matchingItem = cartItem;
      }
    });

    if (matchingItem) {
      matchingItem.quantity += 1;
    } else {
      cart.push({
        productId,
        quantity: 1,
      });
    }

    let cartQuantity = 0;

    cart.forEach((item) => {
      cartQuantity += item.quantity;
    });
    document.querySelector(".cart__count").innerHTML = cartQuantity;
  });
});
