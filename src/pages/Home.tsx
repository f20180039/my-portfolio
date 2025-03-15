import { FaLinkedin, FaGithub } from "react-icons/fa";
import Profile from "../assets/profile-pic-2.png";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section className="ans-flex ans-flex-col ans-items-center ans-text-center ans-py-20 ans-bg-Gray-50 ans-min-h-screen">
      {/* Profile Image */}
      <img
        src={Profile}
        alt="Anshuman Singh"
        className="ans-w-48 ans-h-48 ans-rounded-full ans-shadow-lg ans-object-cover"
      />

      {/* Name & Title */}
      <h1 className="ans-text-4xl ans-font-bold ans-text-Blue-600 ans-mt-4">
        Anshuman Singh
      </h1>
      <p className="ans-text-lg ans-text-Gray-500 ans-mt-2">
        Frontend Engineer at HealthPlix Technologies
      </p>

      {/* Summary */}
      <p className="ans-max-w-3xl ans-text-Gray-700 ans-text-center ans-mt-6">
        Experienced frontend engineer skilled in **React, TypeScript, AI
        integrations, and performance optimization**. Developed AI-powered
        medical documentation tools, enhanced electronic medical records (EMR),
        and improved **healthcare efficiency** through seamless UI/UX.
      </p>

      {/* Buttons */}
      <div className="ans-mt-6 ans-flex ans-gap-4">
        <a
          href="/assets/Anshuman-Resume.pdf"
          download
          className="ans-bg-Blue-500 ans-text-White ans-px-6 ans-py-2 ans-rounded ans-shadow-md hover:ans-bg-Blue-600"
        >
          Download Resume
        </a>
        <Link
          to="/projects"
          className="ans-bg-Success-500 ans-text-White ans-px-6 ans-py-2 ans-rounded ans-shadow-md hover:ans-bg-Success-600"
        >
          View Projects
        </Link>
      </div>

      {/* Social Links */}
      <div className="ans-flex ans-gap-6 ans-mt-6">
        <a
          href="https://linkedin.com/in/anshuman-singh-4546b5275"
          target="_blank"
          rel="noopener noreferrer"
          className="ans-text-Blue-600 ans-text-10 hover:ans-text-Blue-800"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/f20180039"
          target="_blank"
          rel="noopener noreferrer"
          className="ans-text-Gray-800 ans-text-10 hover:ans-text-Gray-900"
        >
          <FaGithub />
        </a>
      </div>
    </section>
  );
};

export default Home;
