import React from "react";
import Navbar from "./components/nav/Navbar";
import LandingPage from "./pages/landingPage/LandingPage";
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <LandingPage />
      <Footer />
    </div>
  );
};

export default App;
