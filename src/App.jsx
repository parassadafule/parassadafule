import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import AboutSection from "./components/AboutSection";
import SkillsSection from "./components/SkillsSection";
import InternshipsSection from "./components/InternshipsSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactSection from "./components/ContactSection";
import FloatingNav from "./components/FloatingNav";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Portfolio />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <FloatingNav />
      <LandingPage />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <InternshipsSection />
      <ContactSection />
    </div>
  );
};

export default App;