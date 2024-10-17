import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import StudentPage from './pages/StudentPage';
import SponsorPage from './pages/SponsorPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/student" element={<StudentPage />} />
        <Route path="/sponsor" element={<SponsorPage />} />
      </Routes>
    </Router>
  );
}

export default App;