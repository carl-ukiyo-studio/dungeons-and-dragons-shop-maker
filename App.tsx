import * as React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Header from './components/Header';
import NavBar from './components/NavBar';
import Equipment from './components/Equipment';

const App = () => (
  <div>
    <div>
      <Header />
      <NavBar />

      <Routes>
        <Route path="/equipment" element={<Equipment />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  </div>
);

export default App;
