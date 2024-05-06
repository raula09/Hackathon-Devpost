function filterProductsByPrice(minPrice, maxPrice) {
    const products = document.querySelectorAll('.swiper-slide');
    products.forEach(product => {
        const priceElement = product.querySelector('.tshirtxt3');
        if (priceElement) {
            const price = parseInt(priceElement.textContent.replace(' DC', ''));
            if (price >= minPrice && price <= maxPrice) {
                product.style.display = 'flex';
            } else {
                product.style.display = 'none';
            }
        }
    });
}


document.getElementById('filterButton').addEventListener('click', function() {
    const minPrice = parseInt(document.getElementById('minPriceInput').value);
    const maxPrice = parseInt(document.getElementById('maxPriceInput').value);
    filterProductsByPrice(minPrice, maxPrice);
});

const cartNotification = document.getElementById('cartNotification');
    
    
const addToCartButtons = document.querySelectorAll('.addToCartBtn');


let cartCount = 0;


addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
        
        cartCount++;
        
        cartNotification.innerText = cartCount;
    });
});
