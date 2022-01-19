import * as React from "react";
import Navbar from "../acceuil/acceuil-card/navbar/navbar";
import "./faq.scss";

interface IFaqProps {}

const Faq: React.FunctionComponent<IFaqProps> = (props) => {
  return (
    <>
      <Navbar />
      <h2>Vous pouvez trouver toutes les reponses possible ici!</h2>
    </>
  );
};

export default Faq;
