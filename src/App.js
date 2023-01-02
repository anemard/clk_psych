import React from 'react';
import { Navbar, Footer } from './components';
import AppRoutes from './AppRoutes';

function App() {

  return (
    <div className="App">
      <Navbar />
      <div className="page-content"><AppRoutes /></div>
      <Footer />
    </div>
  );
}

export default App;
