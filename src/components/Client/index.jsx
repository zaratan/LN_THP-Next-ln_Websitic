import { Route, Link } from 'react-router-dom';
import './Client.css';
import StudyCase from 'components/StudyCase';

const Client = ({ data, path, url }) => {
  console.log({
    data,
    path,
    url
  });
   
  return (
    <div className="Client">
      <div className="card">
        <div className="content">
          <div className="header">{data.clientName}</div>
          <div className="extra">
            <Link to={`${url}/${data.clientName.toLowerCase()}-study-case`}>{data.title}</Link>
          </div>
        </div>
      </div>
      <main>
        <Route path={`${path}/:clientSlug`}>
          <StudyCase data={{clientName: data.clientName, title: data.title, description: data.description}} />
        </Route>
      </main>
    </div>
  );
};

export default Client;
