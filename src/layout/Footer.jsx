import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import '../CSS/Footer.css';
import navlogo from '../assets/navlogo.png';
import PageWrapper from '../components/PageWrapper';
export default function Footer() {
  return (
    <PageWrapper>
      <footer className="footer-section">
        <div className="footer-container">
          <div className="footer-brand">
            <img src={navlogo} alt="Footer-icon" style={{ width: '100px' }} />
            <p className="footer-tagline pb-1">
              Frontend Developer | React Enthusiast
            </p>
          </div>

          <div className="footer-links">
            <a href="mailto:nsafinsulthan@gmail.com" aria-label="Email">
              <FaEnvelope className="footer-icons" />
            </a>
            <a
              href="https://github.com/Safin-Sulthan"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <FaGithub className="footer-icons" />
            </a>
            <a
              href="https://www.linkedin.com/in/safin-sulthan-059228275/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="footer-icons" />
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          © {new Date().getFullYear()} Safin Sulthan. All rights reserved.
        </div>
      </footer>
    </PageWrapper>
  );
}
