import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="ans-bg-primary ans-text-white ans-p-4 ans-flex ans-justify-between">
      <h1 className="ans-text-xl">My Portfolio</h1>
      <nav>
        <ul className="ans-flex ans-gap-4">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
