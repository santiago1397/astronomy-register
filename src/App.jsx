import { useContext } from "react";
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import FanRegister from "./pages/FanRegister.jsx";
import './App.css'

function App() {
  
  return (
      <BrowserRouter >
        <Routes>
          <Route exact path="/" element={<FanRegister />} />
        </Routes>
      </BrowserRouter >

  );
}

export default App;