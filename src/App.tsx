import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const Home = () => (
  <div className="ans-p-8">
    <h1 className="ans-text-3xl ans-font-bold">Welcome to My Portfolio</h1>
    <p className="ans-mt-4">
      I'm a Frontend Engineer passionate about building amazing user
      experiences.
    </p>
    <Link
      to="/projects"
      className="ans-mt-4 ans-inline-block ans-bg-primary ans-text-white ans-px-4 ans-py-2 ans-rounded"
    >
      View My Work
    </Link>
  </div>
);

const About = () => (
  <div className="ans-p-8">
    <h1 className="ans-text-3xl ans-font-bold">About Me</h1>
    <p className="ans-mt-4">
      I specialize in React, TypeScript, and modern frontend development.
    </p>
  </div>
);

const Projects = () => (
  <div className="ans-p-8">
    <h1 className="ans-text-3xl ans-font-bold">Projects</h1>
    <ul className="ans-mt-4 ans-space-y-2">
      <li>
        Project 1 -{" "}
        <a href="#" className="ans-text-blue-500">
          View
        </a>
      </li>
      <li>
        Project 2 -{" "}
        <a href="#" className="ans-text-blue-500">
          View
        </a>
      </li>
    </ul>
  </div>
);

const Contact = () => (
  <div className="ans-p-8">
    <h1 className="ans-text-3xl ans-font-bold">Contact Me</h1>
    <p className="ans-mt-4">Email: example@example.com</p>
  </div>
);

const App = () => {
  return (
    <Router>
      <div className="ans-flex ans-flex-col ans-min-h-screen">
        <nav className="ans-bg-gray-800 ans-text-white ans-p-4 ans-flex ans-space-x-4">
          <Link to="/" className="ans-text-lg">
            Home
          </Link>
          <Link to="/about" className="ans-text-lg">
            About
          </Link>
          <Link to="/projects" className="ans-text-lg">
            Projects
          </Link>
          <Link to="/contact" className="ans-text-lg">
            Contact
          </Link>
        </nav>
        <main className="ans-flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
