import { useEffect, useRef, useState } from 'react';
import '../CSS/Education.css';
import PageWrapper from '../components/PageWrapper';

export default function Education() {
  useEffect(() => {
    // Page title
    document.title = 'Education | Safin Sulthan';

    // Meta description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.name = 'description';
      document.head.appendChild(metaDesc);
    }
    metaDesc.content =
      'Educational background of Safin Sulthan, including M.Sc in Artificial Intelligence & Data Science and undergraduate studies with strong academic performance.';

    // Robots
    let metaRobots = document.querySelector('meta[name="robots"]');
    if (!metaRobots) {
      metaRobots = document.createElement('meta');
      metaRobots.name = 'robots';
      document.head.appendChild(metaRobots);
    }
    metaRobots.content = 'index, follow';
  }, []);

  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // animate only once
        }
      },
      { threshold: 0.4 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <PageWrapper>
        <section ref={sectionRef} className="education-section my-5">
          <div className="container px-0">
            <h2 className="education-heading">// EDUCATION</h2>
            <div className="education-divider"></div>

            <div className="education-timeline">
              <div className="education-vertical-line"></div>

              {/* ===== M.Sc ===== */}
              <div className="education-item">
                <span className="education-dot"></span>

                <div className="education-content">
                  <h4 className="education-degree">
                    M.Sc Artificial Intelligence & Data Science
                  </h4>

                  <p className="education-institute">
                    Central University of Andhra Pradesh
                  </p>

                  <div className="education-range">
                    <span>Percentage (CGPA Equivalent): 76%</span>
                    <div className="range-bar">
                      <div
                        className="range-fill"
                        style={{ width: isVisible ? '76%' : '0%' }}
                      ></div>
                    </div>
                  </div>

                  <p className="education-exact">
                    CGPA (till 3rd Semester): <strong>8.0 / 10</strong>
                  </p>

                  <p className="education-year">2024 – 2026 (Expected)</p>
                </div>
              </div>

              <div className="education-item">
                <span className="education-dot"></span>

                <div className="education-content">
                  <h4 className="education-degree">
                    B.Sc (Cement Science, Computer Science & Chemistry)
                  </h4>

                  <p className="education-institute">
                    Penna College of Cement Science
                  </p>

                  <div className="education-range">
                    <span>Percentage: 84%</span>
                    <div className="range-bar">
                      <div
                        className="range-fill"
                        style={{ width: isVisible ? '84%' : '0%' }}
                      ></div>
                    </div>
                  </div>

                  <p className="education-exact">
                    Percentage: <strong>84%</strong>
                  </p>

                  <p className="education-year">2021 – 2024</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </PageWrapper>
    </>
  );
}
