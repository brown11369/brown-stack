import Image from "next/image";
import React from "react";

interface Project {
  id: number;
  image: string;
}

const Work: React.FC = () => {
  const projects: Project[] = Array.from({ length: 9 }, (_, i) => ({
    id: i + 1,
    image: `/images/pro${i + 1}.jpg`,
  }));

  return (
    <div className="section">
      <h2 className="heading-primary">My Work</h2>
      <p className="paragraph" style={{ marginBottom: "2rem" }}>
        A showcase of React applications I&apos;ve built over the past 3+ years.
        These projects demonstrate my expertise in React, Redux state
        management, responsive design, and integration with Node.js and Python
        backends. Each application focuses on performance optimization, clean
        code architecture, and exceptional user experience.
      </p>
      <div className="portfolio-grid">
        {projects.map((project) => (
          <div className="portfolio-card" key={project.id}>
            <Image
              src={project.image}
              alt={`Project ${project.id}`}
              className="portfolio-card__image"
              width={400}
              height={300}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
