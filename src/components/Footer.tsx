import { EAPP_ROUTES } from "../constants";

export default function Footer() {
  return (
    <footer className="ans-flex ans-flex-col ans-text-White ans-py-6 ans-text-center ans-bg-Gray-900">
      <nav>
        <ul className="ans-flex ans-justify-center ans-gap-6 ans-mb-4">
          <li>
            <a
              href={EAPP_ROUTES.about}
              className="ans-text-Gray-300 hover:ans-text-White"
            >
              About
            </a>
          </li>
          <li>
            <a
              href={EAPP_ROUTES.experience}
              className="ans-text-Gray-300 hover:ans-text-White"
            >
              Experience
            </a>
          </li>
          <li>
            <a
              href={EAPP_ROUTES.projects}
              className="ans-text-Gray-300 hover:ans-text-White"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href={EAPP_ROUTES.contact}
              className="ans-text-Gray-300 hover:ans-text-White"
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
      <p>Copyright &copy; 2024 Anshuman Singh. All Rights Reserved.</p>
    </footer>
  );
}
