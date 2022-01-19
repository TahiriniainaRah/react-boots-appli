import * as React from "react";
import "./navbarHome.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "../../../../assets/img/slacklogo.jpg";
import { Link } from "react-router-dom";

interface INavbarHomeProps {}

const NavbarHome: React.FunctionComponent<INavbarHomeProps> = (props) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light navhome">
      <div className="container py-3 ">
        <a className="navbar-brand text-white" href="#">
          <img src={logo} alt="voir logo" className="btn btn-secondary" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <FontAwesomeIcon icon="bars" className="toggler_Y" size="lg" />
        </button>
        <div
          className="navbar_item collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/">
                <a
                  className="lol nav-link active text-white "
                  aria-current="page"
                  href="#"
                >
                  Home
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/card">
                <a className="lol nav-link text-white" href="#">
                  Card
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/client">
                <a className="lol nav-link text-white" href="#">
                  Client
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/professionnel">
                <a className="lol nav-link text-white" href="#">
                  Professionnel
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/faq">
                <a className="lol nav-link text-white" href="#">
                  Faq
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavbarHome;
