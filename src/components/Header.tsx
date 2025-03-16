import { useState } from "react";
import { Link } from "react-router-dom";
import { EAPP_ROUTES } from "../constants";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="ans-bg-grad_Gray800_90 ans-text-White ans-p-4 ans-sticky ans-w-full ans-shadow-md">
      <div className="ans-flex ans-w-full ans-justify-between ans-items-center">
        {/* Logo / Title */}
        <h1 className="ans-text-2xl ans-font-inter-3">My Portfolio</h1>

        {/* Desktop Navigation */}
        <nav className="ans-hidden sm:ans-flex">
          <ul className="ans-flex ans-gap-6">
            <li>
              <Link to={EAPP_ROUTES.home} className="hover:ans-text-Gray-300">
                Home
              </Link>
            </li>
            <li>
              <Link to={EAPP_ROUTES.about} className="hover:ans-text-Gray-300">
                About
              </Link>
            </li>
            <li>
              <Link
                to={EAPP_ROUTES.projects}
                className="hover:ans-text-Gray-300"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                to={EAPP_ROUTES.contact}
                className="hover:ans-text-Gray-300"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        {/* Mobile Menu Icon */}
        <div
          className="sm:ans-hidden ans-cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="ans-block ans-w-6 ans-h-1 ans-bg-White ans-mb-1"></span>
          <span className="ans-block ans-w-6 ans-h-1 ans-bg-White ans-mb-1"></span>
          <span className="ans-block ans-w-6 ans-h-1 ans-bg-White"></span>
        </div>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <nav className="sm:ans-hidden ans-bg-Gray-900 ans-text-White ans-absolute ans-top-full ans-left-0 ans-w-full ans-shadow-md">
          <ul className="ans-flex ans-flex-col ans-items-center ans-py-4 ans-space-y-4">
            <li>
              <Link to={EAPP_ROUTES.home} onClick={() => setMenuOpen(false)}>
                Home
              </Link>
            </li>
            <li>
              <Link to={EAPP_ROUTES.about} onClick={() => setMenuOpen(false)}>
                About
              </Link>
            </li>
            <li>
              <Link
                to={EAPP_ROUTES.projects}
                onClick={() => setMenuOpen(false)}
              >
                Projects
              </Link>
            </li>
            <li>
              <Link to={EAPP_ROUTES.contact} onClick={() => setMenuOpen(false)}>
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
