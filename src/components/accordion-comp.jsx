import SettingPNG from '../assets/Group512783-1-.png'
import Accordion from './accordion';
import '../component-styles/accordion-cmp.css'
import { useState } from 'react';

export default function AccordionComp() {
  const [openAccordions, setOpenAccordions] = useState({});
    
  const toggleAccordion = (index) => {
    setOpenAccordions(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  }

  const accordionData = [
    {
      header: "What is the purpose of this website?",
      content: "This website is designed to provide information about the services offered by the company."
    },
    {
      header: "How do I book an appointment?",
      content: "You can book an appointment by selecting your preferred doctor and time slot from our available options."
    },
    {
      header: "What payment methods are accepted?",
      content: "We accept various payment methods including credit cards, debit cards, and online banking."
    },
    {
      header: "Can I cancel or reschedule my appointment?",
      content: "Yes, you can cancel or reschedule your appointment up to 24 hours before the scheduled time."
    },
    {
      header: "Is my medical information secure?",
      content: "Yes, we take data security seriously and ensure all your medical information is protected."
    },
    {
      header: "Do you offer emergency services?",
      content: "For medical emergencies, please contact emergency services directly. This platform is for scheduled appointments only."
    }
  ];

  return (
    <div className="accordion-comp">
      <div className="acc-header-2">
        <h1>Frequently Asked Questions</h1>
      </div>
      <div className="main-acc">
        <div className="accordion-items">
          <div className="head-accordions">
            <h2>FAQ</h2>
          </div>
          {accordionData.map((item, index) => (
            <Accordion
              key={index}
              header={item.header}
              content={item.content}
              isOpen={openAccordions[index] || false}
              onClick={() => toggleAccordion(index)}
            />
          ))}
        </div>
        <div className="accordion-img">
          <img src={SettingPNG} alt="" />
        </div>
      </div>
    </div>
  );
}
