import React from "react";
import {
  FaBootstrap,
  FaCss3Alt,
  FaEnvelope,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaJsSquare,
  FaLinux,
  FaNode,
  FaPython,
  FaReact,
  FaSass,
} from "react-icons/fa";
import { SiRedux, SiFastapi } from "react-icons/si";
import { CiMemoPad } from "react-icons/ci";
import { FaPhone } from "react-icons/fa6";

const Home: React.FC = () => {
  return (
    <div className="section section--home">
      <h2 className="heading-primary">
        Hi,
        <br />
        I&apos;m Brown,
        <br />
      </h2>
      <h2 className="role">
        <span className="heading-role">Full Stack</span> Developer
      </h2>
      <p className="paragraph">
        React Developer with 3+ years of professional experience building
        modern, responsive web applications. Specialized in creating dynamic
        user interfaces using React, Redux, and modern JavaScript. Proficient in
        full-stack development with Node.js, Python, and FastAPI. Passionate
        about writing clean, maintainable code and delivering exceptional user
        experiences.
      </p>
      <div className="tech-stack">
        <FaHtml5 />
        <FaCss3Alt />
        <FaJsSquare />
        <FaReact />
        <SiRedux />
        <FaNode />
        <FaPython />
        <SiFastapi />
        <FaBootstrap />
        <FaSass />
        <FaGitAlt />
        <FaGithub />
        <FaLinux />
      </div>
      <div className="button-group">
        <a href="/files/resume.pdf" target="__blank" className="btn">
          <CiMemoPad /> Resume
        </a>
        <a href="mailto:brown11369@gmail.com" className="btn">
          <FaEnvelope /> Brown11369@gmail.com
        </a>
        <a href="tel:+919870895374" className="btn">
          <FaPhone /> 9870895374
        </a>
      </div>
    </div>
  );
};

export default Home;
