import './App.css';
import Body from './Components/Navbar/Body';
import Faq from "./Components/FAQ/Faq";
import { BrowserRouter as Router ,Route , Routes } from 'react-router-dom';
import NavbarLink from './Components/Navbar/NavbarLink';
import OurTeam from './OurTeam';
import Home from './Components/Homepage/Home';
import Ebooks from './Components/Ebooks/Ebooks';
import LandingPage from './Components/LandingPage/LandingPage';
import Payment from './Components/Payment/Payment';
import Subscription from './Components/Payment/Subscription';

function App() {
  return (
    <>
      <Router>
      <NavbarLink/>
        <Routes>
          <Route path='/OurTeam' element = { <OurTeam/>} />
          <Route path='/body' element = { <Body/> } />
          <Route path='/faq' element = { <Faq/> } />
          <Route path='/Home' element = { <Home/> } />
          <Route path='/Ebooks' element = { <Ebooks/> } />
         </Routes>
      </Router>
    </>
  );
}

export default App;