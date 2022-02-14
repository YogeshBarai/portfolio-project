import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Homepage from './components/Homepage';
import WorkExperience from './components/WorkExperience';
import Blogs from './components/Blogs';
import ReachMe from './components/ReachMe';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import APIContextProvider from './api/apiContent';


function App() {

  return (
    <>
      <APIContextProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Homepage />} exact />
            <Route path="/work-exp" element={<WorkExperience />} exact />
            <Route path="/reach-me" element={<ReachMe />} exact />
            <Route path="/blogs" element={<Blogs />} exact />
          </Routes>
        </BrowserRouter>
      </APIContextProvider >
    </>
  );
}

export default App;
