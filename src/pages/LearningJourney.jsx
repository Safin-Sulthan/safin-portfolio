import { FaGraduationCap, FaCode, FaReact, FaRocket } from 'react-icons/fa';
import PageWrapper from '../components/PageWrapper';
import '../CSS/LearningJourney.css';

export default function LearningJourney() {
  return (
    <>
      {/*  SEO */}
      <title>Learning Journey | Safin Sulthan</title>

      <meta
        name="description"
        content="Explore the learning journey of Safin Sulthan, a frontend developer who learned HTML, CSS, JavaScript, and React through self-study, consistent practice, and real-world projects."
      />

      <meta name="author" content="Safin Sulthan" />
      <meta name="robots" content="index, follow" />
      <PageWrapper>
        <section className="journey-section mt-5 pt-5 ">
          <div className="journey-container">
            <div className="journey-header">
              <h2 className="journey-title">// Learning Journey</h2>
              <div className="journey-divider"></div>
              <p className="journey-subtitle">
                My journey of learning frontend development through self-study,
                consistent practice, and project-based learning
              </p>
            </div>

            <div className="timeline">
              <div className="timeline-item">
                <div className="timeline-icon">
                  <FaGraduationCap />
                </div>
                <div className="timeline-line"></div>
                <div className="timeline-card">
                  <h4>Foundations of Web Development</h4>
                  <span className="timeline-date">Observational learning</span>
                  <p>
                    Started my frontend journey by learning HTML and CSS through
                    self-study and online resources. Focused on building a
                    strong foundation in semantic structure, layouts, and
                    responsive design principles through consistent practice.
                  </p>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-icon">
                  <FaCode />
                </div>
                <div className="timeline-line"></div>
                <div className="timeline-card">
                  <h4>JavaScript & Logic Building</h4>
                  <span className="timeline-date">ES6+</span>
                  <p>
                    Learned JavaScript fundamentals through continuous practice
                    and documentation. Focused on ES6 concepts, DOM
                    manipulation, and writing clean, structured logic through
                    small exercises and hands-on experimentation.
                  </p>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-icon">
                  <FaReact />
                </div>
                <div className="timeline-line"></div>
                <div className="timeline-card">
                  <h4>React & State Management</h4>
                  <span className="timeline-date">Major Projects</span>
                  <p>
                    Developed a structured understanding of React through
                    focused learning and consistent practice. Learned
                    component-based architecture, hooks, and state management,
                    and applied these concepts by building personal React
                    projects.
                  </p>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-icon">
                  <FaRocket />
                </div>
                <div className="timeline-line"></div>
                <div className="timeline-card">
                  <h4>Advanced UI & Animations</h4>
                  <span className="timeline-date">Ongoing</span>
                  <p>
                    Continuing to improve frontend skills by building projects,
                    refining UI, and learning modern tools such as Tailwind CSS
                    and Framer Motion. Focused on responsiveness, animations,
                    and creating clean, user-friendly experiences.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </PageWrapper>
    </>
  );
}
