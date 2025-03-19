document.addEventListener('DOMContentLoaded', () => {
    const cartProductsContainer = document.querySelector('.cart__products');

    const updateCartProductCount = (productId, count) => {
        const cartProduct = cartProductsContainer.querySelector(`.cart__product[data-id="${productId}"]`);
        if (cartProduct) {
            const cartProductCount = cartProduct.querySelector('.cart__product-count');
            cartProductCount.textContent = parseInt(cartProductCount.textContent) + count;
        } else {
            addProductToCart(productId);
        }
    };

    const addProductToCart = (productId) => {
        const productElement = document.querySelector(`.product[data-id="${productId}"]`);
        const productImage = productElement.querySelector('.product__image').src;
        const productCount = parseInt(productElement.querySelector('.product__quantity-value').textContent);

        cartProductsContainer.insertAdjacentHTML('afterbegin', `
            <div class="cart__product" data-id="${productId}">
                <img class="cart__product-image" src = "${productImage}"></img>
                <div class="cart__product-count">${productCount}</div>
            </div>
        `);
    };

    document.querySelectorAll('.product__quantity-control').forEach(control => {
        control.addEventListener('click', (event) => {
            const productQuantityValue = control.parentElement.querySelector('.product__quantity-value');
            let quantity = parseInt(productQuantityValue.textContent);

            if (control.classList.contains('product__quantity-control_inc')) {
                quantity++;
            } else if (control.classList.contains('product__quantity-control_dec')) {
                quantity = Math.max(1, quantity - 1); 
            }

            productQuantityValue.textContent = quantity;
        });
    });

    document.querySelectorAll('.product__add').forEach(button => {
        button.addEventListener('click', () => {
            const productElement = button.closest('.product');
            const productId = productElement.getAttribute('data-id');
            const productQuantityValue = productElement.querySelector('.product__quantity-value');
            const quantity = parseInt(productQuantityValue.textContent);

            updateCartProductCount(productId, quantity);
        });
    });
});