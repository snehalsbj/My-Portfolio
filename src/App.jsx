import React from 'react';
import './App.css';

function App() {
  return (
    <div>
      <nav>
        <h1>Snehal Jadhav</h1>
        <ul className="navigation">
          <li><a href="#about" className="nav-link">About</a></li>
          <li><a href="#skills" className="nav-link">Skills</a></li>
          <li><a href="#projects" className="nav-link">Projects</a></li>
          <li><a href="#contact" className="nav-link">Contact</a></li>
        </ul>
        <button className="burger-menu" id="burger-menu">
          <ion-icon className="bars" name="menu-outline"></ion-icon>
        </button>
      </nav>
      <section className="hero" id="about">
        <img
          src="./images/snehal.jpg"
          loading="lazy"
          className="hero-img"
        />
        <div className="bio animate__animated animate__shakeX">
          <h2 className="bio-title">About Me</h2>
          <p className="bio-text">
            Hello! I'm Snehal Jadhav, an enthusiastic developer with a degree in B.Tech (CSE) from Shivaji University.
            I'm passionate about web development and skilled in HTML, CSS, Java, SQL, and JavaScript.
            Eager to apply my skills and collaborate on innovative projects.
          </p>
        </div>
      </section>
      
      <section className="more-about">
        <h2>More About Me</h2>
        <p>
            Hello! I'm Snehal Jadhav, an enthusiastic developer with a degree in B.Tech (CSE) from Shivaji University.
        </p>
        <p>
            I am passionate about web development and have honed my skills in HTML, CSS, Java, SQL, and JavaScript.
            My interest in web development began during my studies, where I discovered the joy of creating dynamic and responsive websites.
        </p>
        <p>
            Throughout my academic career, I have worked on various projects that have allowed me to apply my skills practically. 
            I have a keen eye for detail and a strong commitment to writing clean, efficient code.
        </p>
        <p>
            In addition to my technical skills, I am a strong communicator and team player. 
            I enjoy collaborating with others to solve complex problems and deliver high-quality projects. 
            I am always eager to learn new technologies and improve my existing skills.
        </p>
        <p>
            I am excited to bring my knowledge and enthusiasm to new challenges and am eager to apply my skills and 
            collaborate on innovative projects. 
        </p>
      </section>

      {/* Skills section */}
      <section className="skills" id="skills">
        <h2 className="skill-header">My Top Skills</h2>
        <div className="skills-wrapper">
          <div className="first-set animate__animated animate__pulse">
            <img
              src="./images/html.png"
              alt="HTML"
              loading="lazy"
              className="icon icon-card"
            />
            <img
              src="./images/css.png"
              alt="CSS"
              loading="lazy"
              className="icon icon-card"
            />
          </div>
          <div className="second-set animate__animated animate__pulse">
            <img
              src="./images/java.png"
              alt="Java"
              loading="lazy"
              className="icon icon-card"
            />
            <img
              src="./images/sql.png"
              alt="SQL"
              loading="lazy"
              className="icon icon-card"
            />
          </div>
        </div>
      </section>

      {/* Projects section */}
      <section className="projects" id="projects">
        <h2 className="projects-title">Some of my Recent Projects</h2>
        <div className="projects-container">
          <div className="project-container project-card">
            <img
              src="./images/megaproject.png"
              alt="Soybean Pests and Disease Detection"
              loading="lazy"
              className="project-pic"
            />
            <h3 className="project-title">Soybean Pests and Disease Detection</h3>
            <p className="project-details">
                This project aims to revolutionize soybean agriculture by employing advanced pest and disease detection methods using 
                AI algorithms. By focusing on early identification and precision management, it strives to enhance crop yields sustainably. 
                Through farmer empowerment, global collaboration, and policy advocacy, the project aims to promote environmentally 
                friendly farming practices and facilitate international knowledge exchange. By amalgamating scientific expertise 
                and cutting-edge technologies, this endeavor seeks to shape a more sustainable and resilient future for the soybean industry.
            </p>
          </div>
          <div className="project-container project-card">
            <img
              src="./images/Picture1.jpg"
              alt="Hotel Management System"
              loading="lazy"
              className="project-pic"
            />
            <h3 className="project-title">Hotel Management System</h3>
            <p className="project-details">
                The QR code menu is a contactless solution that allows restaurant guests to order and pay digitally, 
                maintaining hygiene and social distancing. By scanning the QR code, customers access a digital menu 
                and place orders online, streamlining the process and reducing staff interaction. 
                This convenient and safe option benefits both customers and staff.
            </p>
          </div>
        </div>
      </section>

      {/* Contact section */}
      <section className="contact" id="contact">
        <h2>Get In Touch With Me</h2>
        <div className="contact-form-container">
          <div className="contact-form">
            <form action="https://formspree.io/f/xyylngw" method="POST">
              <div className="form-control">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="sender-name"
                  placeholder="Enter Your Name"
                  className="input-field"
                  required
                />
              </div>
              <div className="form-control">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="sender-email"
                  placeholder="Enter Your Email"
                  className="input-field"
                  required
                />
              </div>
              <div className="form-control">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  cols="60"
                  rows="10"
                  placeholder="Enter Your Message"
                  name="message"
                  className="input-field"
                  required
                ></textarea>
              </div>
              <input
                type="submit"
                value="Submit"
                id="submit-btn"
                className="submit-btn"
              />
            </form>
          </div>
        </div>
      </section>

      <footer>
        <p className="copy">&copy; Copyright 2024</p>
        <p className="copy">
          Built with &#x2661; Snehal Jadhav
        </p>
      </footer>
      
      <div className="socials">
        <a href="#" target="_blank" rel="noopener noreferrer">
          <img src="./images/twitter.png" alt="Twitter" loading="lazy" className="socicon" />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <img src="./images/instagram.png" alt="Instagram" loading="lazy" className="socicon" />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <img src="./images/linkedin.png" alt="LinkedIn" loading="lazy" className="socicon" />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <img src="./images/github.png" alt="GitHub" className="socicon" />
        </a>
      </div>

      <i className="scroll-up" id="scroll-up">
        <img src="./images/scrollup.png" className="socicon up-arrow" alt="scroll-up" />
      </i>
    </div>
  );
}
export default App;

