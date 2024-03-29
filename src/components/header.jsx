import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { auth } from "firebase/firebase.utils";
import currentUserContext from "context/current-user/current-user.context";
import { CartContext } from "provider/cart.provider";
import Logo from "assets/logo.png";
import CartIcon from "components/cart-icon";
import CartDropdown from "components/cart-dropdown";

const Header = () => {
  const currentUser = useContext(currentUserContext);
  const { hidden } = useContext(CartContext);

  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <img src={Logo} alt="Logo" className="logo" />
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          Shop
        </Link>
        <Link className="option" to="/contact-us">
          Contact
        </Link>
        {currentUser ? (
          <div className="option" onClick={() => auth.signOut()}>
            Sign Out
          </div>
        ) : (
          <Link className="option" to="/login">
            Login
          </Link>
        )}
        <CartIcon />
      </div>
      {hidden ? null : <CartDropdown />}
    </div>
  );
};

export default Header;
