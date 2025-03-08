import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="ans-fixed ans-w-full ans-bg-Blue-500 ans-text-White ans-shadow-md ans-p-4">
      <div className="ans-container ans-mx-auto ans-flex ans-justify-between ans-items-center">
        <div className="ans-text-2xl ans-font-bold">Anshuman Singh</div>
        <ul className="ans-hidden md:ans-flex ans-space-x-6">
          {["About", "Experience", "Projects", "Contact"].map((section) => (
            <li key={section}>
              <a
                href={`#${section.toLowerCase()}`}
                className="ans-hover:ans-text-Gray-300"
              >
                {section}
              </a>
            </li>
          ))}
        </ul>
        {/* Hamburger Menu */}
        <div
          className="md:ans-hidden ans-cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="ans-block ans-w-6 ans-h-1 ans-bg-White ans-mb-1"></span>
          <span className="ans-block ans-w-6 ans-h-1 ans-bg-White ans-mb-1"></span>
          <span className="ans-block ans-w-6 ans-h-1 ans-bg-White"></span>
        </div>
      </div>
      {menuOpen && (
        <ul className="md:ans-hidden ans-bg-Blue-600 ans-text-White ans-py-4 ans-space-y-4">
          {["About", "Experience", "Projects", "Contact"].map((section) => (
            <li key={section} className="ans-text-center">
              <a
                href={`#${section.toLowerCase()}`}
                onClick={() => setMenuOpen(false)}
              >
                {section}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
