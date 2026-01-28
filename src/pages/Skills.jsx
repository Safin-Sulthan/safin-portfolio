import { useState, useEffect } from 'react';
import SkillCard from '../components/SkillCard';
import { skillsData } from '../data/skillsData';
import PageWrapper from '../components/PageWrapper';
import '../CSS/Skills.css';
export default function Skills() {
  useEffect(() => {
    // Page title
    document.title = 'Skills | Safin Sulthan';

    // Meta description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.name = 'description';
      document.head.appendChild(metaDesc);
    }
    metaDesc.content =
      'Frontend skills of Safin Sulthan including HTML, CSS, JavaScript, React, Redux Toolkit, Bootstrap, and modern UI development tools.';

    // Robots
    let metaRobots = document.querySelector('meta[name="robots"]');
    if (!metaRobots) {
      metaRobots = document.createElement('meta');
      metaRobots.name = 'robots';
      document.head.appendChild(metaRobots);
    }
    metaRobots.content = 'index, follow';
  }, []);

  const [activeCategory, setActiveCategory] = useState('Frontend');

  return (
    <>
      <PageWrapper>
        <section className="skills-section">
          <div className="skills-container">
            <div className="skills-header">
              <h2 className="skills-title">Skills</h2>
              <div className="skills-divider"></div>
              <p className="skills-subtitle">
                Technologies I use to build real-world projects
              </p>
            </div>
            <div className="skills-categories">
              <ul className="category-list">
                {['Frontend', 'Tools'].map((category) => (
                  <li
                    key={category}
                    className={`category-item ${
                      activeCategory === category ? 'active' : ''
                    }`}
                    onClick={() => setActiveCategory(category)}
                  >
                    {category}
                  </li>
                ))}
              </ul>
            </div>
            <div className="skills-grid row gx-4 gy-4">
              {skillsData
                .filter((skill) => skill.category === activeCategory)
                .map((skill) => (
                  <div key={skill.name} className="col-lg-4 col-md-6 col-12">
                    <SkillCard {...skill} />
                  </div>
                ))}
            </div>
            <div className="skills-info">
              <span>Click a skill card to view details</span>
            </div>
          </div>
        </section>
      </PageWrapper>
    </>
  );
}
