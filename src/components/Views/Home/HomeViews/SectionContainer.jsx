import React from 'react';

const SectionContainer = ({ title, children }) => {
  return (
    <section className="mb-6 p-6 bg-white rounded-lg shadow-md">
      {title && <h2 className="text-xl font-semibold mb-4">{title}</h2>}
      {children}
    </section>
  );
};

export default SectionContainer;
