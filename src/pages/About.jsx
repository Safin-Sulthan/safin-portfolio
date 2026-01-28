import React, { useEffect, useRef } from 'react';
import aboutimage from '../assets/aboutimage.png';
import '../CSS/About.css';
import PageWrapper from '../components/PageWrapper';
export default function About() {
  useEffect(() => {
    // Page title
    document.title = 'About | Safin Sulthan';

    // Meta description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.name = 'description';
      document.head.appendChild(metaDesc);
    }
    metaDesc.content =
      'Learn more about Safin Sulthan, a frontend developer fresher passionate about building modern, responsive user interfaces using React and JavaScript.';

    // Robots
    let metaRobots = document.querySelector('meta[name="robots"]');
    if (!metaRobots) {
      metaRobots = document.createElement('meta');
      metaRobots.name = 'robots';
      document.head.appendChild(metaRobots);
    }
    metaRobots.content = 'index, follow';
  }, []);

  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const heading = sectionRef.current.querySelector('.about-heading');
          const image = sectionRef.current.querySelector('.about-image-start');
          const text = sectionRef.current.querySelector('.about-text-start');

          heading.classList.add('show');
          image.classList.replace('about-image-start', 'about-image-animate');
          text.classList.replace('about-text-start', 'about-text-animate');

          observer.disconnect();
        }
      },
      { threshold: 0.3 },
    );

    observer.observe(sectionRef.current);
  }, []);

  return (
    <>
      <PageWrapper>
        <section className="about-section my-5" ref={sectionRef}>
          <div className="container px-0">
            <h2 className="about-heading">// ABOUT ME</h2>
            <div className="about-divider"></div>

            <div className="row align-items-center">
              <div className="col-md-5 mb-4 mb-md-0">
                <div className="about-image-start">
                  <img
                    src={aboutimage}
                    alt="about"
                    className="img-fluid"
                    style={{ maxWidth: '250px' }}
                  />
                </div>
              </div>

              <div className="col-md-7">
                <div className="about-text-start">
                  I’m Safin Sulthan, a Frontend Developer with hands-on
                  experience building responsive web applications using{' '}
                  <span className="highlight">HTML</span>,{' '}
                  <span className="highlight">CSS</span>,{' '}
                  <span className="highlight">JavaScript</span>, and{' '}
                  <span className="highlight">React</span>. I enjoy working with{' '}
                  <span className="highlight">
                    component-based architecture
                  </span>{' '}
                  and creating clean, user-friendly interfaces that focus on
                  usability and performance.
                  <br />
                  <br />
                  Alongside my frontend journey, I am currently pursuing an
                  M.Sc. in{' '}
                  <span className="highlight">
                    Artificial Intelligence & Data Science
                  </span>
                  . While my academic background has helped me develop a logical
                  and structured problem-solving mindset, my primary career
                  focus is frontend development. I continue to strengthen my
                  skills by building personal projects, experimenting with
                  modern UI patterns, and refining my understanding of scalable
                  frontend design.
                </div>
              </div>
            </div>
          </div>
        </section>
      </PageWrapper>
    </>
  );
}
