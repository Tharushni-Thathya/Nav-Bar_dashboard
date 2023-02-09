import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard.jsx';
import Data_Supplier from './pages/Data_Supplier.jsx';
import Victim_Details from './pages/Victim_Details.jsx';
import Packing_Details from './pages/Packing_Details.jsx';
import Delivery_Details from './pages/Delivery_Details.jsx';

const App = () => {
  return (
    <BrowserRouter>
      <Sidebar>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/data_supplier_details" element={<Data_Supplier />} />
          <Route path="/packing_details" element={<Packing_Details />} />
          <Route path="/victim_details" element={<Victim_Details />} />
          <Route path="/delivery_details" element={<Delivery_Details />} />
        </Routes>
      </Sidebar>
    </BrowserRouter>
  );
};

export default App;