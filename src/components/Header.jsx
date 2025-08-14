import React from 'react';
import ThemeSwitcher from './ThemeSwitcher';

const Icon = ({ path, className = 'w-5 h-5' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={className}>
    <path fillRule="evenodd" d={path} clipRule="evenodd" />
  </svg>
);

function Header({ name, titles, contact, profilePic }) {
  const icons = {
    location: "M10 2a8 8 0 00-8 8c0 5.25 8 12 8 12s8-6.75 8-12a8 8 0 00-8-8zm0 11a3 3 0 110-6 3 3 0 010 6z",
    phone: "M2.929 4.929a1 1 0 011.414 0L6 6.586A1 1 0 016 8.001L4.414 9.586a1 1 0 000 1.414l5.586 5.586a1 1 0 001.414 0L13 15.001a1 1 0 011.414 0l1.657 1.657a1 1 0 010 1.414l-1.999 1.999a1 1 0 01-1.414 0a15.025 15.025 0 01-12.02-12.02 1 1 0 010-1.414l1.999-1.999z",
    email: "M2.003 5.884L10 11.884l7.997-6M2 18h16a1 1 0 001-1V3a1 1 0 00-1-1H2a1 1 0 00-1 1v14a1 1 0 001 1z",
    linkedin: "M16 12.5a3.5 3.5 0 11-7 0 3.5 3.5 0 017 0zm-4.5 3.5h3a1.5 1.5 0 010 3h-3a1.5 1.5 0 010-3zM3 3h14a1 1 0 011 1v12a1 1 0 01-1 1H3a1 1 0 01-1-1V4a1 1 0 011-1z"
  };

  return (
    <header>
      <ThemeSwitcher />
      <img src={profilePic} alt="Guy Chenya" className="profile-pic" />
      <h1>{name}</h1>
      <h2>{titles.join(' | ')}</h2>
      <div className="contact-info">
        <span>
          <Icon path={icons.location} />
          {contact.location}
        </span>
        <a href={`tel:${contact.phone}`}>
          <Icon path={icons.phone} />
          {contact.phone}
        </a>
        <a href={`mailto:${contact.email}`}>
          <Icon path={icons.email} />
          {contact.email}
        </a>
        <a href={contact.linkedin} target="_blank" rel="noopener noreferrer">
          <Icon path={icons.linkedin} />
          LinkedIn
        </a>
      </div>
    </header>
  );
}

export default Header;
