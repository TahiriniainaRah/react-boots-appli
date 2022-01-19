import * as React from "react";
import Footer from "../../pages/footer/footer";
import Content from "../acceuil/acceuil-card/content/content";
import Navbar from "../acceuil/acceuil-card/navbar/navbar";
import "./card.scss";

interface ICardProps {}

const Card: React.FunctionComponent<ICardProps> = (props) => {
  return (
    <>
      <Navbar />
      <Content/>
      <Footer />
    </>
  );
};

export default Card;
