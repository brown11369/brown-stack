import React from "react";
import "./animatedSkills.css";

const AnimatedSkills: React.FC = () => {
  const skills = [
    "React",
    "JavaScript",
    "Redux",
    "Node.js",
    "Python & FastAPI",
    "HTML & CSS",
  ];

  return (
    <div className="floating-skill-wrapper">
      {skills.map((skill, index) => (
        <div key={index} className={`floating-skill skill-${index}`}>
          {skill}
        </div>
      ))}
    </div>
  );
};

export default AnimatedSkills;
