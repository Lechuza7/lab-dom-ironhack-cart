// ITERATION 1

function updateSubtotal(product) {
  /*
  const price = product.querySelector('.price span')
  const quantity = product.querySelector('.quantity input')
  const total = price.innerText *  quantity.value
  const subtotal = product.querySelector('.subtotal span')
 
  subtotal.innerText = parseFloat(total)*/

  console.log('Calculating subtotal, yey!');

  const price = parseFloat(product.querySelector('.price span').innerText);
  const quantity = parseInt(product.querySelector('.quantity input').value);
  const subtotal = price * quantity;
  product.querySelector('.subtotal span').innerText.toFixed(2);
}

function calculateAll() {
  
  const singleProduct = document.querySelectorAll('.product');

  for (product of singleProduct) {
    updateSubtotal(product);
  }

  const total = document.getElementById("calculate")
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
