import React from 'react';

function CoreCompetencies({ competencies }) {
  return (
    <section id="core-competencies">
      <h3>CORE COMPETENCIES</h3>
      <ul>
        {competencies.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </section>
  );
}

export default CoreCompetencies;
