import Navbar from "./Navbar";
import Home from "./Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Projects from "./Projects";
import ProjectsList from "./ProjectsList";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route exact path="about" element={<About />}></Route>
            <Route exact path="projects" element={<ProjectsList />}></Route>
            <Route exact path="contact" element={<Contact />}></Route>
            <Route exact path="projects/:id" element={<Projects />}></Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
