import { useParams } from "react-router";

const StudyCase = ({ data }) => {
  let { clientSlug } = useParams();
  console.log({
    data,
    clientSlug
  });
   
  return (
    <div className="StudyCase">
      <div className="header">{data.clientName}</div>
      <div className="content">
        <h2>{data.title}</h2>
        <div className="description">
          {data.description && data.description !== undefined ? data.description : "[Aucune explication n'a été donnée]"}
        </div>
      </div>
    </div>
  );
};

export default StudyCase;
