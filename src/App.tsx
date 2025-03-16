import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import { EAPP_ROUTES } from "./constants";

const App = () => {
  return (
    <Router>
      <div className="ans-flex ans-flex-col ans-min-h-screen">
        <nav className="ans-bg-Gray-800 ans-text-White ans-p-4 ans-flex ans-space-x-4">
          <Link to={EAPP_ROUTES.home} className="ans-text-lg">
            Home
          </Link>
          <Link to={EAPP_ROUTES.about} className="ans-text-lg">
            About
          </Link>
          <Link to={EAPP_ROUTES.projects} className="ans-text-lg">
            Projects
          </Link>
          <Link to={EAPP_ROUTES.contact} className="ans-text-lg">
            Contact
          </Link>
        </nav>
        <main className="ans-flex-1">
          <Routes>
            <Route path={EAPP_ROUTES.home} element={<Home />} />
            <Route path={EAPP_ROUTES.about} element={<About />} />
            <Route path={EAPP_ROUTES.projects} element={<Projects />} />
            <Route path={EAPP_ROUTES.contact} element={<Contact />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
