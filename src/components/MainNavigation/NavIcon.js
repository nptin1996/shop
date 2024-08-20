import { NavLink } from "react-router-dom";
import { useState } from "react";
import IconNav from "../UI/IconNav";
import IconDown from "../UI/IconDown";
import classes from "./NavIcon.module.css";

// Component responsive Navbar
function NavIcon(props) {
  const [showNav, setShowNav] = useState(false);

  function handleToggle() {
    setShowNav((state) => !state);
  }

  return (
    <div className={classes.nav}>
      <div className={classes.icon} onClick={handleToggle}>
        <IconNav />
      </div>

      {showNav && (
        <ul className={classes.link} onClick={handleToggle}>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              to="/shop"
            >
              Shop
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              to="/cart"
            >
              Cart
            </NavLink>
          </li>
          {!props.isLogin && (
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? classes.active : undefined
                }
                to="/login"
              >
                Login
              </NavLink>
            </li>
          )}
          {props.isLogin && (
            <li className={classes.history}>
              <NavLink
                to="/history"
                className={({ isActive }) =>
                  isActive ? classes.active : undefined
                }
              >
                {props.name} <IconDown width="9px" />
              </NavLink>
            </li>
          )}

          {props.isLogin && (
            <li>
              <NavLink
                to="?"
                onClick={props.onLogout ? props.onLogout : undefined}
              >
                Logout
              </NavLink>
            </li>
          )}
        </ul>
      )}
    </div>
  );
}

export default NavIcon;
