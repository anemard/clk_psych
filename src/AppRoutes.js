import React from 'react';
import { About, Services, Publications, Signin, Contact } from './components';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function AppRoutes(props) {
  let data = props

  return (
    <div className="App-Routes">
      <Routes>
        <Route path="/" element={<><About /><Services /><Publications /><Contact /></>} />
        <Route path="/about" element={<About props={data} />} />
        <Route path="/publications" element={<Publications />} />
        <Route path="/services" element={<Services />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default AppRoutes;
