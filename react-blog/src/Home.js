import ProjectsList from "./ProjectsList";
import useFetch from "./useFetch";

const Home = () => {
  const { projects, isLoading, error } = useFetch(
    "http://localhost:8000/blogs"
  );

  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isLoading && <div>Loading...</div>}
      {projects && <ProjectsList projects={projects} title="All Projects" />}
    </div>
  );
};

export default Home;
