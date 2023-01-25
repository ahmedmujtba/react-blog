import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState([]);

  const [name, setName] = useState("ahmed");

  const handleDelete = (id) => {
    const newBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(newBlogs);
  };
  useEffect(() => {
    console.log(name);
  }, [name]);
  return (
    <div className="home">
      <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete} />
      <button
        onClick={() => {
          setName("mujtba");
        }}
      >
        change name
      </button>
      <p>{name}</p>
    </div>
  );
};

export default Home;
