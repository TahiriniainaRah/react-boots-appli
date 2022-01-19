import * as React from "react";
import "./footer.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface IFooterProps {}

const Footer: React.FunctionComponent<IFooterProps> = (props) => {
  return (
    <div className="footer mt-5">
      <div className="container">
        <div className="footer--content--one row text-sm-left text-md-left">
          <div className="footer--content--one--links col-xs-12 col-sm-4 col-md-4 mt-5">
            <h5>Quick links</h5>
            <ul className="list-unstyled">
              <li>
                <a href="">
                  <FontAwesomeIcon icon="angle-double-right" size="sm" className="list-icon-links"/>
                  Home
                </a>
              </li>
              <li>
                <a href="">
                  <FontAwesomeIcon icon="angle-double-right" size="sm" className="list-icon-links"/>
                  About
                </a>
              </li>
              <li>
                <a href="">
                  <FontAwesomeIcon icon="angle-double-right" size="sm" className="list-icon-links"/>
                  FAQ
                </a>
              </li>
              <li>
                <a href="">
                  <FontAwesomeIcon icon="angle-double-right" size="sm" className="list-icon-links"/>
                  Get Started
                </a>
              </li>
              <li>
                <a href="">
                  <FontAwesomeIcon icon="angle-double-right" size="sm" className="list-icon-links"/>
                  Videos
                </a>
              </li>
            </ul>
          </div>
          <div className="footer--content--one--links col-xs-12 col-sm-4 col-md-4 mt-5">
            <h5>Quick links</h5>
            <ul className="list-unstyled">
              <li>
                <a href="">
                  <FontAwesomeIcon icon="angle-double-right" size="sm" className="list-icon-links"/>
                  Home
                </a>
              </li>
              <li>
                <a href="">
                  <FontAwesomeIcon icon="angle-double-right" size="sm" className="list-icon-links"/>
                  About
                </a>
              </li>
              <li>
                <a href="">
                  <FontAwesomeIcon icon="angle-double-right" size="sm" className="list-icon-links"/>
                  FAQ
                </a>
              </li>
              <li>
                <a href="">
                  <FontAwesomeIcon icon="angle-double-right" size="sm" className="list-icon-links"/>
                  Get Started
                </a>
              </li>
              <li>
                <a href="">
                  <FontAwesomeIcon icon="angle-double-right" size="sm" className="list-icon-links"/>
                  Videos
                </a>
              </li>
            </ul>
          </div>
          <div className="footer--content--one--links col-xs-12 col-sm-4 col-md-4 mt-5">
            <h5>Quick links</h5>
            <ul className="list-unstyled">
              <li>
                <a href="">
                  <FontAwesomeIcon icon="angle-double-right" size="sm" className="list-icon-links"/>
                  Home
                </a>
              </li>
              <li>
                <a href="">
                  <FontAwesomeIcon icon="angle-double-right" size="sm" className="list-icon-links"/>
                  About
                </a>
              </li>
              <li>
                <a href="">
                  <FontAwesomeIcon icon="angle-double-right" size="sm" className="list-icon-links"/>
                  FAQ
                </a>
              </li>
              <li>
                <a href="">
                  <FontAwesomeIcon icon="angle-double-right" size="sm" className="list-icon-links"/>
                  Get Started
                </a>
              </li>
              <li>
                <a
                  href=""
                  title="Design and developed by"
                >
                  <FontAwesomeIcon icon="angle-double-right" size="sm" className="list-icon-links"/>
                  Imprint
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer--content--two row">
          <div className="footer--content--two--icon col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-5">
            <ul className="list-unstyled list-inline text-center">
              <li className="list-inline-item">
                <a href="">
                  <FontAwesomeIcon icon={["fab", "facebook"]} size="lg" className="list-icon-social"/>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="">
                  <FontAwesomeIcon icon={["fab", "twitter"]} size="lg" className="list-icon-social"/>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="">
                  <FontAwesomeIcon icon={["fab", "instagram"]} size="lg" className="list-icon-social"/>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="">
                  <FontAwesomeIcon icon={["fab", "google-plus-g"]} size="lg" className="list-icon-social"/>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="" target="_blank">
                  <FontAwesomeIcon icon="envelope" size="lg" className="list-icon-social"/>
                </a>
              </li>
            </ul>
          </div>
          <hr />
        </div>
        <div className=" row">
          <div className="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-2 text-center text-white">
            <p>
              <u>
                <a href="">
                  National Transaction Corporation
                </a>
              </u>
              is a Registered MSP/ISO of Elavon, Inc. Georgia [a wholly owned
              subsidiary of U.S. Bancorp, Minneapolis, MN]
            </p>
            <p className="h6">
              © All right Reversed.
              <a
                className="text-green ml-2"
                href=""
                target="_blank"
              >
                Sunlimetech
              </a>
            </p>
          </div>
          <hr />
        </div>
      </div>
    </div>
  );
};

export default Footer;
