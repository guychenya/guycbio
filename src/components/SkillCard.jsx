import React from 'react';

function SkillCard({ skill }) {
  return (
    <div className="skill-card">
      <span className="skill-tag">{skill}</span>
    </div>
  );
}

export default SkillCard;
