import React from 'react';

function Education({ education }) {
  return (
    <section id="education-certifications">
      <h3>EDUCATION & CERTIFICATIONS</h3>
      <p dangerouslySetInnerHTML={{ __html: education.mba }} />
      <p dangerouslySetInnerHTML={{ __html: education.bsc }} />
      <p dangerouslySetInnerHTML={{ __html: education.certifications }} />
    </section>
  );
}

export default Education;
