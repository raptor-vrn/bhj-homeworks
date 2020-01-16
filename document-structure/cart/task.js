let controlsIncrease = Array.from(document.getElementsByClassName('product__quantity-control_inc'));

function increaseQuantity() {
    let quantity = this.previousElementSibling.textContent;
    quantity = Number(quantity) + 1;
    this.previousElementSibling.textContent = `${quantity}`;
}

for (let incrcntr of controlsIncrease) {
    incrcntr.addEventListener('click', increaseQuantity);
}

let controlsDecrease = Array.from(document.getElementsByClassName('product__quantity-control_dec'));

function decreaseQuantity() {
    let quantity = this.nextElementSibling.textContent;
    quantity = Number(quantity);

    if (quantity > 1) {
        quantity = quantity - 1;
    }

    this.nextElementSibling.textContent = `${quantity}`;
}

for (let decrcntr of controlsDecrease) {
    decrcntr.addEventListener('click', decreaseQuantity);
}

let productAddButtons = Array.from(document.getElementsByClassName('product__add'));

function addToCart() {
    let cartProductHTML = document.createElement('div');
    cartProductHTML.classList.add("cart__product");
    cartProductHTML.dataset.id = this.closest('.product').dataset.id;

    let clonedImg = document.createElement('img');
    clonedImg.classList.add("cart__product-image");
    clonedImg.src = this.closest('.product__controls').previousElementSibling.src;

    cartProductHTML.insertAdjacentHTML("afterBegin", clonedImg.outerHTML);

    let countDiv = document.createElement('div');
    countDiv.classList.add("cart__product-count");
    countDiv.textContent = this.previousElementSibling.getElementsByClassName("product__quantity-value")[0].textContent;

    cartProductHTML.insertAdjacentHTML("beforeEnd", countDiv.outerHTML);

    let cart = document.getElementsByClassName('cart__products')[0];
    let cartContents = Array.from(cart.getElementsByClassName("cart__product"));
    let cartOverlap = -1;

    for (let i = 0; i < cartContents.length; i++) {
        if (cartContents[i].dataset.id == cartProductHTML.dataset.id) {
            cartOverlap = i;
        }
    }

    if (cartOverlap > -1) {
        let cartContentsCountDiv = cartContents[cartOverlap].getElementsByClassName("cart__product-count")[0];
        cartContentsCountDiv.textContent = Number(cartContentsCountDiv.textContent) + Number(countDiv.textContent);
    } else {
        cart.insertAdjacentHTML("afterBegin", cartProductHTML.outerHTML);
    }
}

for (let btn of productAddButtons) {
    btn.addEventListener('click', addToCart);
}