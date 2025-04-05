import HeartPNG from '../assets/Heart with Pulse.png';
import '../component-styles/footer.css';

export default function Footer() {
  return (
    <>
      <div className="main-footer">
        <div className="footer-left">
          <div className="logo-foot">
            <img src={HeartPNG} alt="" />
            <p>HealthCare</p>
          </div>
          <div className="copyright">
            <p>Copyright © 2025 BRIX Templates | All Rights Reserved </p>
            <p>Developed by Ebaad Designed by IDK</p>
          </div>
        </div>
        <div className="footer-right">
          <div className="product-li">
            <h3>Product</h3>
            <p><a href="#">Features</a></p>
            <p><a href="#">Pricing</a></p>
            <p><a href="#">Case Studies</a></p>
            <p><a href="#">Reviews</a></p>
            <p><a href="#">Updates</a></p>
          </div>
          <div className="company-li">
            <h3>Company</h3>
            <p><a href="#">About Us</a></p>
            <p><a href="#">Contact Us</a></p>
            <p><a href="#">Careers</a></p>
            <p><a href="#">Culture</a></p>
            <p><a href="#">Blog</a></p>
          </div>
          <div className="support-li">
            <h3>Support</h3>
            <p><a href="#">Getting Started</a></p>
            <p><a href="#">Help Center</a></p>
            <p><a href="#">Server Statue</a></p>
            <p><a href="#">Report A Bug</a></p>
            <p><a href="#">Chat Support/Security</a></p>
          </div>
          <div className="follow-us-li">
            <h3>Follow Us</h3>
            <p><a href="#">Facebook</a></p>
            <p><a href="#">Twitter</a></p>
            <p><a href="#">Instagram</a></p>
            <p><a href="#">LinkedIn</a></p>
            <p><a href="#">YouTube</a></p>
          </div>
        </div>
      </div>
    </>
  );
}