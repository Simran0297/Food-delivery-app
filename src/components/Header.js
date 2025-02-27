import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  let [btnName, setBtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();

  return (
    <div className="flex justify-between bg-pink-100 shadow-lg mb-2 p-4  w-[100%] sticky top-0">
      <div className="bg-pink-100">
        <img className="w-30" src={LOGO_URL}></img>
      </div>
      <div className="flex items-center ">
        <ul className="flex p-4 m-4">
          <li className="px-4 bg-pink-200 m-2">
            Online Status : {onlineStatus? "✅" : "🔴"}
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
          <li className="px-4  bg-pink-200 m-2">Cart</li>
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
        </ul>
      </div>
    </div>
  );
};

export default Header;
