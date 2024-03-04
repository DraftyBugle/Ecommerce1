export const getSumCart = (cart)=>{
    const sumCart = [ ];
    cart.forEach((item) => {
        const existingItem = derivedCart.find ((dItem)=>dItem.id === item.id);
        if(existingItem){
            existingItem.quantity++;
            existingItem.totalPrice += item.price;
        }
        
    });
    return sumCart;
    }