import { useState } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./page/Home";
import AboutDonation from "./page/About-Donation";
import DonorRegistry from "./page/Donor-Registry";
import HowAIMatches from "./page/How-AI-Matches";
import FindACenter from "./page/Find-a-Center";
import ForFamilies from "./page/For-Families";
import BecomeDonor from "./page/Become-a-Donor";
import CreateAccount from "./page/Create-Account";
import SignIn from "./page/SignIn";
import "./App.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState("User");
  const [userImage, setUserImage] = useState(null);

  const handleLogin = (name, image) => {
    setIsLoggedIn(true);
    setUserName(name);
    if (image) {
      setUserImage(image);
    }
  };

  const handleSignup = (name, image) => {
    setIsLoggedIn(true);
    setUserName(name);
    if (image) {
      setUserImage(image);
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserName("User");
    setUserImage(null);
  };

  return (
    // 2. استخدام Router كما هو (لأننا سميناه HashRouter as Router فوق)
    <Router>
      <div className="app-container">
        <Header
          isLoggedIn={isLoggedIn}
          userName={userName}
          userImage={userImage}
          onLogout={handleLogout}
        />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutDonation />} />
            <Route path="/donor-registry" element={<DonorRegistry />} />
            <Route path="/how-ai-matches" element={<HowAIMatches />} />
            <Route path="/find-center" element={<FindACenter />} />
            <Route path="/for-families" element={<ForFamilies />} />
            <Route path="/become-donor" element={<BecomeDonor />} />
            <Route
              path="/create-account"
              element={<CreateAccount onSignup={handleSignup} />}
            />
            <Route path="/signin" element={<SignIn onLogin={handleLogin} />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
