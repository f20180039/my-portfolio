import { Link } from "react-router-dom";
import { EAPP_ROUTES } from "../constants";

export default function Header() {
  return (
    <header className="ans-bg-grad_Gray800_90 ans-text-White ans-p-4 ans-flex ans-justify-between">
      <h1 className="ans-text-4">My Portfolio</h1>
      <nav>
        <ul className="ans-flex ans-gap-4">
          <li>
            <Link to={EAPP_ROUTES.home}>Home</Link>
          </li>
          <li>
            <Link to={EAPP_ROUTES.about}>About</Link>
          </li>
          <li>
            <Link to={EAPP_ROUTES.projects}>Projects</Link>
          </li>
          <li>
            <Link to={EAPP_ROUTES.contact}>Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
