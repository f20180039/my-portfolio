import { FaLinkedin, FaGithub } from "react-icons/fa";
import Profile from "../assets/profile-pic-2.png";
import { Link } from "react-router-dom";
import { C_GITHUB_URL, C_LINKEDIN_URL } from "../constants";

const Home = () => {
  return (
    <section className="ans-flex ans-flex-col ans-w-full sm:ans-flex-row ans-items-center ans-justify-center ans-text-center sm:ans-text-left">
      <div className="ans-flex ans-flex-col ans-items-center ans-w-full sm:ans-w-1/2 ans-gap-2 ans-px-6 sm:ans-px-20 ans-py-16">
        <img
          src={Profile}
          alt="Anshuman Singh"
          className="ans-w-48 ans-h-48 ans-rounded-full ans-shadow-lg ans-object-cover"
        />
        <h1 className="ans-text-5 ans-font-bold ans-text-Blue-600">
          Anshuman Singh
        </h1>
        <p className="ans-text-4 ans-text-Gray-500 text-center sm:text-left">
          Frontend Engineer at HealthPlix Technologies
        </p>

        {/* Social Links */}
        <div className="ans-flex ans-gap-6 ans-justify-center sm:ans-justify-start">
          <a
            href={C_LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="ans-text-Blue-600 ans-text-6 hover:ans-text-Blue-800"
          >
            <FaLinkedin />
          </a>
          <a
            href={C_GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="ans-text-Gray-800 ans-text-6 hover:ans-text-Gray-900"
          >
            <FaGithub />
          </a>
        </div>
      </div>

      {/* Right: Bio & Actions */}
      <div className="ans-flex ans-flex-col ans-w-full sm:ans-w-1/2 ans-max-w-2xl ans-px-6 sm:ans-px-20 ans-py-16 ans-gap-6">
        <p className="ans-text-3 ans-text-Gray-700 ans-leading-relaxed">
          Experienced frontend engineer skilled in{" "}
          <strong>
            React, TypeScript, AI integrations, and performance optimization
          </strong>
          . Developed AI-powered medical documentation tools, enhanced
          electronic medical records (EMR), and improved{" "}
          <strong>healthcare efficiency</strong> through seamless UI/UX.
        </p>

        {/* Buttons */}
        <div className="ans-flex ans-flex-col ans-w-full sm:ans-flex-row ans-gap-6">
          <a
            href="/assets/AnshumanSingh-FE-Resume.pdf"
            download
            className="ans-flex-1 ans-min-w-[160px] ans-bg-Blue-500 ans-text-White ans-px-6 ans-py-3 ans-rounded ans-shadow-md hover:ans-bg-Blue-600 ans-text-3 ans-text-center"
          >
            Download Resume
          </a>
          <Link
            to="/projects"
            className="ans-flex-1 ans-min-w-[160px] ans-bg-Success-500 ans-text-White ans-px-6 ans-py-3 ans-rounded ans-shadow-md hover:ans-bg-Success-600 ans-text-3 ans-text-center"
          >
            View Projects
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Home;
