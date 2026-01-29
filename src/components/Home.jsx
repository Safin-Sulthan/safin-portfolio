import '../CSS/Home.css';
import profilePicture from '../assets/profilePicture.png';
import { useState, useEffect, useRef } from 'react';
import Narasapuram_Safin_Sulthan_Frontend_Developer_Resume from '../assets/Narasapuram_Safin_Sulthan_Frontend_Developer_Resume.pdf';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { FaHandSparkles } from 'react-icons/fa';
import PageWrapper from '../components/PageWrapper';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  useEffect(() => {
    // Title
    document.title = 'Safin Sulthan | Frontend Developer';

    // Meta description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.name = 'description';
      document.head.appendChild(metaDesc);
    }
    metaDesc.content =
      'Safin Sulthan is a frontend developer skilled in HTML, CSS, JavaScript, React, and modern UI development. Fresher open to learning-oriented frontend opportunities.';

    // Author
    let metaAuthor = document.querySelector('meta[name="author"]');
    if (!metaAuthor) {
      metaAuthor = document.createElement('meta');
      metaAuthor.name = 'author';
      document.head.appendChild(metaAuthor);
    }
    metaAuthor.content = 'Safin Sulthan';

    // Robots
    let metaRobots = document.querySelector('meta[name="robots"]');
    if (!metaRobots) {
      metaRobots = document.createElement('meta');
      metaRobots.name = 'robots';
      document.head.appendChild(metaRobots);
    }
    metaRobots.content = 'index, follow';
  }, []);
  const navigate = useNavigate();

  const isGlobalDeleting = useRef(false);

  const rolesText = [
    'Frontend Developer | React.js',
    'M.Sc Artificial Intelligence & Data Science',
  ];

  const [roleText, setRoleText] = useState('');
  const roleIndex = useRef(0);
  const roleCharIndex = useRef(0);

  useEffect(() => {
    const typeRole = () => {
      const currentRole = rolesText[roleIndex.current];

      if (!isGlobalDeleting.current) {
        setRoleText(currentRole.slice(0, roleCharIndex.current + 1));
        roleCharIndex.current += 1;

        if (roleCharIndex.current === currentRole.length) {
          setTimeout(() => {
            isGlobalDeleting.current = true;
          }, 1000);
        }
      } else {
        setRoleText(currentRole.slice(0, roleCharIndex.current - 1));
        roleCharIndex.current -= 1;

        if (roleCharIndex.current === 0) {
          isGlobalDeleting.current = false;
          roleIndex.current = (roleIndex.current + 1) % rolesText.length;
        }
      }
    };

    const interval = setInterval(typeRole, isGlobalDeleting.current ? 40 : 80);
    return () => clearInterval(interval);
  }, []);
  const quoteText = 'CLEAN • FAST • SCALABLE';
  const [typedText, setTypedText] = useState('');
  const quoteCharIndex = useRef(0);

  useEffect(() => {
    const typeQuote = () => {
      if (!isGlobalDeleting.current) {
        setTypedText(quoteText.slice(0, quoteCharIndex.current + 1));
        quoteCharIndex.current += 1;

        if (quoteCharIndex.current === quoteText.length) {
          // wait — deletion is controlled globally
        }
      } else {
        setTypedText(quoteText.slice(0, quoteCharIndex.current - 1));
        quoteCharIndex.current -= 1;

        if (quoteCharIndex.current === 0) {
          // wait for next typing cycle
        }
      }
    };

    const interval = setInterval(typeQuote, isGlobalDeleting.current ? 40 : 80);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <PageWrapper>
        <main>
          <section className="pt-5 mt-3">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-md-8 order-2 order-md-1 text-center text-md-start">
                  <h4 className="text-uppercase fs-6 fw-normal gap-2">
                    <FaHandSparkles className="icon text-warning" />
                    Hey there,
                  </h4>

                  <h1 className="display-4 fw-bold">I'm Safin Sulthan</h1>

                  <h2 className="fs-4 fw-medium text-danger font-mono">
                    &lt;{roleText}
                    <span className="cursor">|</span>&gt;
                  </h2>

                  <p className="fs-6 text-secondary mt-3">
                    I’m a Frontend Developer with hands-on experience building
                    responsive web applications using HTML, CSS, JavaScript, and
                    React. I enjoy creating clean user interfaces and working
                    with component-based architecture.
                  </p>

                  <div className="mt-4 d-flex flex-column flex-md-row gap-3 justify-content-center justify-content-md-start">
                    <button
                      className="btn btn-outline-light fw-semibold"
                      onClick={() => navigate('/contact')}
                    >
                      Contact
                    </button>
                    <button
                      className="btn btn-danger fw-semibold"
                      data-bs-toggle="modal"
                      data-bs-target="#resumeModal"
                    >
                      View Resume
                    </button>
                  </div>
                  <div className="mt-4 d-flex gap-4 justify-content-center justify-content-md-start social-icons">
                    <a
                      href="https://github.com/Safin-Sulthan"
                      target="-blank"
                      rel="noopener noreferer"
                      aria-label="GitHub"
                    >
                      <FaGithub />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/safin-sulthan-059228275/"
                      target="-blank"
                      rel="noopener noreferer"
                      aria-label="LinkedIn"
                    >
                      <FaLinkedinIn />
                    </a>
                    <a href="mailto:nsafinsulthan@gmail.com" aria-label="Email">
                      <HiOutlineMail />
                    </a>
                  </div>
                </div>
                <div className="col-md-4 order-1 order-md-2 d-flex justify-content-center mb-4 mb-md-0">
                  <div className="glass-card text-center">
                    <div className="profile-image-block">
                      <div className="profile-frame">
                        <img
                          src={profilePicture}
                          alt="Safin Sulthan"
                          className="profile-img"
                        />
                      </div>
                    </div>

                    <div className="availability-badge">
                      <span className="status-dot"></span>
                      Available for work
                    </div>

                    <p className="glass-quote font-mono">
                      {'{ '}
                      {typedText}
                      <span className="cursor">|</span>
                      {' }'}
                    </p>
                  </div>
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
                    src={Narasapuram_Safin_Sulthan_Frontend_Developer_Resume}
                    title="Resume Preview"
                    width="100%"
                    height="600px"
                    style={{ border: 'none' }}
                  />
                </div>
                <div className="modal-footer border-secondary">
                  <a
                    href={Narasapuram_Safin_Sulthan_Frontend_Developer_Resume}
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
        </main>
      </PageWrapper>
    </>
  );
}
