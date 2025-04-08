import AppImage from '../assets/image-1-.png';
import AppImageDots from '../assets/mockupsplusdots-1-.png';
import GooglePlay from '../assets/google_play.png';
import AppStore from '../assets/apple_store.png';
import LeftArrowPointing from '../assets/Vector-4-.png';
import '../component-styles/app-adv.css';

export default function AppAdv() { 
  return (
    <>C:\Users\DELL\OneDrive\Desktop\Appointment App (React)\appointment-app\src\assets>
      <div className="app-cont">
        <div className="app-imgs">
          <img src={AppImageDots} alt="" />
          <img src={AppImage} alt="" />
        </div>
        <div className="app-text">
          <img src={LeftArrowPointing} alt="" />
          <div className="main-app-text">
            <h1>Download Our Medical <br /> App</h1>
            <div className="app-buttons">
              <button><img src={GooglePlay} alt="" /></button>
              <button><img src={AppStore} alt="" /></button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}