import * as React from 'react';
import Navbar from '../acceuil/acceuil-card/navbar/navbar';
import'./client.scss';

interface IClientProps {
}

const Client: React.FunctionComponent<IClientProps> = (props) => {
  return(
      <>
        <Navbar />
        <h2>Bienvenue sur le compte client!</h2>
      </>
  )
};

export default Client;
