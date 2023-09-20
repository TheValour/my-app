import { BrowserRouter, Routes, Route } from "react-router-dom"

import Home from './components/Home';
import './App.css';
import Navbar from './components/Navbar'
import Crew from './components/crew/Crew';
import Crypto from "./components/crew/Crypto";
import Pilot from "./components/crew/Pilot";
import Destination from "./components/destination/Destination";
import About from "./components/about/About";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/destination" element={<Destination/>} />
          <Route path="crew" element={<Crew/>} />
          <Route path="crypto" element={<Crypto/>} />
          <Route path="pilot" element={<Pilot/>} />
          <Route path="about" element={<About/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
