import { useParams } from 'react-router-dom';
import data from '../../works.json';

const parsedData = data.clients.reduce((result, client) => {
  result[`${client.slug}-study-case`] = client;
  return result;
}, {});

const StudyCase = () => {
  const { clientSlug } = useParams();
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

export default StudyCase;
