import React, { createContext, useState } from 'react';
import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home/Home";

 export const context = createContext({})

function App() {
  const [light, setLigth] = useState(false)
  return (
    <context.Provider value={{light, setLigth}}>
      <div data-theme={light? 'light': 'dark'}>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/home' element={<Home/>} />
      </Routes>
    </div>
    </context.Provider>
  );
}

export default App;
