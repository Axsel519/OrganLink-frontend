import "../Styles/home.css";

const Home = () => {
  return (
    <div className="home-wrapper">
      <section className="hero-section">
        <div className="hero-content">
          <h1>
            You Can Save a Life
            <br />
            Explore the Gift of
            <br />
            Organ Donation
          </h1>
          <div className="hero-buttons">
            <a href="#" className="btn-outline-large">
              Learn About Organ Donation
            </a>
            <a href="#" className="btn-outline-large">
              Start Your Registry
            </a>
          </div>
        </div>
        <div className="hero-image-wrapper">
          <div className="hero-bg-shape"></div>
          <img src="/images/girl.jpg" alt="Donor holding card" />
        </div>
      </section>

      <section className="features-grid">
        <div className="card">
          <div className="card-icon">
            <svg viewBox="0 0 24 24" fill="#a01b2b">
              <g transform="translate(4, 4)">
                <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053.918 3.995.78 5.323 1.508 7H.43c-2.128-5.697 4.165-8.83 7.394-5.857q.09.083.176.171a3 3 0 0 1 .176-.17c3.23-2.974 9.522.159 7.394 5.856h-1.078c.728-1.677.59-3.005.108-3.947C13.486.878 10.4.28 8.717 2.01zM2.212 10h1.315C4.593 11.183 6.05 12.458 8 13.795c1.949-1.337 3.407-2.612 4.473-3.795h1.315c-1.265 1.566-3.14 3.25-5.788 5-2.648-1.75-4.523-3.434-5.788-5" />
                <path d="M10.464 3.314a.5.5 0 0 0-.945.049L7.921 8.956 6.464 5.314a.5.5 0 0 0-.88-.091L3.732 8H.5a.5.5 0 0 0 0 1H4a.5.5 0 0 0 .416-.223l1.473-2.209 1.647 4.118a.5.5 0 0 0 .945-.049l1.598-5.593 1.457 3.642A.5.5 0 0 0 12 9h3.5a.5.5 0 0 0 0-1h-3.162z" />
              </g>
            </svg>
          </div>
          <h3>Register as a Donor</h3>
          <p>A simple, secure process to express your wish.</p>
          <a href="#" className="btn-small">
            View Registry Info
          </a>
        </div>

        <div className="card">
          <div className="card-icon">
            <svg viewBox="0 0 24 24" fill="#a01b2b">
              <g transform="translate(4, 4)">
                <path d="M8 7.982C9.664 6.309 13.825 9.236 8 13 2.175 9.236 6.336 6.31 8 7.982" />
                <path d="M3.75 0a1 1 0 0 0-.8.4L.1 4.2a.5.5 0 0 0-.1.3V15a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V4.5a.5.5 0 0 0-.1-.3L13.05.4a1 1 0 0 0-.8-.4zm0 1H7.5v3h-6zM8.5 4V1h3.75l2.25 3zM15 5v10H1V5z" />
              </g>
            </svg>
          </div>
          <h3>How Your Gift Works</h3>
          <p>Understanding the medical process and ethics.</p>
          <a href="#" className="btn-small">
            Learn More
          </a>
        </div>

        <div className="card">
          <h3>Donor Map</h3>
          <p
            style={{
              fontSize: "0.8rem",
              color: "#666",
              marginTop: "-4px",
              marginBottom: "12px",
            }}
          >
            Public Education and Information Centers
          </p>
          <div
            className="map-placeholder"
            style={{ overflow: "hidden", height: "200px", borderRadius: "8px" }}
          >
            <iframe
              title="Donor Centers Map"
              src="https://maps.google.com/maps?q=blood%20donor%20registry%20center&t=&z=13&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
          <div className="map-subtext" style={{ marginTop: "10px" }}>
            <span
              style={{ color: "#a01b2b", fontWeight: "bold", fontSize: "1rem" }}
            >
              📍
            </span>{" "}
            National Organ Registry Office
          </div>
        </div>

        <div className="card">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
            }}
          >
            <div style={{ width: "75%" }}>
              <h3>AI Matching & Urgency</h3>
              <p style={{ fontSize: "0.8rem" }}>
                Our technology accelerates finding the right fit for critical
                patients.
              </p>
              <a
                href="#"
                style={{
                  color: "#a01b2b",
                  fontWeight: "600",
                  fontSize: "0.8rem",
                  textDecoration: "none",
                }}
              >
                See Our Technology
              </a>
            </div>
            <svg width="32" height="32" viewBox="0 0 24 24" fill="#a01b2b">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
            </svg>
          </div>

          <div className="testimonials-box">
            <h3 style={{ fontSize: "1rem", marginBottom: "0" }}>
              Real Impacts
            </h3>
            <div className="testimonials-row">
              <div className="testimonial-item">
                <img
                  src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=100&h=100"
                  alt="User"
                />
                <div>
                  <strong>Fatma B.</strong>
                  "My sister received a kidney. A donor changed our lives."
                </div>
              </div>
              <div className="nav-arrows">
                <button className="nav-arrow-btn">‹</button>
                <button className="nav-arrow-btn">›</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
