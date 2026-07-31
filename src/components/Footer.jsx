import { Link } from "react-router-dom";
import "../Styles/footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-links">
        <Link to="/">OrganLink</Link>
        <a href="#privacy">Privacy Policy</a>
        <a href="#terms">Terms of Service</a>
        <a href="#contact">Contact Support</a>
      </div>
      <div className="footer-copy">
        <p>&copy; {new Date().getFullYear()} OrganLink. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
