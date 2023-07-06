import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Map from './components/Map';
import StateList from './components/StateList';
import Login from './components/Login';
import SignUp from './components/SignUp';
import CityTemperature from './components/CityTemperature';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/cityTemp' element={<CityTemperature />} />
          <Route path="/stateList" element={<StateList />} />
          <Route path="/map" element={<Map />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
