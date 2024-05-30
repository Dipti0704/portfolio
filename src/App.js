import React from 'react';
import Header from './components/Header';
// import Intro from './components/Intro';
// import Intro2 from './components/Intro2';
import Home from './components/Home'; // Import the new Home component
import Education from './components/EducationPage2';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SkillsPage3 from './components/SkillsPage3';
import './App.css';

function App() {
  return (
    <Router>
    <Header />
    
    <Routes>
        <Route path="/" element={<Home/>}
                        />
        <Route path="/education" element={<Education />} />
        {/* Add more routes here as needed */}
        <Route path="/skills" element={<SkillsPage3 />} />
    </Routes>
   
</Router>
   
  
   
  );
}

export default App;
