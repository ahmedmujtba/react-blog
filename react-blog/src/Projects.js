import { useParams } from "react-router-dom";

const Projects = () => {
  const { id } = useParams();
  return (
    <div className="projects">
      <h2>Project {id}</h2>
    </div>
  );
};

export default Projects;
