import React from 'react';

const Placeholder = ({ width = 150, height = 150 }) => (
  <svg width={width} height={height} viewBox="0 0 150 150" xmlns="http://www.w3.org/2000/svg">
    <rect width="150" height="150" fill="#4a5a4a" />
    <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fill="#90b090" fontFamily="sans-serif" fontSize="14px">
      Your Photo
    </text>
  </svg>
);

export default Placeholder;
