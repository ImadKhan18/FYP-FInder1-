import React from 'react';

const TestimonialBox = ({ feedback, studentName, batch, image }) => {
  return (
    <div className="p-4 bg-gray-50 border-l-4 border-green-400 rounded shadow flex items-start gap-4">
      <img
        src={image}
        alt={`${studentName}'s profile`}
        className="w-12 h-12 rounded-full object-cover"
      />
      <div>
        <p className="italic text-gray-700">"{feedback}"</p>
        <p className="mt-2 text-sm text-gray-600">— {studentName}, Batch {batch}</p>
      </div>
    </div>
  );
};

export default TestimonialBox;
