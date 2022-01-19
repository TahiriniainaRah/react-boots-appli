import * as React from "react";
import "./service.scss";

interface IServicesProps {}

const Services: React.FunctionComponent<IServicesProps> = (props) => {
  return (
    <div className="service-content">
      <div className="container text-center mt-5">
        <h2 className="section-title mb-2 h3 ">You Will Learn How To</h2>
        <div className="row mt-5">
          <div className=" service-content--desc col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-4">
            <h3 className="service-content--desc--title service-content--desc--title--one">
              01
            </h3>
            <p className="service-content--desc--para">
              With supporting text below as a natural lead-in to additional
              content.
            </p>
          </div>
          <div className=" service-content--desc col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-4">
            <h3 className="service-content--desc--title service-content--desc--title--two">
              02
            </h3>
            <p className="service-content--desc--para">
              With supporting text below as a natural lead-in to additional
              content.
            </p>
          </div>
          <div className=" service-content--desc col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-4">
            <h3 className="service-content--desc--title service-content--desc--title--tree">
              03
            </h3>
            <p className="service-content--desc--para">
              With supporting text below as a natural lead-in to additional
              content.
            </p>
          </div>
        </div>
        <button
          type="button"
          className="banner-card--btn btn btn-outline-secondary px-4 mt-sm-4 mt-md-5"
        >
          Reserve My Spot
        </button>
      </div>
    </div>
  );
};

export default Services;
