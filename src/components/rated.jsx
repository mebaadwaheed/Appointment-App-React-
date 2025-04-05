import SurgeonsPNG from '../assets/pexels-rdne-stock-project-6129499 (1) 1 (1).png';
import RatedStarPNG from '../assets/Vector (2).png'
import '../component-styles/rated.css';

export default function DoctorRated() {
  return (
    <>
      <div className="rated-container">
        <img src={SurgeonsPNG} alt="" className='ragasurgz'/>
        <div className="left-tech">
          <div className="top-rated">
            <img src={RatedStarPNG} alt="" />
            <p>Rated #1 for Appointments with many Professional Doctors</p>
          </div>
          <h2>
            We're revolutionizing healthcare with <br />
            seamless access to trusted professionals, <br />
            prioritizing your journey to better health.
          </h2>
          <div className="stats">
            <div className="first-stat">
              <h1>40+</h1>
              <p>Dedicated Doctors</p>
            </div>
            <div className="second-stat">
              <h1>10K+ Hours</h1>
              <p>Of Patient Consultations</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}