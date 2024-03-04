import { useContext, useState, useEffect } from "react";
import { ProductsContext } from "../Context/ProductsContext";
import { getDerivedCart } from "../utils/getDerivedCart";
import { getTotalCartPrice } from "../utils/getTotalPrice";
import { GiShoppingBag } from "react-icons/gi";
import { IoMdCloseCircle } from "react-icons/io";
import "./CartSummary.css";

function CartSummary() {
  const { cart, clearCart,setCartIsActive } = useContext(ProductsContext);
  const deriveCart = getDerivedCart(cart);
  const [click, setClick] = useState(false);


  //active cart global
  const handleClick = () => {
    setClick(!click);
    setCartIsActive(!click);
  };

  useEffect(() => {
    // Función para controlar el scroll del fondo
    const handleScroll = (event) => {
      if (click) {
        event.preventDefault();
      }
    };

    // Agregar o quitar el evento de desplazamiento según el estado del carrito
    if (click) {
      document.body.style.overflow = "hidden";
      window.addEventListener("scroll", handleScroll);
    } else {
      document.body.style.overflow = "auto";
      window.removeEventListener("scroll", handleScroll);
    }

    // Limpia el evento de desplazamiento al desmontar el componente
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [click]);


  return (
    <div className={`container ${click ? "cart-active" : ""}`}>  
      <div onClick={handleClick}>
        <GiShoppingBag className="bag" />
      </div>
      {click && (
        <div className="lista">
          <div  onClick={handleClick} className="closeCircule" >   <   IoMdCloseCircle /> </div>
         
          <p className="carttitle">Cart</p>
          {deriveCart.map((item) => (
            <div key={item.id} className="productdata">
              <p>
                <img src={item.image} alt={item.name} className="imgproduc" />
              </p>
              <div>
                <p className="name">{item.name}</p>
                <p className="quantity">
              
                  {item.quantity}
                
                </p>
              
                <p className="priceitem">${item.totalPrice}</p>
              </div>
            </div>
          ))}
          <p className="total">Total: ${getTotalCartPrice(cart)}</p>
           <button className="buyNow">Buy Now</button>
          <button  onClick={()=> clearCart([])}  className="clearCart" >Clear Cart</button>
        </div>
      )}
    </div>
  );
}

export default CartSummary;