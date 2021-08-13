import React from 'react';
import { useRouteMatch } from 'react-router-dom';

import Client from '../../components/Client';
import data from '../../works.json';
import './Works.css';

const Works = () => {
  const { path, url } = useRouteMatch();
  const studyCaseListDataArray = data.clients;

  return (
    <div className="Page">
      <h3 className="Page-header">
        Au fil des années, nous avons pu accompagner les meilleurs.
      </h3>
      <p className="Page-content">
        Découvrez pas à pas comment nous avons été présent pour lancer vos
        marques préférées.
      </p>
      <div className="cards">
        {studyCaseListDataArray.map((clientData) => (
          <Client
            data={clientData}
            path={path}
            url={url}
            key={clientData.slug}
          />
        ))}
      </div>
    </div>
  );
};

export default Works;
