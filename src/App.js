import './App.css';
import Body from './Components/Navbar/Body';
import Faq from "./Components/FAQ/Faq";
import { BrowserRouter as Router ,Route , Routes } from 'react-router-dom';
import NavbarLink from './Components/Navbar/NavbarLink';
import OurTeam from './OurTeam';
import ContactUs from './Components/ContactUs/ContactUs';

function App() {
  return (
    <>
      <Router>
      <NavbarLink/>
        <Routes>
          <Route path='/OurTeam' element = { <OurTeam/>} />
          <Route path='/body' element = { <Body/> } />
          <Route path='/faq' element = { <Faq/> } />
          <Route path='/contact-us' element = { <ContactUs/> } />
          </Routes>
      </Router>
    </>
  );
}

export default App;