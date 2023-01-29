import { Link } from "react-router-dom";
import useFetch from "./useFetch";

const ProjectsList = () => {
  const { projects, isLoading, error } = useFetch(
    "http://localhost:8000/projects"
  );
  return (
    <div className="projects-list">
      <h2>All Projects</h2>
      {error && <div>{error}</div>}
      {isLoading && <div>Loading...</div>}
      {projects &&
        projects.map((project) => {
          return (
            <div className="projects-preview" key={project.id}>
              <Link to={`/myprojects/${project.id}`}>
                <h2>{project.title}</h2>
                <p>Creator: {project.author}</p>
              </Link>
            </div>
          );
        })}
    </div>
  );
};

export default ProjectsList;
