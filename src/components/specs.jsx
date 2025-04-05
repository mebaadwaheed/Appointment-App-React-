import NeurologistPNG from '../assets/Frame 1000000833 (4).png';
import CardiologistPNG from '../assets/Frame 1000000833 (5).png';
import PulmonologistPNG from '../assets/Frame 1000000833 (6).png';
import NephrolohistPNG from '../assets/Frame 1000000833 (7).png';
import DoctorSpecialty from './doctor-specialty';
import '../component-styles/specs.css';

export default function Specs() {
  return (
    <>
      <div className="main">
        <div className="header-new">
          <h3>Popular Doctor Specialties</h3>
        </div>
        <div className="specialties-container">
          <DoctorSpecialty
            image={NeurologistPNG}
            specialty="Neurologist"
          />
          <DoctorSpecialty
            image={CardiologistPNG}
            specialty="Cardiologist"
          />
          <DoctorSpecialty
            image={PulmonologistPNG}
            specialty="Pulmonologist"
          />
          <DoctorSpecialty
            image={NephrolohistPNG}
            specialty="Nephrologist"
          />
        </div>
      </div>
    </>
  );
}