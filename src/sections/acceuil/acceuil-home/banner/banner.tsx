import * as React from "react";
import "./banner.scss";
import NavbarHome from "../navbarHome/navbarHome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface IBannerProps {}

const Banner: React.FunctionComponent<IBannerProps> = (props) => {
  return (
    <div className="banner-card">
      <NavbarHome />
      <div className="container">
        <div className="row">
          <div className="text-center banner-card--space">
            <h1 className="display-2">
              Free Digital Marketing Webinar.
            </h1>
            <h6 className="title-banner mt-sm-1 mt-xs-2 mt-md-3">Unclock Marketing Secrets That Work</h6>
            <button type="button" className="banner-card--btn btn btn-outline-secondary px-4 mt-sm-4 mt-md-5">
              Reserve My Spot
            </button>
          </div>
          <div className="text-center banner-card--space">
            <ul className="list-unstyled list-inline text-center ">
              <li className="list-inline-item">
                <a href="">
                  <FontAwesomeIcon
                    icon={["fab", "facebook"]}
                    className="list-icon-banner"
                  />
                </a>
              </li>
              <li className="list-inline-item px-1">
                <a href="">
                  <FontAwesomeIcon
                    icon={["fab", "twitter"]}
                    className="list-icon-banner"
                  />
                </a>
              </li>
              <li className="list-inline-item">
                <a href="">
                  <FontAwesomeIcon
                    icon={["fab", "instagram"]}
                    className="list-icon-banner"
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
