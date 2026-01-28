import { FaEnvelope, FaGithub, FaLinkedin, FaFilePdf } from 'react-icons/fa';
import { useEffect } from 'react';
import '../CSS/Contact.css';
import Narasapuram_Safin_Sulthan_Frontend_Developer_Resume from '../assets/Narasapuram_Safin_Sulthan_Frontend_Developer_Resume.pdf';
import PageWrapper from '../components/PageWrapper';
export default function Contact() {
  useEffect(() => {
    // Page title
    document.title = 'Contact | Safin Sulthan';

    // Meta description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.name = 'description';
      document.head.appendChild(metaDesc);
    }
    metaDesc.content =
      'Contact Safin Sulthan, a frontend developer open to learning-oriented opportunities, collaborations, and frontend roles. Reach out via email, GitHub, or LinkedIn.';

    // Robots
    let metaRobots = document.querySelector('meta[name="robots"]');
    if (!metaRobots) {
      metaRobots = document.createElement('meta');
      metaRobots.name = 'robots';
      document.head.appendChild(metaRobots);
    }
    metaRobots.content = 'index, follow';
  }, []);

  return (
    <>
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

              <div
                className="contact-card"
                role="button"
                aria-label="Resume"
                data-bs-toggle="modal"
                data-bs-target="#resumeModal"
              >
                <FaFilePdf />
                <h4>Resume</h4>
                <p>View or download my resume</p>
              </div>
            </div>
          </div>
        </section>
        <div
          className="modal fade"
          id="resumeModal"
          tabIndex="-1"
          aria-labelledby="resumeModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-xl modal-dialog-centered modal-dialog-scrollable">
            <div className="modal-content bg-dark text-light">
              <div className="modal-header border-secondary">
                <h5 className="modal-title" id="resumeModalLabel">
                  My Resume
                </h5>
                <button
                  type="button"
                  className="btn-close btn-close-white"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>

              <div className="modal-body p-0">
                <iframe
                  src="/safin-portfolio/Narasapuram_Safin_Sulthan_Frontend_Developer_Resume.pdf"
                  title="Resume Preview"
                  width="100%"
                  height="600px"
                  style={{ border: 'none' }}
                />
              </div>

              <div className="modal-footer border-secondary">
                <a
                  href="/safin-portfolio/Narasapuram_Safin_Sulthan_Frontend_Developer_Resume.pdf"
                  download
                  className="btn btn-outline-light"
                >
                  Download Resume
                </a>
                <button
                  type="button"
                  className="btn btn-danger"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </PageWrapper>
    </>
  );
}
