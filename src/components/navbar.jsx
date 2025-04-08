import { NavLink, useLocation } from "react-router-dom";
import "../component-styles/navbar.css";
import pulsePng from "../assets/HeartwithPulse.png";

export default function Navbar() {
  const location = useLocation();

  return (
    <div className="nav">
      <div className="logo-text">
        <img src={pulsePng} alt="Pulse Logo" />
        <h3>Healthcare</h3>
      </div>
      <div className="main-links">
        <NavLink to="/" className={location.pathname === "/" ? "active-link" : ""}>Home</NavLink>
        <NavLink to="/about" className={location.pathname === "/about" ? "active-link" : ""}>About</NavLink>
        <NavLink to="/services" className={location.pathname === "/services" ? "active-link" : ""}>Services</NavLink>
        <NavLink to="/contact" className={location.pathname === "/contact" ? "active-link" : ""}>Contact</NavLink>
      </div>
      <div className="end-buttons">
        <button className="sign-up"><NavLink to="/signup">Sign Up</NavLink></button>
        <button className="login"><NavLink to="/login">Login</NavLink></button>
      </div>
    </div>
  );
}
