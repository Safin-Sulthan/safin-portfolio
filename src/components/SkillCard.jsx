import { useState } from 'react';

export default function SkillCard({
  icon,
  name,
  level,
  dots,
  usage,
  focus,
  details,
}) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className="skill-card"
      aria-expanded={expanded}
      onClick={() => setExpanded(!expanded)}
    >
      <div className="skill-header">
        <div className="skill-icon">{icon}</div>
        <h4 className="skill-name">{name}</h4>
      </div>

      <div className="skill-confidence">
        <span className="confidence-label">{level}</span>
        <div className="confidence-dots">
          {[1, 2, 3, 4, 5].map((i) => (
            <span
              key={i}
              className={`dot ${i <= dots ? 'active' : ''}`}
            />
          ))}
        </div>
      </div>

      <div className="skill-meta">
        <p className="skill-usage">{usage}</p>
        <p className="skill-focus">{focus}</p>
      </div>

      {expanded && (
        <div className="skill-expand">
          <ul>
            {details.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
