import { useState } from "react";
import "../Styles/howai.css";

const HowAIMatches = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="ai-matches-page-container">
      <div className="ai-hero-title">
        <h1>
          Precision in Gifting Life: How Our AI Algorithm Creates the Perfect
          Match.
        </h1>
      </div>

      <div className="ai-main-section">
        <div className="steps-container">
          <div className="step-card">
            <h3>Step 1: Create Account</h3>
            <p className="step-subtext">Basic Details</p>
            <div className="input-group">
              <input type="text" placeholder="Name" />
            </div>
            <p className="input-label">Email</p>
            <div className="input-group">
              <input type="email" placeholder="Email" />
            </div>
            <p className="input-label">Secure Password</p>
            <div className="input-group">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
              />
              <span
                className="eye-icon"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7 7 0 0 0-2.79.588l.77.771A6 6 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755q-.247.248-.517.486z" />
                    <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829" />
                    <path d="M3.35 5.47q-.27.24-.518.487A13 13 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7 7 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12z" />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172 8z" />
                    <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0" />
                  </svg>
                )}
              </span>
            </div>
            <button className="btn-register">Register</button>
          </div>

          <div className="step-card">
            <h3>Step 2: Define Wishes</h3>
            <p className="step-subtext">Checkboxes:</p>
            <div className="checkbox-grid">
              <label>
                <input type="checkbox" /> Heart
              </label>
              <label>
                <input type="checkbox" /> Pancreas
              </label>
              <label>
                <input type="checkbox" /> Lungs
              </label>
              <label>
                <input type="checkbox" /> Intestines
              </label>
              <label>
                <input type="checkbox" /> Liver
              </label>
              <label>
                <input type="checkbox" /> Cornea
              </label>
              <label>
                <input type="checkbox" /> Kidneys
              </label>
              <label>
                <input type="checkbox" /> Bone
              </label>
              <label>
                <input type="checkbox" /> Pancreas
              </label>
              <label>
                <input type="checkbox" /> Skin
              </label>
              <label>
                <input type="checkbox" /> All
              </label>
            </div>
            <h4 className="living-title">Living Donation Information</h4>
            <label className="small-check">
              <input type="checkbox" /> Signatures details to personal
              information
            </label>
          </div>

          <div className="step-card">
            <h3>Step 3: Medical & Contact Info</h3>
            <p className="step-subtext">Secondary emergency contacts</p>
            <input type="text" className="full-input" />
            <div className="notes-box">
              <p>Important medical notes/declarations</p>
              <span>I'm secondary medical medical or your declaration.</span>
            </div>
            <h3 className="step-margin">
              Step 4: Final Consent & Confirmation
            </h3>
            <p className="step-subtext">
              Legal declaration, press vent to as your document, digital
              signature.
            </p>
            <textarea className="consent-textarea" rows="2"></textarea>
          </div>
        </div>

        <div className="illustration-container">
          <div className="ai-infographic">
            <img src="/images/body.jpg" alt="AI Organ Matching Process" />
          </div>
          <div className="stats-gauges-row">
            <div className="gauge-box">
              <div className="gauge-icon-arc"></div>
              <p className="gauge-label">Average Matching Time:</p>
              <p className="gauge-val">28 Minutes</p>
            </div>
            <div className="heart-center-icon">
              <span>🤲❤️</span>
            </div>
            <div className="gauge-box">
              <div className="gauge-icon-arc"></div>
              <p className="gauge-label">Match Quality Accuracy:</p>
              <p className="gauge-val">99.8%</p>
            </div>
          </div>
        </div>
      </div>

      <div className="impact-map-bar">
        Impact Map: Real-time, anonymized data on top matches made and 4 lives
        potentially impacted.
      </div>

      <div className="bottom-cards-grid">
        <div className="info-card">
          <div className="card-header-icon">
            <h3>Match Criteria</h3>
            <span className="mini-icon">🫘🫁</span>
          </div>
          <ul className="check-list">
            <li>✓ Histocompatibility (HLA Types)</li>
            <li>✓ Organ Weight/Size Matching</li>
            <li>✓ Patient Urgency Score (MELD, etc.)</li>
            <li>✓ Logical Constraints (e.g., Blood Type)</li>
          </ul>
        </div>

        <div className="info-card">
          <h3>Matching Algorithm Workflow</h3>
          <ol className="number-list">
            <li>1. Donor/Recipient Profile Intake</li>
            <li>2. Feature Extraction & Scoring</li>
            <li>3. Compatibility Filtering</li>
            <li>4. Dynamic Ranking & Assignment</li>
          </ol>
        </div>

        <div className="info-card">
          <h3>Real-Time Data Streams</h3>
          <div className="feed-tags">
            <div className="feed-tag tag-pink">
              Feed 1: New Donor Alert (Kidney)
            </div>
            <div className="feed-tag tag-green">
              Feed 2: New Urgent Recipient (Liver)
            </div>
            <div className="feed-tag tag-green">
              Feed 2: New Urgent Recipient (Liver)
            </div>
          </div>
        </div>

        <div className="info-card">
          <div className="card-header-icon">
            <h3>Verification & Post-Match Support</h3>
            <span className="mini-icon">📋</span>
          </div>
          <ul className="check-list">
            <li>✓ Medical Team Review Panel</li>
            <li>✓ Continuous System Auditing</li>
            <li>✓ Post-Match Success Tracking</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HowAIMatches;
