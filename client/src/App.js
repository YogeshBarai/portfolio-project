import './App.css';
import Banner from './components/Banner';
import Nav from './components/Nav';
import Services from './components/Services';
import APIContextProvider from './api/apiContent';

function App() {

  return (
    <APIContextProvider>
      <div>
        <Nav />
        <Banner />
        <Services />
      </div>
    </APIContextProvider >
  );
}

export default App;
