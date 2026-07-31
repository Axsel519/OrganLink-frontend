import "../Styles/become.css";

const BecomeDonor = () => {
  return (
    <div className="donor-page-container">
      <header className="donor-header">
        <h1>Your Decision Saves Lives. Become a Donor Today.</h1>
        <div className="organ-badge">
          <span>💖 Organ & Tissue Donation 💖</span>
        </div>
      </header>

      <div className="donor-grid">
        <div className="donor-col col-1">
          <div className="card">
            <div className="card-header">Step 1: Contact Information</div>
            <div className="card-body">
              <label>Name</label>
              <div className="input-row">
                <input type="text" placeholder="First" />
                <input type="text" placeholder="Last" />
              </div>
              <label>Address</label>
              <input type="text" placeholder="Line 1" className="full-width" />
              <input type="text" placeholder="Line 2" className="full-width" />
              <div className="input-row">
                <input type="text" placeholder="City" />
                <div className="state-zip">
                  <input type="text" placeholder="State" />
                  <input type="text" placeholder="Zip" />
                </div>
              </div>
              <label>Phone</label>
              <input type="text" placeholder="Phone" className="full-width" />
              <label>Email</label>
              <input type="email" placeholder="Email" className="full-width" />
            </div>
          </div>

          <div className="card step-3-card">
            <div className="card-header transparent-header">
              Step 3: Registration Status
            </div>
            <div className="card-body">
              <div className="radio-group">
                <label>
                  <input type="radio" name="status" defaultChecked /> Register
                  as a Donor
                </label>
                <label>
                  <input type="radio" name="status" /> Update Existing
                  Registration
                </label>
                <label>
                  <input type="radio" name="status" /> Register on behalf of a
                  minor
                </label>
              </div>
              <button className="submit-btn">
                Submit Registration and Sign
              </button>
            </div>
          </div>
        </div>

        <div className="donor-col col-2">
          <div className="card">
            <div className="card-header">Step 2: Medical Details</div>
            <div className="card-body">
              <div className="form-group">
                <label>Prior Surgeries?</label>
                <input type="text" className="full-width" />
              </div>
              <div className="form-group">
                <label>Relevant Medical Conditions?</label>
                <input type="text" className="full-width" />
              </div>
              <div className="form-group">
                <label>Brief Physical Description (measurement):</label>
                <textarea rows="4" className="full-width"></textarea>
              </div>
              <div className="gallery-section">
                <p className="gallery-title">
                  When does your name get verified in the medical transplant
                  database?
                </p>
                <div className="image-grid">
                  <img src="/images/people1.jpg" alt="People" />
                  <img src="/images/people2.jpg" alt="People" />
                  <img src="/images/people3.jpg" alt="People" />
                  <img src="/images/people4.jpg" alt="People" />
                  <img src="/images/people5.jpg" alt="People" />
                  <img src="/images/people6.jpg" alt="People" />
                </div>
                <a href="#more" className="read-more-link">
                  Read more stories
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="donor-col col-3">
          <div className="organ-widgets-row">
            <div className="widget-card">
              <div className="widget-icon">🫘</div>
              <div className="widget-info">
                <strong>Kidneys</strong>
                <span>'Lifesaving Filter'</span>
              </div>
            </div>
            <div className="widget-card">
              <div className="widget-icon">👁️</div>
              <div className="widget-info">
                <strong>Corneas</strong>
                <span>'Gift of Sight'</span>
              </div>
            </div>
            <div className="widget-card">
              <div className="widget-icon">🫀</div>
              <div className="widget-info">
                <strong>Liver</strong>
                <span>'Vital Organ'</span>
              </div>
            </div>
          </div>

          <div className="card journey-card">
            <div className="journey-title">Your Registration Journey</div>
            <div className="timeline">
              <div className="timeline-step done">
                <div className="circle">✓</div>
                <span>Create Profile</span>
              </div>
              <div className="timeline-step done">
                <div className="circle">✓</div>
                <span>Medical Declaration</span>
              </div>
              <div className="timeline-step done">
                <div className="circle">✓</div>
                <span>Legal Sign-off</span>
              </div>
              <div className="timeline-step done">
                <div className="circle">✓</div>
                <span>Official Registration</span>
              </div>
            </div>
          </div>

          <div className="two-cards-row">
            <div className="card myth-card">
              <div className="card-header">Donation Myths & Facts</div>
              <div className="card-body">
                <p>
                  <strong>Myth:</strong> "My doctor won't save me if they know
                  I'm a donor."
                </p>
                <p className="fact-box">
                  <strong>Fact:</strong> Doctors always prioritize saving your
                  life.
                </p>
              </div>
            </div>
            <div className="card stories-card">
              <div className="card-header">Impact Stories</div>
              <div className="card-body">
                <div className="story-item">
                  <img src="/images/family1.jpg" alt="Story" />
                  <p>"A donor changed our lives."</p>
                </div>
              </div>
            </div>
          </div>

          <div className="two-cards-row">
            <div className="card">
              <div className="card-header">Legal and Ethical Disclosures</div>
              <div className="card-body icon-list">
                <div>
                  <strong>✓ AI Anonymization</strong>
                  <p>
                    AI Anonymization connects with representation and
                    anonymized.
                  </p>
                </div>
                <div>
                  <strong>✓ Medical Ethics Panel</strong>
                  <ul>
                    <li>Relevant check/item for services</li>
                    <li>Medical Ethics Panel link</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-header">Support for You</div>
              <div className="card-body links-list">
                <a href="#family">📂 Family Resources ↗</a>
                <a href="#counseling">🎧 Counseling Services ↗</a>
                <a href="#connection">📞 Donor Family Connection</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="floating-guide">
        <span>OrganLink Guide</span>
        <button className="chat-btn">💬</button>
      </div>
    </div>
  );
};

export default BecomeDonor;
