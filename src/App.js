import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Homepage from './components/Homepage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import APIContextProvider from './api/apiContent';

function App() {
  return (
    <>
      <APIContextProvider>
          <BrowserRouter>
            <Navbar />
              <Routes>
                <Route path="/home" element={<Homepage />} />
                <Route path="/header" element={<Header />} />
                <Route path="/about-me" element={<AboutMe />} />
              </Routes>
          </BrowserRouter>
      </APIContextProvider >
    </>
  );
}

export default App;
