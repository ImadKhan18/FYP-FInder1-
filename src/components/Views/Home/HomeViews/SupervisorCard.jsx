import React from 'react';

const SupervisorCard = (props) => {
  console.log(props);  // Logs the received props

  return (
    <div className="p-4 border rounded-lg shadow-md bg-white">
      <h2 className={`text-xl font-bold ${props.name === 'Imad Khan' ? 'text-green-500' : ''}`}>
        {props.name}
      </h2>
      <p><strong>Domain:</strong> {props.researchDomain}</p>
      <p><strong>Available Slots:</strong> {props.availableSlots}</p>
      <p><strong>Contact:</strong> {props.contactInfo}</p>
      <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded">Bookmark</button>
    </div>
  );
};

export default SupervisorCard;
