import { useContext, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  let [btnName, setBtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();
  const { loggedInUser } = useContext(UserContext);
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="flex justify-between bg-pink-100 shadow-lg mb-2 p-4  w-[100%] sticky top-0 z-5">
      <div className="bg-pink-100">
        <img className="w-30" src={LOGO_URL}></img>
      </div>
      <div className="flex items-center ">
        <ul className="flex p-4 m-4">
          <li className="px-4 bg-pink-200 m-2">
            Online Status : {onlineStatus ? "✅" : "🔴"}
          </li>
          <li className="px-4  bg-pink-200 m-2">
            <Link to="/"> Home</Link>
          </li>
          <li className="px-4  bg-pink-200 m-2">
            <Link to="/about"> About</Link>
          </li>
          <li className="px-4  bg-pink-200 m-2">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="px-4  bg-pink-200 m-2">
            <Link to="/cart">Cart - {cartItems.length}</Link>
          </li>
          <button
            className="px-4  bg-pink-200 m-2"
            onClick={() => {
              if (
                btnName === "Logout"
                  ? setBtnName("Login")
                  : setBtnName("Logout")
              );
            }}
          >
            {" "}
            {btnName}
          </button>
          <li className="px-4 font-bold text-amber-900 m-2">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
