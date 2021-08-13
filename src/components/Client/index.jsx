import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './Client.css';

const Client = ({ data, url }) => (
  <div className="Client">
    <div className="card">
      <div className="content">
        <div className="header">{data.clientName}</div>
        <div className="extra">
          <Link to={`${url}/${data.clientName.toLowerCase()}-study-case`}>
            {data.title}
          </Link>
        </div>
      </div>
    </div>
  </div>
);

Client.propTypes = {
  url: PropTypes.string,
  data: PropTypes.shape({
    title: PropTypes.string,
    clientName: PropTypes.string,
  }),
};

export default Client;
