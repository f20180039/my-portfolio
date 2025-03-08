export default function Footer() {
  return (
    <footer className="ans-bg-Gray-900 ans-text-White ans-py-6 ans-text-center">
      <nav>
        <ul className="ans-flex ans-justify-center ans-gap-6 ans-mb-4">
          <li>
            <a href="#about" className="ans-text-Gray-300 hover:ans-text-White">
              About
            </a>
          </li>
          <li>
            <a
              href="#experience"
              className="ans-text-gray-300 hover:ans-text-White"
            >
              Experience
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="ans-text-gray-300 hover:ans-text-White"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="ans-text-gray-300 hover:ans-text-White"
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
