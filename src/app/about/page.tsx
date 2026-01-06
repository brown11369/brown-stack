"use client";
import React from "react";
import { useTheme } from "../../context/ThemeContext";
import Image from "next/image";

const About: React.FC = () => {
  const { isDarkMode } = useTheme();
  return (
    <div className="section">
      <h2 className="heading-primary">About Me</h2>
      <div className="content-layout">
        <div className="content-layout__text">
          <p className="paragraph">
            I&apos;m a dedicated React Developer with 3+ years of hands-on
            experience building scalable and performant web applications. My
            expertise lies in crafting intuitive user interfaces using React,
            Redux for state management, and modern JavaScript (ES6+). I
            specialize in component-based architecture, creating reusable
            components, and implementing best practices for optimal performance.
            On the backend, I work with Node.js for JavaScript ecosystems and
            Python with FastAPI for building robust APIs. I&apos;m passionate
            about staying current with the latest React features, hooks, and
            ecosystem tools. My goal is to create seamless, responsive
            applications that deliver exceptional user experiences across all
            devices.
          </p>
        </div>
        <div className="content-layout__media">
          <Image
            src={isDarkMode ? "/images/circle.gif" : "/images/animation.gif"}
            alt="animation"
            className="animated-image"
            width={200}
            height={200}
          />
        </div>
      </div>
    </div>
  );
};

export default About;
