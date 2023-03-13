import React from "react";
import "./about.css";
import AI from "../../assets/ai.jfif";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5> Get to know</h5>
      <h2>Me</h2>
      <div className="container  about__container">
        <div className="about__me">
          <div className="about_me-image">
            <img src={AI} alt="About Image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small> 3+ years</small>
            </article>

            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Clients</h5>
              <small> WorldWide</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small> 20+ Completed</small>
            </article>

            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Necessitatibus eaque dolores ipsam. A sit, unde perspiciatis minus
              quas tenetur! Nesciunt, rem? Totam quae amet soluta eius aliquam
              repudiandae exercitationem iure.
            </p>

            <a href="#contact" className="btn btn-primary">
              Let's talk
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
