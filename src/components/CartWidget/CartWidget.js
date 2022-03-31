import { Link } from "react-router-dom";

import "./CartWidget.css";

const CartWidget = () => {
  return (
    <li>
      <Link to="/cart" style={{ color: "white" }}>
        <i className="fas fa-shopping-cart"></i>
      </Link>
    </li>
  );
};

export default CartWidget;
