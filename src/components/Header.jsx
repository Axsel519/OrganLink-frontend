import { Link, NavLink } from "react-router-dom";
import "../Styles/header.css";

const Header = ({
  isLoggedIn = false,
  userName = "User",
  userImage = null,
  onLogout,
}) => {
  const displayName = userName || "User";
  const profileImage = userImage || "/images/bod.jpg";

  return (
    <header className="header-container">
      <Link to="/" className="logo-area">
        <img
          src="/images/photo_2026-07-27_20-18-42.jpg"
          alt="Logo"
          className="logo"
        />
      </Link>

      <ul className="nav-links">
        <li>
          <NavLink to="/about">About Donation</NavLink>
        </li>
        <li>
          <NavLink to="/donor-registry">Donor Registry</NavLink>
        </li>
        <li>
          <NavLink to="/how-ai-matches">How AI Matches</NavLink>
        </li>
        <li>
          <NavLink to="/find-center">Find a Center</NavLink>
        </li>
        <li>
          <NavLink to="/for-families">For Families</NavLink>
        </li>
      </ul>

      <div className="header-actions">
        <Link to="/become-donor" className="btn btn-red">
          Become a Donor
        </Link>
        {isLoggedIn ? (
          <div className="user-profile-dropdown">
            <div className="user-profile" title={displayName}>
              <img
                src={profileImage}
                alt={displayName}
                className="profile-avatar"
              />
            </div>
            <div className="user-info">
              <span className="user-name">{displayName}</span>
              <button onClick={onLogout} className="logout-btn">
                Logout
              </button>
            </div>
          </div>
        ) : (
          <Link to="/signin" className="btn btn-outline">
            Sign In
          </Link>
        )}
      </div>
    </header>
  );
};

export default Header;
