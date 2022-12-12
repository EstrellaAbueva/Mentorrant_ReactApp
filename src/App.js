import './App.css';
import Body from './Components/Navbar/Body';
import Faq from "./Components/FAQ/Faq";
import { BrowserRouter as Router ,Route , Routes } from 'react-router-dom';
import NavbarLink from './Components/Navbar/NavbarLink';
import OurTeam from './OurTeam';
import HomeLink from './Components/Homepage/HomeLink';
import Ebooks from './Components/Ebooks/Ebooks';
import Home from './Components/Homepage/HomeLink';
function App() {
  return (
    <>
      <Router>
      <NavbarLink/>
        <Routes>
          <Route path='/OurTeam' element = { <OurTeam/>} />
          <Route path='/body' element = { <Body/> } />
          <Route path='/faq' element = { <Faq/> } />
          <Route path='/home' element = {<Home/>}/>
          <Route path='/Ebooks' element = {<Ebooks/>}/>
        </Routes>
    </Router>
    </>
  );
}

export default App;