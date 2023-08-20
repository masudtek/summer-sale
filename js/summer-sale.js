
let totalPrice = 0;
let total = 0;
function calculateProd(data){
    const selectedProduct = document.getElementById('product');
    const itemName = data.childNodes[5].innerText;
    const p = document.createElement('p');
    p.innerText = itemName;
    p.classList.add('font-bold')
    selectedProduct.appendChild(p);

    const productPriceString = data.childNodes[7].innerText.split(' ')[0];
    const productPrice = parseFloat(productPriceString);
    totalPrice = totalPrice + productPrice;
    const displayTotalPrice = document.getElementById('total-price');
    displayTotalPrice.innerText = totalPrice;
    
    
    if(totalPrice >= 200){
        document.getElementById('apply-btn').removeAttribute('disabled')
    }

    total = total + productPrice;
    let displayTotal = document.getElementById('total');
    displayTotal.innerText = total;


}

function applyCoupon(){
    const inputElement = document.getElementById('input-coupon');
    const inputValue = inputElement.value;
    if(inputValue === "SELL200"){
        const discount = totalPrice * 0.2
        const displayDiscount = document.getElementById('discount');
        displayDiscount.innerText = discount;
        total = totalPrice - discount;
        let displayTotal = document.getElementById('total');
        displayTotal.innerText = total;
    }

}
