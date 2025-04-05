import DoctorCard from "./doctor-card";
import "../component-styles/doc-card-cmplr.css";

export default function DoctorCardCompiler() {
  return (
    <>
      <div className="header">
        <h3>Meet Our</h3>
        <h1>Expert Doctors</h1>
      </div>
      <div className="compiler">
        <DoctorCard name="Dr. James Lee, MD" job="Head of Cardiologist" description="With expertise in managing complex heart conditions and performing advanced cardiac procedures" />
        <DoctorCard name="Dr. John Smith, MD" job="Emergency Medicine Physician" description="With expertise in treating acute illnesses and injuries in medicine physician" />
        <DoctorCard name="Dr. Susan Bones, MD" job="Board-Certified Pediatrician" description="With experience in managing complex medical conditions in children" />
      </div>
      <div className="down-buttons">
        <button>{">"}</button>
        <button>{"<"}</button>
      </div>
    </>
  );
}