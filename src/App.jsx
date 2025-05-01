import React from 'react';
// Main view components
import HeroSection from './components/Views/Home/Herosection';
import HowItWorks from './components/Views/Home/HowItWorks';
import SupervisorHighlights from './components/Views/Home/SuperVisorHighlights';
import CallToAction from './components/Views/Home/CallToAction';
import StudentFeedback from './components/Views/Home/StudentFeedback';
import SupervisorList from './components/Views/Home/SupervisorList';

// Components using props
import SupervisorCard from './components/Views/Home/HomeViews/SupervisorCard';
import TestimonialBox from './components/Views/Home/HomeViews/TestimonialBox';

// Component using children props
import SectionContainer from './components/Views/Home/HomeViews/SectionContainer'; // ✅ Don't forget this

const App = () => {
  const supervisorData = {
    name: "Imad Khan",
    researchDomain: "AI",
    availableSlots: 3, // Sample data passed via props
    contactInfo: "imad.khan@university.edu"
  };

  return (
    <>
      <HeroSection />
      <HowItWorks />
      <SupervisorHighlights />
      <CallToAction />
      <SupervisorList />

      <SupervisorCard {...supervisorData} />

      <TestimonialBox
        feedback="Finding a supervisor was so smooth with this tool!"
        studentName="Ahsan Ali"
        batch="2023"
        image="https://randomuser.me/api/portraits/men/45.jpg"
      />

      <SectionContainer title="Top Supervisors">
        <SupervisorCard {...supervisorData} />  
      </SectionContainer>




      <StudentFeedback />
    </>
  );
};

export default App;
