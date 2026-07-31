import { Link } from "react-router-dom";
import "../Styles/about.css";

const AboutDonation = () => {
  return (
    <div className="about-container">
      <section className="about-hero">
        <div className="about-hero-content">
          <h1>
            Understanding Organ
            <br />
            Donation: The Gift of Life.
          </h1>
        </div>
        <div className="about-hero-image">
          <img src="/images/body.jpg" alt="Human Body Organs" />
        </div>
      </section>

      <section className="about-grid">
        <div className="about-card">
          <h3>How Your Gift Saves Lives</h3>
          <p>A short, moving text intro to organ and transplant offer you.</p>
          <div className="icon-circle-row">
            <div className="icon-circle">
              <div className="circle circle-pink">
                <img src="/images/heart.jpg" alt="heart" />
              </div>
              <span>Heart and Lung</span>
            </div>
            <div className="icon-circle">
              <div className="circle circle-red">
                <img src="/images/kidney.jpg" alt="kidney" />
              </div>
              <span>Kidney and Liver</span>
            </div>
            <div className="icon-circle">
              <div className="circle circle-blue">
                <img src="/images/eye.jpg" alt="eye" />
              </div>
              <span>Tissue donation</span>
            </div>
          </div>
        </div>

        <div className="about-card">
          <h3>Common Myths Debunked</h3>
          <table className="myth-table">
            <thead>
              <tr>
                <th>Myth</th>
                <th>Truth</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-person-raised-hand"
                    viewBox="0 0 16 16"
                  >
                    <path d="M6 6.207v9.043a.75.75 0 0 0 1.5 0V10.5a.5.5 0 0 1 1 0v4.75a.75.75 0 0 0 1.5 0v-8.5a.25.25 0 1 1 .5 0v2.5a.75.75 0 0 0 1.5 0V6.5a3 3 0 0 0-3-3H6.236a1 1 0 0 1-.447-.106l-.33-.165A.83.83 0 0 1 5 2.488V.75a.75.75 0 0 0-1.5 0v2.083c0 .715.404 1.37 1.044 1.689L5.5 5c.32.32.5.754.5 1.207" />
                    <path d="M8 3a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" />
                  </svg>{" "}
                  Donor: you stop
                </td>
                <td>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-lightbulb"
                    viewBox="0 0 16 16"
                  >
                    <path d="M2 6a6 6 0 1 1 10.174 4.31c-.203.196-.359.4-.453.619l-.762 1.769A.5.5 0 0 1 10.5 13a.5.5 0 0 1 0 1 .5.5 0 0 1 0 1l-.224.447a1 1 0 0 1-.894.553H6.618a1 1 0 0 1-.894-.553L5.5 15a.5.5 0 0 1 0-1 .5.5 0 0 1 0-1 .5.5 0 0 1-.46-.302l-.761-1.77a2 2 0 0 0-.453-.618A5.98 5.98 0 0 1 2 6m6-5a5 5 0 0 0-3.479 8.592c.263.254.514.564.676.941L5.83 12h4.342l.632-1.467c.162-.377.413-.687.676-.941A5 5 0 0 0 8 1" />
                  </svg>{" "}
                  What is truth?
                </td>
              </tr>
              <tr>
                <td>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-person-raised-hand"
                    viewBox="0 0 16 16"
                  >
                    <path d="M6 6.207v9.043a.75.75 0 0 0 1.5 0V10.5a.5.5 0 0 1 1 0v4.75a.75.75 0 0 0 1.5 0v-8.5a.25.25 0 1 1 .5 0v2.5a.75.75 0 0 0 1.5 0V6.5a3 3 0 0 0-3-3H6.236a1 1 0 0 1-.447-.106l-.33-.165A.83.83 0 0 1 5 2.488V.75a.75.75 0 0 0-1.5 0v2.083c0 .715.404 1.37 1.044 1.689L5.5 5c.32.32.5.754.5 1.207" />
                    <path d="M8 3a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" />
                  </svg>{" "}
                  Donor: you eat
                </td>
                <td>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-lightbulb"
                    viewBox="0 0 16 16"
                  >
                    <path d="M2 6a6 6 0 1 1 10.174 4.31c-.203.196-.359.4-.453.619l-.762 1.769A.5.5 0 0 1 10.5 13a.5.5 0 0 1 0 1 .5.5 0 0 1 0 1l-.224.447a1 1 0 0 1-.894.553H6.618a1 1 0 0 1-.894-.553L5.5 15a.5.5 0 0 1 0-1 .5.5 0 0 1 0-1 .5.5 0 0 1-.46-.302l-.761-1.77a2 2 0 0 0-.453-.618A5.98 5.98 0 0 1 2 6m6-5a5 5 0 0 0-3.479 8.592c.263.254.514.564.676.941L5.83 12h4.342l.632-1.467c.162-.377.413-.687.676-.941A5 5 0 0 0 8 1" />
                  </svg>{" "}
                  What is truth?
                </td>
              </tr>
              <tr>
                <td>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-person-raised-hand"
                    viewBox="0 0 16 16"
                  >
                    <path d="M6 6.207v9.043a.75.75 0 0 0 1.5 0V10.5a.5.5 0 0 1 1 0v4.75a.75.75 0 0 0 1.5 0v-8.5a.25.25 0 1 1 .5 0v2.5a.75.75 0 0 0 1.5 0V6.5a3 3 0 0 0-3-3H6.236a1 1 0 0 1-.447-.106l-.33-.165A.83.83 0 0 1 5 2.488V.75a.75.75 0 0 0-1.5 0v2.083c0 .715.404 1.37 1.044 1.689L5.5 5c.32.32.5.754.5 1.207" />
                    <path d="M8 3a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" />
                  </svg>{" "}
                  Myth's not
                </td>
                <td>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-lightbulb"
                    viewBox="0 0 16 16"
                  >
                    <path d="M2 6a6 6 0 1 1 10.174 4.31c-.203.196-.359.4-.453.619l-.762 1.769A.5.5 0 0 1 10.5 13a.5.5 0 0 1 0 1 .5.5 0 0 1 0 1l-.224.447a1 1 0 0 1-.894.553H6.618a1 1 0 0 1-.894-.553L5.5 15a.5.5 0 0 1 0-1 .5.5 0 0 1 0-1 .5.5 0 0 1-.46-.302l-.761-1.77a2 2 0 0 0-.453-.618A5.98 5.98 0 0 1 2 6m6-5a5 5 0 0 0-3.479 8.592c.263.254.514.564.676.941L5.83 12h4.342l.632-1.467c.162-.377.413-.687.676-.941A5 5 0 0 0 8 1" />
                  </svg>{" "}
                  What is truth?
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="about-card">
          <h3>Our AI-Driven Process</h3>
          <div className="text-top">
            <ul className="feature-list">
              <li>
                <span className="check">✓</span> Age is not a limit
              </li>
              <li>
                <span className="check">✓</span> Most medical conditions
              </li>
              <li>
                <span className="cross">✗</span> Certain rare diseases
              </li>
            </ul>
            <div className="icone-mind">
              <img src="/images/mind.jpg" alt="mind" />
            </div>
          </div>
          <div className="text-bottm">
            <div className="card-text">
              <p className="card-footer-text">
                Our AI prioritizes need and compatibility in seconds, maximizing
                the impact of your gift.
              </p>
            </div>
            <div className="icon-card">
              <img src="/images/card.jpg" alt="AI Matching" />
            </div>
          </div>
        </div>

        <div className="about-card">
          <h3>Family Support & Ethics</h3>
          <div className="icon-circle-row">
            <div className="icon-circle">
              <div className="circle circle-pink">👨‍👩‍👧</div>
              <span>Family support</span>
            </div>
            <div className="icon-circle">
              <div className="circle circle-red">⚖️</div>
              <span>Legal Ethics</span>
            </div>
            <div className="icon-circle">
              <div className="circle circle-blue">👨‍👩‍👧</div>
              <span>Family Support</span>
            </div>
          </div>
          <p className="card-footer-text">
            Ethical guidelines adhere to your ethical guidelines. End support
            and family involvement.
          </p>
        </div>
      </section>

      <div className="about-actions">
        <Link to="/portal" className="action-btn-primary">
          Register as a Donor
        </Link>
        <a href="#learn" className="action-btn-outline">
          Learn the Medical Process
        </a>
      </div>
    </div>
  );
};

export default AboutDonation;
