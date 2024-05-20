const calculatePrice = (cart) => {
    let totalPrice = 0;
    cart.products.map((x)=>{
        if(isNaN(x.quantity)){
            x.quantity = 1
        }
        totalPrice += x.price * x.quantity;
    })
    return totalPrice;
}
const checkIfProductExist = (id, cart, quantity) => {
    let has = false;
    cart.products.map(x=>{
        
        if(isNaN(x.quantity)){
            x.quantity = parseFloat(quantity)>0?parseFloat(quantity):1
        }
        if(x.id === id){
            x.quantity += parseFloat(quantity)>0?parseFloat(quantity):1
            has = true
        }
        
    })
    return {Cart: cart, bool: has}
}
export {calculatePrice, checkIfProductExist}
