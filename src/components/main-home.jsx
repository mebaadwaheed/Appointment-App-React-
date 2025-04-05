import '../component-styles/main-home.css'
import doctorGuy from '../assets/baba icon (1).png';


export default function MainHome() {
  return (
    <>
      <div className="main-home">
        <div className="main-home-text">
          <h1>Find a Doctor and Book an <span className='crapp'>APPOINTMENT</span></h1>
          <p>
            Lorem ipsum dolor sit amet consectetur. Tempus a <br />
            scelerisque lectus mauris nulla arcu enim nunc. 
            Consequat laoreet pellentesque proin ridiculus pharetra <br />
            rutrum augue purus eget. Iaculis ultrices leo <br />
            fermentum egestas nisl. Sit tincidunt vestibulum sem <br />
            netus amet ut nulla enim lacinia.
          </p>
          <div>
            <button className='button'><a href="#">Make Appointment</a></button>
          </div>
        </div>
        <div className="doctor-img">
          <img src={doctorGuy} alt="" className='doctor-png'/>
        </div>
      </div>
    </>
  );
}