import React from 'react';
import { Navbar, Footer } from './components';
import AppRoutes from './AppRoutes';
import './App.css';


function App() {
  return (
    <div className="App">
      <Navbar />
      <AppRoutes />
      <Footer />
    </div>
  );
}

export default App;
