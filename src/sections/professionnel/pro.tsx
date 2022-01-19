import * as React from "react";
import Navbar from "../acceuil/acceuil-card/navbar/navbar";
import "./pro.scss";

interface IProProps {}

const Pro: React.FunctionComponent<IProProps> = (props) => {
  return (
    <>
      <Navbar />
      <h2>Bienvenue sur le room compte professionnel!</h2>
    </>
  );
};

export default Pro;
