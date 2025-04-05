import DownArrowPNG from '../assets/Down (1).png';
import '../component-styles/accordion.css';

export default function Accordion({ header, content, isOpen, onClick }) {
  return (
    <div className="accordion-main" data-open={isOpen}>
      <div className="acc-header" onClick={onClick}>
        <h2>{header}</h2>
        <button>
          <img src={DownArrowPNG} alt="Down Arrow" />
        </button>
      </div>
      {isOpen && 
        <div className='main-acc-content'>
          <p>{content}</p>
          <div className="button-acc">
            <button><a href="#">Learn More</a></button>
          </div>
        </div>
      } 
    </div>
  );
}
