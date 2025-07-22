import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png";
import arduino from "../assets/img/arduino.png";
import bootstrap from "../assets/img/bootstrap.png";
import cloudinary from "../assets/img/cloudinary.jpg";
import css from "../assets/img/css.png";
import js from "../assets/img/js.png";
import html from "../assets/img/html.png";
import django from "../assets/img/django.png";
import docker from "../assets/img/docker.png";
import firebase from "../assets/img/firebase.png";
import postgres from "../assets/img/postgresql.png";
import postman from "../assets/img/postman.jpg";
import react from "../assets/img/react.png";
import mysql from "../assets/img/mysql.png";
import python from "../assets/img/python1.png";
import c from "../assets/img/c.png";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 5 },
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 4 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 3 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 2 }
  };

  const skills = [
    { img: python, title: "Python" },
    { img: c, title: "C" },
    { img: react, title: "React.js" },
    { img: django, title: "Django" },
    { img: docker, title: "Docker" },
    { img: firebase, title: "Firebase" },
    { img: postgres, title: "PostgreSQL" },
    { img: mysql, title: "MySQL" },
    { img: bootstrap, title: "Bootstrap" },
    { img: html, title: "HTML" },
    { img: css, title: "CSS" },
    { img: js, title: "JavaScript" },
    { img: arduino, title: "Arduino" },
    { img: cloudinary, title: "Cloudinary" },
    { img: postman, title: "Postman" }
  ];

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn px-2 px-md-5">
              <h2 style={{ color: "#fff" }}>Skills</h2>
              <p style={{ color: "#fff" }}>
                Here's a snapshot of my technical strengths and development expertise across full-stack, mobile, real-time apps, and IoT systems.
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={1500}
                transitionDuration={500}
                pauseOnHover={true}
                arrows={false}
                className="owl-carousel owl-theme skill-slider"
              >
                {skills.map((skill, index) => (
                  <div className="item" key={index} style={{ textAlign: "center" }}>
                    <img
                      src={skill.img}
                      alt={skill.title}
                      style={{
                        width: "100px",
                        height: "100px",
                        objectFit: "contain",
                        margin: "0 auto"
                      }}
                    />
                    <h5 style={{ color: "#fff", marginTop: "10px" }}>{skill.title}</h5>
                  </div>
                ))}
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Background" />
    </section>
  );
};
