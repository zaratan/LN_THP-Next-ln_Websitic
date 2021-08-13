import { useParams } from "react-router";
import data from '../../worksBySlugs.json';

const StudyCase = () => {
  let { clientSlug } = useParams();
  const clientData = data[clientSlug];
  console.log({
    clientData,
    clientSlug
  });
   
  return (
    <div className="StudyCase">
      <div className="header">{clientData.clientName}</div>
      <div className="content">
        <h2>{clientData.title}</h2>
        <div className="description">
          {clientData.description && clientData.description !== undefined ? clientData.description : "[Aucune explication n'a été donnée]"}
        </div>
      </div>
    </div>
  );
};

export default StudyCase;
