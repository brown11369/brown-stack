import React from "react";
import AnimatedSkills from "../../components/AnimatedSkills";

const Skills: React.FC = () => {
  return (
    <div className="section">
      <h2 className="heading-primary">
        Skills and
        <br />
        Experience
      </h2>
      <div className="content-layout">
        <div className="content-layout__text">
          <p className="paragraph">
            Over the past 3+ years, I&apos;ve specialized in React development,
            building enterprise-level applications and dynamic user interfaces.
            My core expertise includes React (hooks, context, lifecycle
            methods), Redux for complex state management, and modern
            JavaScript/TypeScript. I&apos;m proficient in creating responsive
            layouts with HTML5 and CSS3, utilizing frameworks like Tailwind CSS
            and Bootstrap. On the backend, I develop APIs using Node.js and
            Express, as well as Python with FastAPI for high-performance
            applications. I follow industry best practices including code
            splitting, lazy loading, testing with Jest and React Testing
            Library, and version control with Git.
          </p>
        </div>
        <div className="content-layout__media skills-container">
          <AnimatedSkills />
        </div>
      </div>
    </div>
  );
};

export default Skills;
