import React from 'react';
import { About, Services, Publications, Signin } from './components';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function AppRoutes(props) {
  let data = props

  return (
    <div className="App-Routes">
      <Routes>
        <Route path="/" element={<><About /><Services /><Publications /></>} />
        <Route path="/about" element={<About props={data} />} />
        <Route path="/publications" element={<Publications />} />
        <Route path="/services" element={<Services />} />
        <Route path="/signin" element={<Signin />} />
      </Routes>
    </div>
  );
}

export default AppRoutes;
