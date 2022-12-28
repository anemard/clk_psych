import React from 'react';
import { About, Services, Publications } from './components';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function AppRoutes() {
  return (
    <div className="App-Routes">
      <Routes>
        <Route path="/" element={<><About /><Services /><Publications /></>} />
        <Route path="/about" element={<About />} />
        <Route path="/publications" element={<Publications />} />
        <Route path="/services" element={<Services />} />
      </Routes>
    </div>
  );
}

export default AppRoutes;
