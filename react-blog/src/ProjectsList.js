const ProjectsList = ({ projects, title }) => {
  return (
    <div className="project-list">
      <h1>{title}</h1>
      {projects.map((project) => {
        return (
          <div className="projects-preview" key={projects.id}>
            <h2>{projects.title}</h2>
            <p>{projects.body}</p>
          </div>
        );
      })}
    </div>
  );
};

export default ProjectsList;
