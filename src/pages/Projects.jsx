import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import '../CSS/Project.css';
import PageWrapper from '../components/PageWrapper';
export default function Projects() {
  return (
    <>
      <title>Projects | Safin Sulthan</title>

      <meta
        name="description"
        content="Frontend projects built by Safin Sulthan including a React-based Mini ATM project and a personal portfolio showcasing modern UI and state management."
      />

      <meta name="robots" content="index, follow" />

      <PageWrapper>
        <section className="projects-section pt-5 mt-5 ">
          <div className="projects-container">
            <div className="projects-header">
              <h2 className="projects-title">// Projects</h2>
              <div className="projects-divider"></div>
              <p className="projects-subtitle">
                A few projects I built to practice frontend concepts and improve
                my skills
              </p>
            </div>
            <div className="projects-grid">
              <div className="project-card">
                <h4 className="project-title">Mini ATM Application</h4>
                <p className="project-desc">
                  A frontend practice project built to understand Redux Toolkit
                  and global state management by simulating basic ATM operations
                  like deposit, withdrawal, balance check, and transaction
                  history.
                </p>

                <div className="project-tech">
                  <span>React</span>
                  <span>Redux Toolkit</span>
                  <span>JavaScript</span>
                  <span>CSS</span>
                </div>

                <div className="project-actions">
                  <a
                    href="https://github.com/Safin-Sulthan/mini-atm-react-redux"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaGithub /> Code
                  </a>
                  <a
                    href="https://safin-sulthan.github.io/mini-atm-react-redux/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaExternalLinkAlt /> Demo
                  </a>
                </div>
              </div>
              <div className="project-card">
                <h4 className="project-title">Personal Portfolio Website</h4>
                <p className="project-desc">
                  A responsive personal portfolio built using React to showcase
                  skills, projects, and learning journey. Focused on reusable
                  components, glassmorphism UI, dark/light mode, and clean
                  frontend architecture.
                </p>

                <div className="project-tech">
                  <span>React</span>
                  <span>CSS</span>
                  <span>Bootstrap</span>
                  <span>React Icons</span>
                </div>

                <div className="project-actions">
                  <a href="#" target="_blank" rel="noreferrer">
                    <FaGithub /> Code
                  </a>
                  <a href="#" target="_blank" rel="noreferrer">
                    <FaExternalLinkAlt /> Live
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </PageWrapper>
    </>
  );
}
