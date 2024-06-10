import React from "react";
import Header from "../components/Common/Header";
import Footer from "../components/Common/Footer";
import MainComponent from "../components/LandingPage/MainComponent";
import './styles.css'

function Home() {
  return (
    <div className="home">
      <div>
        <Header />
        <MainComponent />
      </div>
      {window.location.pathname === "/" && <Footer />}
    </div>
  );
}

export default Home;
