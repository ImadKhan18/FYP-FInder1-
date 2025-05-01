import React from 'react'

const SupervisorHighlights = () => {
    return (
      <section className="my-8">
        <h2 className="text-2xl font-semibold mb-4">Why Use This Platform?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 bg-blue-100 rounded-lg shadow">
            <h3 className="font-bold">Easy Search</h3>
            <p>Quickly find supervisors by domain or availability.</p>
          </div>
          <div className="p-4 bg-green-100 rounded-lg shadow">
            <h3 className="font-bold">Bookmark Feature</h3>
            <p>Save supervisors to review later with one click.</p>
          </div>
          <div className="p-4 bg-yellow-100 rounded-lg shadow">
            <h3 className="font-bold">Stay Informed</h3>
            <p>See slot availability and contact info at a glance.</p>
          </div>
        </div>
      </section>
    );
  };
  
  export default SupervisorHighlights;
  
