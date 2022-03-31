import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

export const Cart = () => {
  const { cart } =
    useContext(CartContext);

  if (cart.length === 0) {
    return (
      <div className="container my-4">
        <h2>Tu carrito está vacío</h2>
        <Link to="/" className="btn bg-dark text-light">
          Volver
        </Link>
      </div>
    );
  }
};
