const Experience = () => {
  return (
    <section className="ans-container ans-mx-auto ans-px-6 ans-py-16">
      <h2 className="ans-text-5 ans-font-bold ans-text-Blue-600">
        Work Experience
      </h2>

      <div className="ans-mt-8">
        <h3 className="ans-text-4 ans-font-semibold">
          Frontend Engineer - HealthPlix Technologies
        </h3>
        <p className="ans-text-Gray-600 ans-text-3">July 2022 - Present</p>
        <ul className="ans-list-disc ans-list-inside ans-text-Gray-700 ans-mt-4">
          <li>Integrated AI-powered documentation using OpenAI APIs.</li>
          <li>
            Optimized frontend performance, reducing re-rendering overhead by
            25%.
          </li>
          <li>
            Developed reusable UI components using React, TypeScript, and
            Tailwind CSS.
          </li>
          <li>Integrated analytics for data-driven improvements.</li>
        </ul>
      </div>

      <div className="ans-mt-8">
        <h3 className="ans-text-4 ans-font-semibold">
          Data Science Intern - Aramex India Pvt Ltd
        </h3>
        <p className="ans-text-Gray-600 ans-text-3">Aug 2021 - Jan 2022</p>
        <ul className="ans-list-disc ans-list-inside ans-text-Gray-700 ans-mt-4">
          <li>
            Developed a model to improve address extraction, increasing accuracy
            from 90% to 99%.
          </li>
          <li>
            Performed data analysis and feature engineering for reliable model
            results.
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Experience;
