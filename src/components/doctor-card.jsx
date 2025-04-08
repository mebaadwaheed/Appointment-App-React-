import { Link } from 'react-router-dom';
import FacebookPNG from '../assets/f.png';
import LinkedInPNG from '../assets/in.png';
import TwitterPNG from '../assets/Vector-3-.png';
import DoctorCircle from '../assets/Ellipse1-2-.png';
import '../component-styles/doctor-card.css';

export default function DoctorCard({ name, job, description }) {
  return (
    <>
      <div className="card-container">
        <div className="card-cont-img">
          <img src={DoctorCircle} alt={name} className='card-img' />
        </div>
        <div className="main-text">
          <h4>{name}</h4>
          <h5>{job}</h5>
          <p>{description}</p>
          <div className="socials">
            <a href="#"><img src={FacebookPNG} alt="" /></a>
            <a href="#"><img src={LinkedInPNG} alt="" /></a>
            <a href="#"><img src={TwitterPNG} alt="" /></a>
          </div>
          <Link to="/appointment" className="btn">Book an appointment</Link>
        </div>
      </div>
    </>
  );
}