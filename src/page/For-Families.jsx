import "../Styles/for-families.css";

const ForFamilies = () => {
  return (
    <div className="for-families-container">
      <div className="top-dashboard-section">
        <div className="banner-title-box">
          <h1>OrganLink: Supporting Families, Honoring Legacies</h1>
        </div>

        <div className="hero-infographic-card">
          <div className="left-stats">
            <div className="badge-tag">Compassionate Support</div>
            <div className="badge-tag">Enduring Impact</div>
            <div className="meter-card">
              <div className="arc-meter"></div>
              <p className="meter-val">45,210</p>
              <p className="meter-lbl">Total Hearts Honored:</p>
            </div>
          </div>

          <div className="center-hands-illustration">
            <img
              src="/images/body.jpg"
              alt="Hands holding organs illustration"
            />
          </div>

          <div className="right-stats">
            <div className="badge-tag">Healthy Impact</div>
            <div className="badge-tag">Family Advocacy</div>
            <div className="badge-tag">Informed Decisions</div>
            <div className="impact-counter-box">
              <p className="counter-val">101,340</p>
              <p className="counter-lbl">Lives Impacted and Thriving:</p>
            </div>
          </div>

          <div className="impact-map-card">
            <h4>Impact Map</h4>
            <div className="mini-world-map">
              <img src="/images/body.jpg" alt="World Impact Map" />
            </div>
            <div className="map-stats-row">
              <div className="stat-num">
                <h3>10K+</h3>
                <p>Matches Made in 2026</p>
              </div>
              <div className="stat-gauge">
                <div className="arc-small"></div>
                <p>Matching Success Rating:</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="families-main-grid">
        <div className="column-card">
          <div className="card-header-bar">
            <h2>Navigating the Process</h2>
          </div>
          <div className="card-content">
            <div className="feature-block">
              <p className="feature-title">
                ✓ Donation Eligibility & Approvals
              </p>
              <div className="icon-row">
                <span className="block-icon">📋</span>
                <span className="block-icon">⚖️</span>
              </div>
            </div>
            <div className="feature-block">
              <p className="feature-title">✓ Authorizing a Donation</p>
              <div className="icon-row">
                <span className="block-icon">✍️</span>
                <span className="block-icon">✒️ Sign</span>
              </div>
            </div>
            <div className="feature-block">
              <p className="feature-title">✓ Medical & History Disclosures</p>
              <div className="icon-row">
                <span className="block-icon">🩺</span>
                <span className="block-icon">🏥</span>
              </div>
            </div>
            <div className="feature-block">
              <p className="feature-title">✓ Post-Donation Support Resources</p>
              <div className="icon-row">
                <span className="block-icon">📞</span>
                <span className="block-icon">👥</span>
              </div>
            </div>
          </div>
        </div>

        <div className="column-card">
          <div className="card-header-bar">
            <h2>Legacy of Gifting Life</h2>
          </div>
          <div className="card-content">
            <div className="sub-section">
              <h3>✓ Donor Stories & Tributes</h3>
              <div className="stories-grid-thumbs">
                <img src="/images/family.jpg" alt="Donor Story 1" />
                <div className="quote-box">
                  <p>
                    "A donor choice continues stories details with family and
                    what it means."
                  </p>
                </div>
                <img src="/images/family.jpg" alt="Donor Story 2" />
                <div className="quote-box">
                  <p>
                    "I have organ donation and quote text, our family wrote
                    Tributes."
                  </p>
                </div>
              </div>
              <a href="#all-stories" className="text-link">
                View All Stories ↗
              </a>
            </div>

            <div className="sub-section margin-top-sm">
              <h3>✓ Impact Measurement Dashboard</h3>
              <div className="metrics-2x2-grid">
                <div className="metric-pill">
                  <span className="m-icon">📈</span>
                  <div>
                    <strong>10,000+</strong>
                    <p>Kidneys Gifting Life</p>
                  </div>
                </div>
                <div className="metric-pill">
                  <span className="m-icon">📊</span>
                  <div>
                    <strong>20,000+</strong>
                    <p>Corneas Gifting Sight</p>
                  </div>
                </div>
                <div className="metric-pill">
                  <span className="m-icon">🫘</span>
                  <div>
                    <strong>10,000+</strong>
                    <p>Kidneys Gifting Life</p>
                  </div>
                </div>
                <div className="metric-pill">
                  <span className="m-icon">👁️</span>
                  <div>
                    <strong>20,000+</strong>
                    <p>Corneas Restoring Sight</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="sub-section margin-top-sm">
              <h3>✓ Annual Impact Report</h3>
              <a href="#report" className="download-link">
                Link to downloadable report 📥
              </a>
              <div className="testimonial-card">
                <img src="/images/family.jpg" alt="Family testimonial" />
                <p>
                  "The very tending and family provided us love to give a
                  positive and quality towards with and family families."
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="column-card">
          <div className="card-header-bar">
            <h2>Support and Advocacy</h2>
          </div>
          <div className="card-content">
            <div className="sub-section">
              <h3>✓ Family Support Programs</h3>
              <ul className="bullet-list">
                <li>Online support groups</li>
                <li>Online/in-person groups</li>
                <li>
                  <a href="#counseling">Counseling links</a>
                </li>
              </ul>
            </div>
            <div className="sub-section margin-top-sm">
              <h3>✓ Legislative Updates & Action</h3>
              <div className="flex-with-icon">
                <ul className="bullet-list">
                  <li>Advocacy efforts</li>
                  <li>Advocacy efforts</li>
                  <li>Advocacy efforts & efforts</li>
                </ul>
                <span className="gavel-icon">🔨</span>
              </div>
            </div>
            <div className="sub-section margin-top-sm">
              <h3>✓ Volunteer & Awareness Programs</h3>
              <ul className="bullet-list">
                <li>Options for families to get involved</li>
                <li>
                  <a href="#learn-more">Find out how to Learn more</a>
                </li>
              </ul>
            </div>
            <button className="btn-mentor-connect">
              Connect with a Family Mentor ↗
            </button>
          </div>
        </div>

        <div className="column-card">
          <div className="card-header-bar">
            <h2>Education and Ethics</h2>
          </div>
          <div className="card-content">
            <div className="sub-section">
              <div className="header-icon-inline">
                <h3>✓ Medical Ethics Panel Q&A</h3>
                <span>⚖️❓</span>
              </div>
              <div className="search-bar-sm">
                <input type="text" placeholder="Search..." />
                <span>🔍</span>
              </div>
            </div>
            <div className="sub-section margin-top-sm">
              <div className="header-icon-inline">
                <h3>✓ Transplant Ethics Guidelines</h3>
                <span>📄</span>
              </div>
              <ul className="bullet-list">
                <li>Documents and ethical</li>
                <li>Transplant ethical frameworks</li>
              </ul>
            </div>
            <div className="sub-section margin-top-sm">
              <div className="header-icon-inline">
                <h3>✓ Understanding the AI Process</h3>
                <span>🧠⚙️</span>
              </div>
              <p className="sub-description">
                How data is anonymized and matches made more ethically.
              </p>
            </div>
            <div className="faq-action-box">
              <h4>Family Ethics & Law FAQ</h4>
              <h4>Latest Ethical News</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForFamilies;
