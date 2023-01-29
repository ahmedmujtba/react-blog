import { useParams } from "react-router-dom";

const ProjectDetails = () => {
  const { id } = useParams();
  return (
    <div className="project-details">
      <h2>Project {id}</h2>
    </div>
  );
};

export default ProjectDetails;
