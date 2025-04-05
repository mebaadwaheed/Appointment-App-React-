import MachineImage from "../assets/Section → why_choose_us.jpeg (1).png";
import FirstSmallPNG from "../assets/div.cs_iconbox_icon (4).png";
import SecondSmallPNG from "../assets/div.cs_iconbox_icon (5).png";
import ThirdSmallPNG from "../assets/div.cs_iconbox_icon (6).png";
import FourthSmallPNG from "../assets/div.cs_iconbox_icon (7).png";
import "../component-styles/why-choose-us.css";

function InnerPort({ image, text, description }) {
  return (
    <div className="allianz">
      <img src={image} alt="Machine" className="machine-image" />
      <div className="text-container">
        <h3 className="text">{text}</h3>
        <p className="description">{description}</p>
      </div>
    </div>
  );
}

export default function WhyChooseUs() {
  return (
    <>
      <div className="main-allianz">
        <div className="image-side">
          <img src={MachineImage} alt="" />
        </div>
        <div className="text-side">
          <div className="header">
            <h2>Why Choose Us?</h2>
          </div>
          <div className="inner-ports">
            <div className="first-ports">
              <InnerPort
                image={FirstSmallPNG}
                text="Experienced Medical Professionals"
                description="Our team includes experienced doctors, nurses, and other healthcare professionals who are dedicated to providing the best possible care to our patients."
              />
              <InnerPort
                image={SecondSmallPNG}
                text="Comprehensive Services"
                description="We offer a wide range of healthcare services, from preventive care to specialized treatment for complex conditions."
              />
            </div>
            <div className="second-ports">
              <InnerPort
                image={ThirdSmallPNG}
                text="Patient-Centered Approach"
                description="We believe in treating each patient as an individual, and we take the time to understand your unique health needs and concerns."
              />
              <InnerPort
                image={FourthSmallPNG}
                text="State-of-the-art Facilities"
                description="Our healthcare center is equipped with the latest technology and equipment to provide our patients with the most advanced care possible."
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}