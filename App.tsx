import * as React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Header from './components/Header';
import NavBar from './components/NavBar';
import EquipmentCategories from './components/EquipmentCategories';
import EquipmentCategory from './components/EquipmentCategory';
import Equipment from './components/Equipment';

const App = () => (
  <div>
    <div>
      <Header />
      <NavBar />

      <Routes>
        <Route path="/equipment-categories" element={<EquipmentCategories />} />
        <Route
          path="/equipment-categories/:index"
          element={<EquipmentCategory />}
        />
        <Route path="/equipment/:index" element={<Equipment />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  </div>
);

export default App;
