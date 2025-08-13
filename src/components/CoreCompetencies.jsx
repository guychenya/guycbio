import React from 'react';
import SkillCard from './SkillCard';

function CoreCompetencies({ competencies }) {
  return (
    <section id="core-competencies">
      <h3>CORE COMPETENCIES</h3>
      <div className="skills-grid">
        {competencies.map((skill, index) => (
          <SkillCard key={index} skill={skill} />
        ))}
      </div>
    </section>
  );
}

export default CoreCompetencies;
