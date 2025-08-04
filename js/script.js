// Show Scroll-to-Top Button
window.onscroll = function () {
    const scrollBtn = document.getElementById("scrollTopBtn");
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
      scrollBtn.style.display = "block";
    } else {
      scrollBtn.style.display = "none";
    }
  };
  
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  
  // Add to Cart Alerts
  document.querySelectorAll('.btn-warning').forEach(button => {
    button.addEventListener('click', () => {
      alert("Item added to cart! (UI only for now)");
    });
  });
  // Demand-supply price adjustment system
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
      // Show basic alert
      alert("Item added to cart!");
  
      // Get the product card
      const card = button.closest('.card');
      const priceElement = card.querySelector('.product-price');
      let basePrice = parseFloat(priceElement.getAttribute('data-base'));
      
      // Simulate demand (increase each time added)
      let currentPrice = parseFloat(priceElement.textContent);
      let newPrice = currentPrice + basePrice * 0.1; // Increase by 10%
      
      // Cap the price increase (optional)
      if (newPrice > basePrice * 1.5) {
        newPrice = basePrice * 1.5; // Max 50% increase
      }
  
      // Update display
      priceElement.textContent = Math.floor(newPrice);
    });
  });
// Toggle Navigation Menu
document.getElementById("navToggle").addEventListener("click", function() {
    const nav = document.querySelector(".navbar");
    nav.classList.toggle("responsive");
});
document.getElementById("sidebarToggle").addEventListener("click", function () {
  document.getElementById("sidebarContainer").classList.toggle("d-none");
});