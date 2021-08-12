import React from 'react';
import { useRouteMatch } from 'react-router-dom';
import data from '../../works.json';
import Client from 'components/Client';
import uuid from "react-uuid";
import './Works.css';

const Works = () => {
  let { path, url } = useRouteMatch();
  const [studyCaseListDataArray, setStudyCaseListDataArray] = React.useState(data.clients);
   
  let nbStudyCases = studyCaseListDataArray.length;
  console.log({
    data,
    nbStudyCases
  });
   
  return (
    <div className="Page">
      <h3 className="Page-header">Au fil des années, nous avons pu accompagner les meilleurs.</h3>
      <p className="Page-content">
        Découvrez pas à pas comment nous avons été présent pour lancer vos marques préférées.
      </p>
      <div className="cards">
        {studyCaseListDataArray.map((clientData) => (
          <Client
            data={clientData}
            path={path}
            url={url}
            key={`${uuid()}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Works;
    
