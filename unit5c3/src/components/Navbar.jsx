import {Link} from "react-router-dom";
import "./Navbar.css"
import { AuthContext } from "../conexts/AuthContext";
import { useContext } from "react";

export const Navbar = () => {
const {isAuth,handleAuth}=useContext(AuthContext);

  return (
    <div className="navbar">
      <Link className="nav-home" to="/">
        Home
      </Link>
      <Link className="nav-list" to="/employees">
        Employee List
      </Link>
      <Link className="nav-admin" to="/admin">
        Admin
      </Link>
      {/* Show Either logout or login based on auth context. DO NOT show both */}
      {isAuth ?  <Link className="nav-logout" to="/logout">
        Logout
      </Link> : <Link className="nav-login" to="/login">
        Login
      </Link> }
     

     
    </div>
  );
};
