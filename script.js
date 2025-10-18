let cartCount = 0;

const cartCounter = document.getElementById("cart-count");
const addToCartButtons = document.querySelectorAll(".add-to-cart");

addToCartButtons.forEach(button => {
  button.addEventListener("click", () => {
    cartCount++;
    cartCounter.textContent = cartCount;
    alert("Item added to cart!");
  });
});

document.getElementById("shop-now").addEventListener("click", () => {
  window.scrollTo({
    top: document.querySelector(".products").offsetTop,
    behavior: "smooth"
  });
});
