const cart = [10, 244, 99, 2, 20, 33, 250]
let finalValueWhitDiscount = 0
let valueCart = 0
let discount = 0


/*
    R$ 250,00 // 7% -> R$ 17,50
    250 * 7 -> 1750 / 100
*/

function calculateDiscont(price, discount){
    const result = price * discount / 100
    return result
}


cart.forEach(value => {
    if (value > 30) {
    const discount = calculateDiscont(value, 10)
    finalValueWhitDiscount = finalValueWhitDiscount + (value - discount)
    } else{
        finalValueWhitDiscount += value
    }
});

 cart.forEach(value => {
    valueCart += value
});

cart.forEach(value => {
    discount = valueCart - finalValueWhitDiscount
});


console.log(`O valor final da compra foi de: R$ ${valueCart.toFixed(2)}, porém você teve desconto, irá pagar apenas R$ ${finalValueWhitDiscount.toFixed(2)}, você economizou ${discount.toFixed(2)}`)

