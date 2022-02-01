import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Homepage from './components/Homepage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/home" element={<Header />} />
        <Route path="/header" element={<Homepage />} />
        <Route path="/about-me" element={<Homepage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
