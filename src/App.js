import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './components/Home';
import './App.css';
import Navbar from './components/Navbar'
import Crew from './components/crew/Crew';
import Crypto from "./components/crew/Crypto";
import Pilot from "./components/crew/Pilot";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="crew" element={<Crew/>} />
          <Route path="crypto" element={<Crypto/>} />
          <Route path="pilot" element={<Pilot/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
