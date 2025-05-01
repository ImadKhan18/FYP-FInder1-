import React from 'react'

const StudentFeedback = () => {
    return (
      <section className="my-8">
        <h2 className="text-2xl font-semibold mb-4">Student Feedback</h2>
        <div className="space-y-4">
          <div className="bg-gray-100 p-4 rounded shadow">
            <p>“This tool saved me so much time. Found my supervisor in minutes!”</p>
            <span className="text-sm text-gray-500">— Ayesha K., CS Student</span>
          </div>
          <div className="bg-gray-100 p-4 rounded shadow">
            <p>“Love the filter and bookmark feature. Super easy to use!”</p>
            <span className="text-sm text-gray-500">— Hamza R., SE Student</span>
          </div>
        </div>
      </section>
    );
  };
  
  export default StudentFeedback;
  
