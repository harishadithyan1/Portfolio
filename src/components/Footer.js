import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from '../assets/img/git.svg';
import docker from '../assets/img/Docker.svg';
export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" className="logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
             <a href="www.linkedin.com/in/harish-adithyan-88326a2ba" target="_blank" rel="noopener noreferrer">
                            <img src={navIcon1} alt="LinkedIn" />
                </a>
               <a href="https://github.com/harishadithyan1" target="_blank" rel="noopener noreferrer">
                    <img src={navIcon2} alt="GitHub" />
                </a>
               <a href="https://github.com/harishadithyan1" target="_blank" rel="noopener noreferrer">
                    <img src={docker} alt="docker" />
                </a>
            </div>
           <p>© 2025 Harish Adithyan. All Rights Reserved.</p>

          </Col>
        </Row>
      </Container>
    </footer>
  )
}