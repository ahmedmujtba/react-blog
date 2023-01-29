import Navbar from "./Navbar";
import Home from "./Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";

import ProjectsList from "./ProjectsList";
import ProjectDetails from "./ProjectDetails";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route exact path="about" element={<About />}></Route>
            <Route exact path="myprojects" element={<ProjectsList />}></Route>
            <Route exact path="contact" element={<Contact />}></Route>
            <Route
              exact
              path="myprojects/:id"
              element={<ProjectDetails />}
            ></Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
