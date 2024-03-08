
function searchProducts() {

  var input = document.getElementById('searchInput').value.toLowerCase();
  var products = document.querySelectorAll('.product-card');

 
  products.forEach(function(product) {
      var productName = product.querySelector('h3').textContent.toLowerCase();
      if (productName.includes(input)) {
          product.style.display = 'block';
      } else {
          product.style.display = 'none';
      }
  });
}
document.getElementById('searchInput').addEventListener('input', searchProducts);





const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    nav.classList.toggle('active');
});
