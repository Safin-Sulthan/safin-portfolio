import { FaEnvelope, FaGithub, FaLinkedin, FaFilePdf } from 'react-icons/fa';
import '../CSS/Contact.css';
import Narasapuram_Safin_Sulthan_Frontend_Developer_Resume from '../assets/Narasapuram_Safin_Sulthan_Frontend_Developer_Resume.pdf';
import PageWrapper from '../components/PageWrapper';
export default function Contact() {
  return (
    <>
      <title>Contact | Safin Sulthan</title>

      <meta
        name="description"
        content="Safin Sulthan is a frontend developer fresher open to learning-oriented opportunities, collaborations, and frontend roles. Reach out through available platforms."
      />

      <meta name="robots" content="index, follow" />
      <PageWrapper>
        <section className="contact-section mt-5 pt-5" id="contact">
          <div className="contact-container">
            <div className="contact-header">
              <h2 className="contact-title">// Contact</h2>
              <div className="contact-divider"></div>

              <p className="contact-text">
                I’m a fresher with a strong interest in frontend development and
                open to learning-oriented opportunities. If you’d like to
                connect or share any relevant opportunities, you can reach me
                through the platforms below.
              </p>
            </div>

            <div className="contact-grid">
              <a
                href="mailto:nsafinsulthan@gmail.com"
                className="contact-card"
                aria-label="Email"
              >
                <FaEnvelope />
                <h4>Email</h4>
                <p>Reach me directly via email</p>
              </a>

              <a
                href="https://github.com/Safin-Sulthan"
                target="_blank"
                rel="noreferrer"
                className="contact-card"
                aria-label="GitHub"
              >
                <FaGithub />
                <h4>GitHub</h4>
                <p>View my projects and code</p>
              </a>

              <a
                href="https://www.linkedin.com/in/safin-sulthan-059228275/"
                target="_blank"
                rel="noreferrer"
                className="contact-card"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
                <h4>LinkedIn</h4>
                <p>Let’s connect professionally</p>
              </a>

              <a
                href={Narasapuram_Safin_Sulthan_Frontend_Developer_Resume}
                target="_blank"
                rel="noreferrer"
                className="contact-card"
                aria-label="Resume"
              >
                <FaFilePdf />
                <h4>Resume</h4>
                <p>View or download my resume</p>
              </a>
            </div>
          </div>
        </section>
      </PageWrapper>
    </>
  );
}
