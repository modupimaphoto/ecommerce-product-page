import { Link, Outlet } from "react-router-dom";
import { useState, useEffect } from "react";

import logo from "./assets/logo.svg";
import image_avatar from "./assets/image_avatar.png";
import icon_cart from "./assets/icon_cart.svg";
import icon_menu from "./assets/icon_menu.svg";
import icon_close from "./assets/icon_close.svg";

import "./assets/css/Header.css";

const Header = () => {
  const [cart, setCart] = useState([]);
  const [isCartEmpty, setIsCartEmpty] = useState(false);

  const handleOpenMenu = () => {
    const menu = document.querySelector(".navbar");
    menu.classList.remove("active-navbar");
  };
  const handleCloseMenu = () => {
    const menu = document.querySelector(".navbar");
    menu.classList.add("active-navbar");
  };

  useEffect(() => {
    if(cart.length === 0){
      setIsCartEmpty(true);
    }

    const cart_icon = document.getElementById("cart");
    const cart_wrapper = document.getElementById("cart-wrapper");

    const profile = document.getElementById("profile");
    const profile_wrapper = document.getElementById("profile-wrapper");
    let delay;

    // Cart Mouse Effects.
    cart_icon.addEventListener("mouseenter", () => {
      cart_wrapper.classList.remove("d-none");
      profile_wrapper.classList.add("d-none");
      clearTimeout(delay);
    });
    cart_icon.addEventListener("mouseleave", () => {
        delay = setTimeout(() => {
          cart_wrapper.classList.add("d-none");
        }, 200);
    });

    // Cart Wrapper Mouse Effects.
    cart_wrapper.addEventListener("mouseenter", () => {
      cart_wrapper.classList.remove("d-none");
      clearTimeout(delay);
    });
    cart_wrapper.addEventListener("mouseleave", () => {
      cart_wrapper.classList.add("d-none");
    });

    // Profile Mouse Effects.
    profile.addEventListener("mouseenter", () => {
      profile_wrapper.classList.remove("d-none");
      cart_wrapper.classList.add("d-none");
      clearTimeout(delay);
    });
    profile.addEventListener("mouseleave", () => {
        delay = setTimeout(() => {
          profile_wrapper.classList.add("d-none");
        }, 200);
    });

    // Profile Wrapper Mouse Effects.
    profile_wrapper.addEventListener("mouseenter", () => {
      profile_wrapper.classList.remove("d-none");
      clearTimeout(delay);
    });
    profile_wrapper.addEventListener("mouseleave", () => {
      profile_wrapper.classList.add("d-none");
    });

    return () => {
      // Removing Cart Mouse Effects.
      cart_icon.removeEventListener("mouseenter", () => {
        cart_wrapper.classList.remove("d-none");
        clearTimeout(delay);
      });
      cart_icon.removeEventListener("mouseleave", () => {
        cart_wrapper.classList.add("d-none");
        clearTimeout(delay);
      });

      // Removing Cart Wrapper Mouse Effects.
      cart_wrapper.removeEventListener("mouseenter", () => {
        cart_wrapper.classList.remove("d-none");
        clearTimeout(delay);
      });
      cart_wrapper.removeEventListener("mouseleave", () => {
        cart_wrapper.classList.add("d-none");
      });
    };

  },[isCartEmpty])

  return(
  <>
    <header className="container p-2 p-md-3">
      <div className="d-flex justify-content-between">
        <div className="p-2">
          <img src={ icon_menu } alt="Menu" onClick={ handleOpenMenu }
          className="img-fluid d-inline d-lg-none menu"/>

          <Link to="/">
            <img src={ logo } alt="Logo" className="img-fluid mx-3 mx-lg-0"/>
          </Link>
        </div>
        <div className="navbar active-navbar">
          <img src={ icon_close } alt="Close Icon" onClick={ handleCloseMenu }
            className="img-fluid d-inline d-lg-none close"/>

          <ul className="d-block d-inline-block">
            <li className="d-block d-md-inline-block">
              <Link to="/collections" className="text-decoration-none">Collections</Link>
            </li>
            <li className="d-block d-md-inline-block">
              <Link to="/men" className="text-decoration-none">Men</Link>
            </li>
            <li className="d-block d-md-inline-block">
              <Link to="/women" className="text-decoration-none">Women</Link>
            </li>
            <li className="d-block d-md-inline-block">
              <Link to="/about" className="text-decoration-none">About</Link>
            </li>
            <li className="d-block d-md-inline-block">
              <Link to="/contact" className="text-decoration-none">Contact</Link>
            </li>
          </ul>
        </div>
        <div className="right-wrapper">
          <ul className="d-inline">
            <li className="d-inline-block">
              <img src={ icon_cart } alt="Cart"
                className="img-fluid cursor-pointer cart" id="cart"/>

              <div className="cart-wrappper d-none shadow" id="cart-wrapper">
                <div className="cart-title">
                  Cart
                </div>
                <div className="cart-content cart-empty">
                  { (isCartEmpty) ? "Your cart is empty." : ""}
                </div>
              </div>
            </li>
            <li className="d-inline-block">
              <img src={ image_avatar } id="profile"
                alt="Profile Image" className="w-50 proile-image"/>

                <div className="profile-wrapper d-none shadow p-3" id="profile-wrapper">
                  <p className="p-2">Account Details</p>
                  <p className="p-2">Personal Information</p>
                  <p className="p-2">Track Orders</p>
                  <p className="p-2">Signout</p>
                </div>
            </li>
          </ul>
        </div>
      </div>
      <hr />
    </header>
    <Outlet />
  </>
  );
}

export default Header;
