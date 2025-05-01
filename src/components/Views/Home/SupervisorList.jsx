import React from 'react';

const supervisors = [
  { id: 1, name: "Asif Ahsan", researchDomain: "AI", availableSlots: 2, contactInfo: "AsifAhsan@university.edu" },
  { id: 2, name: "Dr. Ehsan Elahi", researchDomain: "Cybersecurity", availableSlots: 0, contactInfo: "DrEhsanElahi@university.edu" },
  { id: 3, name: "Sadaf Ali", researchDomain: "Data Science", availableSlots: 1, contactInfo: "SadafAli@university.edu" },
  { id: 4, name: "Iqra Sabeen", researchDomain: "Machine Learning", availableSlots: 3, contactInfo: "IqraSabeen@university.edu" },
  { id: 5, name: "Saman Asad", researchDomain: "Web Application", availableSlots: 0, contactInfo: "SamanAsad@university.edu" },
  { id: 6, name: "Mariya Bibi", researchDomain: "Machine Learning", availableSlots: 1, contactInfo: "MariyaBibi@university.edu" },
  { id: 7, name: "Rabiya Ali", researchDomain: "Cybersecurity", availableSlots: 2, contactInfo: "RabiyaAli@university.edu" },
  { id: 8, name: "Atifa Arooj", researchDomain: "Data Science", availableSlots: 0, contactInfo: "AtifaArooj@university.edu" },
  { id: 9, name: "Salman Irfan", researchDomain: "Web Application", availableSlots: 0, contactInfo: "SalmanIrfan@university.edu" },
  { id: 10, name: "Ali Raza", researchDomain: "AI", availableSlots: 3, contactInfo: "AliRaza@university.edu" },
];

const SupervisorList = () => {
  const bookmarkSupervisor = (id) => {
    let bookmarks = JSON.parse(localStorage.getItem("bookmarkedSupervisors")) || [];
    if (!bookmarks.includes(id)) {
      bookmarks.push(id);
      localStorage.setItem("bookmarkedSupervisors", JSON.stringify(bookmarks));
      alert("Supervisor bookmarked!");
    } else {
      alert("Supervisor already bookmarked!");
    }
  };

  return (
    <div className="max-w-5xl mx-auto mt-10 px-4">
      <h1 className="text-2xl font-bold mb-6 text-center">Available Supervisors</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {supervisors.map((sup) => (
          <div key={sup.id} className="p-4 border rounded-lg shadow bg-white">
            <h2 className={`text-xl font-bold mb-1 ${sup.name === "Salman Irfan" ? "text-red-500" : ""}`}>
              {sup.name}
            </h2>
            <p><strong>Domain:</strong> {sup.researchDomain}</p>
            <p><strong>Slots:</strong> {sup.availableSlots}</p>
            <p><strong>Contact:</strong> {sup.contactInfo}</p>
            <button
              onClick={() => bookmarkSupervisor(sup.id)}
              className="mt-3 px-4 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Bookmark
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SupervisorList;
