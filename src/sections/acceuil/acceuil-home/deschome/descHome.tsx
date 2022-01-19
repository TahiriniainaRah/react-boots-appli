import * as React from "react";
import "./descHome.scss";
import profilDesc from "../../../../assets/img/Designer _Two Color.png";

interface IDescHomeProps {}

const DescHome: React.FunctionComponent<IDescHomeProps> = (props) => {
  return (
    <div className="deschome-content">
      <div className="container">
        <div className="row justify-content-center  d-sm-block d-md-flex">
          <div className="col-xs-12 col-sm-8 col-md-4 deschome-content--one">
            <img
              src={profilDesc}
              alt="voir profil-desc"
              className="deschome-content--one--img"
            />
          </div>
          <div className="col-xs-12 col-sm-8 col-md-3 deschome-content--two">
            <h2><u>Hi,</u>I'm MDev Rah</h2>
            <h4>
              Développeur ReactJS Front With 2+ Years of Professional
              Experience.
            </h4>
            <p>
              Put your feelings into it, your heart, it's your world. If we're
              gonna walk though the woods, we need a little path. Be so very
              light. Be a gentle whisper. There we go. Every time you practice,
              you learn more.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DescHome;
