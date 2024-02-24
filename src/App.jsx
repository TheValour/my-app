import { BrowserRouter, Routes, Route } from "react-router-dom"

import { About, Home, Destination, Crew, Crypto, Pilot, Navbar } from "./components";
import './App.css';

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
