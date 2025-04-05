import '../component-styles/card-light.css';

export default function CardLight({ image, title, description }) {
  return (
    <div className="card-light">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}