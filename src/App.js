import React from "react";
import HeroSection from "./pages/HeroSection";
import TechStack from "./pages/TechStack";
import NavigationBar from "./components/NavigationBar";
import ScrollToSection from "./components/ScrollToSection";
import About from "./pages/About";
import "./App.css";

export default function App() {
  return (
    <>
      <NavigationBar />
      <ScrollToSection />
      <div id="home">
        <HeroSection />
      </div>
      <div id="techstack">
        <TechStack />
      </div>
      <div id="about">
        <About />
      </div>
    </>
  );
}
