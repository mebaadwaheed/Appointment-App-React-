import MainGirlPNG from '../assets/BG-5-.png';
import LeftSideGirlPNG from '../assets/BG-6-.png';
import RightSideGirlPNG from '../assets/BG-7-.png';
import StarReviewsPNG from '../assets/Frame57-1-.png'
import '../component-styles/reviews.css';
import { useState } from 'react';

function CardProp({ image, name, job, title, description, isActive, stars }) {
  return (
    <div className={isActive ? 'active-n' : 'card-prop'}>
      <div className={isActive ? 'active-author-details' : 'author-details'}>
        <img src={image} alt="" />
        <div className={isActive ? 'active-author-info' : 'author-info'}>
          <h2 className={isActive ? 'active-name' : 'name-prop'}>{name}</h2>
          <h2 className={isActive ? 'active-job' : 'job-prop'}>{job}</h2>
        </div>
      </div>
      <div className={isActive ? 'active-review' : 'main-review'}>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <div>
        <img src={stars} alt="" className={isActive ? 'active-stars' : 'rev-stars'}/>
      </div>
    </div>
  );
}

export default function Reviews() {
  const [activeIndex, setActiveIndex] = useState(1); // Start with middle card active

  const reviews = [
    {
      stars: StarReviewsPNG,
      image: LeftSideGirlPNG,
      name: 'Jane Smith',
      job: 'Doctor',
      title: 'Very Useful',
      description: 'As a doctor, this app has made my life so much easier. Thank you!'
    },
    {
      stars: StarReviewsPNG,
      image: MainGirlPNG,
      name: 'John Doe',
      job: 'Software Engineer',
      title: 'Great App!',
      description: 'This app has changed the way I book appointments. Highly recommend!'
    },
    {
      stars: StarReviewsPNG,
      image: RightSideGirlPNG,
      name: 'Emily Johnson',
      job: 'Patient',
      title: 'Amazing Experience',
      description: 'I had a great experience using this app to find a doctor.'
    }
  ];

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length);
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % reviews.length);
  };

  return (
    <div className="carousel-items">
      <div className="header-car">
        <h1>What our Patients say about Us</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipiscing elit semper dalar elementum tempus hac tellus libero accumsan. </p>
      </div>
      <div className="card-carousel">
        {reviews.map((review, index) => (
          <CardProp
            key={index}
            image={review.image}
            name={review.name}
            job={review.job}
            title={review.title}
            description={review.description}
            stars={review.stars}
            isActive={index === activeIndex}
          />
        ))}
      </div>
      <div className="nav-buttons">
        <button onClick={handlePrev}>{"<"}</button>
        <button onClick={handleNext}>{">"}</button>
      </div>
    </div>
  );
}