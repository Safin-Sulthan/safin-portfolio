import { useState } from 'react';
import SkillCard from '../components/SkillCard';
import { skillsData } from '../data/skillsData';
import PageWrapper from '../components/PageWrapper';
import '../CSS/Skills.css';
export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('Frontend');

  return (
    <>
      <title>Skills | Safin Sulthan</title>

      <meta
        name="description"
        content="Frontend skills of Safin Sulthan including HTML, CSS, JavaScript, React, Redux Toolkit, Tailwind CSS, Bootstrap, and modern UI tools."
      />

      <meta name="robots" content="index, follow" />
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
