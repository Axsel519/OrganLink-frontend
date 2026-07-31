import { useState } from "react";
import "../Styles/find.css";

const FindACenter = () => {
  const [selectedRadius, setSelectedRadius] = useState("50");
  const [programFocus, setProgramFocus] = useState("Adult");

  return (
    <div className="find-center-container">
      <div className="filters-card">
        <div className="filter-column">
          <label className="filter-label">Location Search:</label>
          <div className="search-input-wrapper">
            <input
              type="text"
              placeholder="Enter Zip, City, or State"
              className="search-input"
            />
            <span className="search-icon">🔍</span>
          </div>
          <label className="filter-label margin-top-sm">Organ Type:</label>
          <div className="organ-type-grid">
            <label>
              <input type="checkbox" /> 🫀 Heart
            </label>
            <label>
              <input type="checkbox" /> 🫘 Kidneys
            </label>
            <label>
              <input type="checkbox" /> 👁️ Cornea
            </label>
            <label>
              <input type="checkbox" /> 🫁 Lungs
            </label>
            <label>
              <input type="checkbox" /> 🫁 Pancreas
            </label>
            <label>
              <input type="checkbox" /> 🦴 Bone
            </label>
            <label>
              <input type="checkbox" /> 🥩 Liver
            </label>
            <label>
              <input type="checkbox" /> 🦴 Bone
            </label>
            <label>
              <input type="checkbox" /> 🖐️ Skin
            </label>
            <label>
              <input type="checkbox" /> 🫘 Kidneys
            </label>
            <label>
              <input type="checkbox" /> 🩺 Intestines
            </label>
            <label>
              <input type="checkbox" /> 📦 Multi-Organ
            </label>
          </div>
        </div>

        <div className="filter-column">
          <label className="filter-label">Radius (Miles):</label>
          <div className="radius-pills">
            {["5", "10", "25", "50", "100", "250+"].map((r) => (
              <button
                key={r}
                className={`radius-btn ${selectedRadius === r ? "active" : ""}`}
                onClick={() => setSelectedRadius(r)}
              >
                {r}
              </button>
            ))}
          </div>
          <label className="filter-label margin-top-md">Program Focus:</label>
          <div className="radio-group">
            <label>
              <input
                type="radio"
                name="program"
                value="Adult"
                checked={programFocus === "Adult"}
                onChange={() => setProgramFocus("Adult")}
              />{" "}
              Adult
            </label>
            <label>
              <input
                type="radio"
                name="program"
                value="Both"
                checked={programFocus === "Both"}
                onChange={() => setProgramFocus("Both")}
              />{" "}
              Both
            </label>
          </div>
          <div className="filter-action-buttons">
            <button className="btn-apply">Apply Filters</button>
            <button className="btn-reset">Reset Filters</button>
          </div>
        </div>

        <div className="filter-column">
          <label className="filter-label">Center Type:</label>
          <div className="center-type-checkboxes">
            <label>
              <input type="checkbox" /> Transplant Center
            </label>
            <label>
              <input type="checkbox" /> OPO
            </label>
            <label>
              <input type="checkbox" /> Research Lab
            </label>
            <label>
              <input type="checkbox" /> Find Living Donor
            </label>
          </div>
          <p className="data-updated-text">Data updated: June 2026</p>
        </div>
      </div>

      <div className="main-content-layout">
        <div className="map-wrapper">
          <iframe
            title="Centers Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13838.225577626993!2d-95.3995874288031!3d29.709971953154884!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640c062325c34cb%3A0xe67db1a16b9b32e1!2sTexas%20Medical%20Center%2C%20Houston%2C%20TX!5e0!3m2!1sen!2sus!4v1680000000000!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>

        <div className="results-container">
          <div className="results-header">
            <h2>
              Centers Found: 14 Results within 50 miles of "Houston, TX" (Kidney
              & Liver)
            </h2>
          </div>
          <div className="results-body">
            <div className="centers-list">
              <div className="center-card">
                <div className="card-top">
                  <div className="card-info">
                    <h3>
                      Center Name: Texas Medical Center - Transplant Division
                    </h3>
                    <p className="address">
                      Address: 1101 Houston, TX 99008{" "}
                      <a href="#directions">Get Directions</a>
                    </p>
                    <div className="organ-tags">
                      <span>Organ Programs & Icons:</span>
                      <div className="tags">
                        <span className="tag">🫘 Kidney</span>
                        <span className="tag">🥩 Liver</span>
                        <span className="tag">🫀 Heart</span>
                      </div>
                    </div>
                    <p className="contact">Primary Contact: John Sannon</p>
                    <p className="contact">Phone: 611-737-1270</p>
                  </div>
                  <div className="map-mini-thumb">
                    <img src="/images/body.jpg" alt="Map Mini Location" />
                  </div>
                </div>
                <div className="stats-box">
                  <p>
                    <strong>Program Rating/Stats:</strong>
                  </p>
                  <p>
                    Match Accuracy: 99.8% &nbsp;|&nbsp; Avg. Waiting Time: 28
                    min
                  </p>
                </div>
                <div className="card-actions">
                  <button className="btn-learn">Learn More</button>
                  <span className="learn-sub">
                    Learn more a full report page
                  </span>
                </div>
              </div>

              <div className="center-card">
                <div className="card-top">
                  <div className="card-info">
                    <h3>Center Name: Texas Medical Center - Transplant</h3>
                    <p className="address">
                      Address: 31-E 130 <a href="#directions">Get Directions</a>
                    </p>
                    <div className="organ-tags">
                      <span>Organ Programs & Icons:</span>
                      <div className="tags">
                        <span className="tag">🫘 Kidney</span>
                        <span className="tag">🥩 Liver</span>
                        <span className="tag">🫘 Kidneys</span>
                      </div>
                    </div>
                    <p className="contact">Primary Contact: John Sangon</p>
                    <p className="contact">Phone: 917-923-7370</p>
                  </div>
                  <div className="map-mini-thumb">
                    <img src="/images/body.jpg" alt="Map Mini Location" />
                  </div>
                </div>
                <div className="stats-box">
                  <p>
                    <strong>Program Rating/Stats:</strong>
                  </p>
                  <p>
                    Match Accuracy: 99.8% &nbsp;|&nbsp; Avg. Waiting Time: 28
                    min
                  </p>
                </div>
                <div className="card-actions">
                  <button className="btn-learn">Learn More</button>
                  <span className="learn-sub">
                    Learn more a full report page
                  </span>
                </div>
              </div>
            </div>
            <div className="refine-search-sidebar">
              <h4>Refine Search</h4>
              <ul>
                <li className="active">Distance</li>
                <li>Rating</li>
                <li>Program Type</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FindACenter;
