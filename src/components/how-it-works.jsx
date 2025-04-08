import MagnifyPNG from '../assets/magnifying-glass1(1).png';
import VerifiedPNG from '../assets/verified1(1).png';
import AppointmentPNG from '../assets/online-appointment1(1).png';
import SolutionPNG from '../assets/solution1(1).png';
import CardLight from './card-light';
import '../component-styles/how-it-works.css';

export default function HowItWorks() {
  return (
    <>
      <div className="how-it-works">
        <div className="header">
          <h1>How It Works?</h1>
          <h4>4 Easy Steps To Get Your Solution</h4>
        </div>
        <div className="tech-container">
          <CardLight image={MagnifyPNG} title="Search Doctor" description="Lorem Ipsum Dolor Sit Amet Consectetur."/>
          <CardLight image={VerifiedPNG} title="Check Doctor Profile" description="Lorem Ipsum Dolor Sit Amet Consectetur."/>
          <CardLight image={AppointmentPNG} title="Schedule Appointment" description="Lorem Ipsum Dolor Sit Amet Consectetur."/>
          <CardLight image={SolutionPNG} title="Get Your Solution" description="Lorem Ipsum Dolor Sit Amet Consectetur."/>
        </div>
      </div>
    </>
  );
}