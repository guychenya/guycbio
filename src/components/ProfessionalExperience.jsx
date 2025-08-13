import React from 'react';

const Job = ({ company, roles }) => (
  <div className="job">
    <h4>{company}</h4>
    {roles.map((role, index) => (
      <div key={index}>
        <h5>{role.title} ({role.period})</h5>
        <ul>
          {role.points.map((point, i) => (
            <li key={i} dangerouslySetInnerHTML={{ __html: point }} />
          ))}
        </ul>
      </div>
    ))}
  </div>
);

function ProfessionalExperience({ experience }) {
  return (
    <section id="professional-experience">
      <h3>PROFESSIONAL EXPERIENCE</h3>
      {experience.map((exp, index) => (
        <Job key={index} {...exp} />
      ))}
    </section>
  );
}

export default ProfessionalExperience;
