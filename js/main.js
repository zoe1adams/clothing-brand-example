// COLOR SWITCHING — Index Page
const colorOptions = document.querySelectorAll(".color-options img");
const heroImage = document.querySelector(".hero-img img");

colorOptions.forEach(img => {
  img.addEventListener("click", () => {
    const selectedSrc = img.getAttribute("src");
    heroImage.setAttribute("src", selectedSrc);
  });
});

// QUANTITY CHANGE — Cart Page
const qtyInputs = document.querySelectorAll(".cart-item input[type='number']");
qtyInputs.forEach(input => {
  input.addEventListener("change", () => {
    // Later: update total price
    console.log(`Quantity changed to: ${input.value}`);
  });
});

// ADD TO CART BUTTONS (Placeholder)
const addToCartBtns = document.querySelectorAll(".add");
addToCartBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    alert("Item added to cart! (feature coming soon)");
  });
});

// Toggle nav menu (mobile)
function toggleMenu() {
  const navLinks = document.querySelector(".nav-links");
  navLinks.classList.toggle("show");
}

// Toggle light/dark mode
const toggleBtn = document.getElementById("mode-toggle");
const body = document.body;
toggleBtn.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
  toggleBtn.innerHTML = body.classList.contains("dark-mode")
    ? '<i class="fas fa-sun"></i>'
    : '<i class="fas fa-moon"></i>';
});

