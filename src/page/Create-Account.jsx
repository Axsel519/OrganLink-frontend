import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../Styles/create.css";

const CreateAccount = ({ onSignup }) => {
  const [profileImage, setProfileImage] = useState(null);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const navigate = useNavigate();

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setProfileImage(imageUrl);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const fullName = `${firstName} ${lastName}`.trim() || "User";

    if (typeof onSignup === "function") {
      onSignup(fullName, profileImage);
    }

    navigate("/");
  };

  return (
    <div className="create-account-container">
      <div className="create-box">
        <h2>Create Account</h2>
        <p className="subtitle">Join OrganLink and start saving lives</p>

        <form onSubmit={handleSubmit}>
          <div className="profile-upload-container">
            <img
              src={profileImage || "https://via.placeholder.com/100"}
              alt="Profile Preview"
              className="profile-preview"
            />
            <div className="file-input-wrapper">
              <button className="btn-upload" type="button">
                Upload Photo
              </button>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
              />
            </div>
          </div>

          <div className="form-grid">
            <div className="form-group">
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                id="firstName"
                placeholder="First name"
                required
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="lastName">Last Name</label>
              <input
                type="text"
                id="lastName"
                placeholder="Last name"
                required
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
            <div className="form-group full-width">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="form-group full-width">
              <label htmlFor="nationalId">National ID (رقم قومي)</label>
              <input
                type="text"
                id="nationalId"
                placeholder="Enter 14-digit national ID"
                required
                pattern="[0-9]{14}"
                title="Must be 14 digits"
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                placeholder="Create password"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                type="password"
                id="confirmPassword"
                placeholder="Confirm password"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="dob">Date of Birth</label>
              <input type="date" id="dob" required />
            </div>
            <div className="form-group">
              <label htmlFor="bloodType">Blood Type</label>
              <select id="bloodType" required>
                <option value="">Select Type</option>
                <option value="A+">A+</option>
                <option value="A-">A-</option>
                <option value="B+">B+</option>
                <option value="B-">B-</option>
                <option value="AB+">AB+</option>
                <option value="AB-">AB-</option>
                <option value="O+">O+</option>
                <option value="O-">O-</option>
              </select>
            </div>
            <div className="form-group full-width">
              <label htmlFor="phone">Phone Number</label>
              <input
                type="tel"
                id="phone"
                placeholder="e.g. 01012345678"
                required
              />
            </div>
            <div className="form-group full-width">
              <label htmlFor="address">Address</label>
              <input
                type="text"
                id="address"
                placeholder="City, Street, etc."
              />
            </div>
          </div>

          <button type="submit" className="btn-create">
            Create Account
          </button>
        </form>

        <div className="form-footer">
          Already have an account? <Link to="/signin">Sign In</Link>
        </div>
      </div>
    </div>
  );
};

export default CreateAccount;
