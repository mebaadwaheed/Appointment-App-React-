import DoctorGirlPNG from '../assets/Rectangle 1550 (1).png';
import '../component-styles/apply.css';

export default function ApplySign() {
  return (
    <div className="main-apply">
      <div className="form-apply">
        <div className="head-app">
          <p>Appointment</p>
          <h3>Apply For Free Now</h3>
        </div>
        <div className="input-apply">
          <div className="first-inputs">
            <input type="text" placeholder='Name'/>
            <input type="email" placeholder='Email Address'/>
          </div>
          <div className="second-inputs">
            <select name="Type of Services" id="" placeholder='Type of Services'>
              <option value="Type of Services">Type of Services</option>
              <option value="Home Visit">Home Visit</option>
              <option value="Telemedicine">Telemedicine</option>
              <option value="In Clinic">In Clinic</option>
            </select>
            <input type="date" name="" id="" />
          </div>
          <div className="third-inputs">
            <input type="number" name="" id="" placeholder='Phone Number' />
            <button><a href="#">Make Appointment</a></button>
          </div>
        </div>
      </div>
      <div className="form-img">
        <img src={DoctorGirlPNG} alt="" />
      </div>
    </div>
  );
}