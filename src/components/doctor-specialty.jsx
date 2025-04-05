import '../component-styles/doctor-specialty.css';

export default function Specialty({ image, specialty }) {
  return (
    <>
      <div className="specialty-card">
        <img src={image} alt={specialty} className="specialty-image" />
       <h2>{specialty}</h2>
      </div>
    </>
  );
}