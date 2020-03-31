import React from 'react';

const Footer = () => {
  const currentYear = new Intl.DateTimeFormat('en-US', {
    year: 'numeric'
  }).format(new Date());

  return (
    <footer>
      <p>©{currentYear} brettf ‹•› I love 🥑 </p>
    </footer>
  );
};

export default Footer;
