import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import data from '../../works.json';

const parsedData = data.clients.reduce((result, client) => {
  result[`${client.slug}-study-case`] = client;
  return result;
}, {});

const StudyCase = ({ clientSlug }) => {
  const clientData = parsedData[clientSlug];

  return (
    <div className="StudyCase">
      <div className="header">{clientData.clientName}</div>
      <div className="content">
        <h2>{clientData.title}</h2>
        <div className="description">
          {clientData.description && clientData.description !== undefined
            ? clientData.description
            : "[Aucune explication n'a été donnée]"}
        </div>
      </div>
    </div>
  );
};

StudyCase.propTypes = {
  clientSlug: PropTypes.string,
};

export const StudyCaseRoute = ({ children, ...rest }) => {
  const validSlugs = Object.keys(parsedData);

  return (
    <Route
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...rest}
      render={({ match }) => {
        const { clientSlug } = match.params;

        return validSlugs.includes(clientSlug) ? (
          <StudyCase clientSlug={clientSlug} />
        ) : (
          <Redirect
            to={{
              pathname: '/works',
            }}
          />
        );
      }}
    />
  );
};

StudyCaseRoute.propTypes = {
  children: PropTypes.node,
};

export default StudyCase;
