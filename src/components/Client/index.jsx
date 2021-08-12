import { Switch, Route, Link } from 'react-router-dom';
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
        <Switch>
          <Route path={`${path}/:clientSlug`}>
            <StudyCase data={data} />
          </Route>
        </Switch>
      </main>
    </div>
  );
};

export default Client;
