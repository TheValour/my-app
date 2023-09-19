import { BrowserRouter, Routes, Route } from "react-router-dom"

import Home from './components/Home';
import './App.css';
import Navbar from './components/Navbar'
import Crew from './components/Crew';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="crew" element={<Crew/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
