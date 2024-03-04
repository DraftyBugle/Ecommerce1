import React,{ useContext } from "react";
import {ProductsContext} from "../Context/ProductsContext";
import { getTotalCartPrice } from "../utils/getTotalPrice";
import { getDerivedCart } from "../utils/getDerivedCart";
function Cart (){
    const {cart} = useContext(ProductsContext);
    const deriveCart = getDerivedCart(cart);
    
    return (
        <div>
<thead>
    <tr>
        <th>Producto</th>
        <th>Cantidad</th>
        <th>Subtotla</th>
    </tr>
</thead>
<tbody>
{deriveCart.map((item)=>(
    <tr>
        
        <td>{item.name}</td>
        <td>{item.quantity}</td>
        <td>{item.totalPrice}</td>
    </tr>
))}

</tbody>
<tfoot>
<tr>
    <td> total:{getTotalCartPrice(cart)}</td>
</tr>

</tfoot>
        </div>
    )
}
export default Cart;