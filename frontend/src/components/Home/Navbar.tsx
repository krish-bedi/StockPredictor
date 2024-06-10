import { RiStockLine } from "react-icons/ri";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="navbar bg-black h-8v border-b border-primary">
        <div className="navbar-start">
          <NavLink
            to="/"
            className="logo-btn text-primary ml-20 btn btn-ghost text-xl hover:..."
          >
            <RiStockLine /> StockPredictor
          </NavLink>
        </div>
        <div className="navbar-start mr-[25vw] hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <NavLink to="/about" className="text-white btn btn-ghost">
                About
              </NavLink>
            </li>
            {/*
            <li className="text-white">
              <details>
                <summary>Parent</summary>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </details>
            </li>
            */}
            <li>
              <a className="text-white btn btn-ghost">Item 3</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end mr-[11vw]">
          <NavLink
            to="/signup"
            className="text-white mr-3 btn bg-primary hover:bg-primary-darker"
          >
            SIGN UP
          </NavLink>
          <NavLink
            to="/login"
            className="text-white btn mr-10 bg-secondary hover:bg-secondary-darker"
          >
            LOG IN
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Navbar;
