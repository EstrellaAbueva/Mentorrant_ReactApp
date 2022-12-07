import './App.css';
import Body from './Components/Navbar/Body';
import Faq from "./Components/FAQ/Faq";
import { BrowserRouter as Router ,Route , Routes } from 'react-router-dom';
import NavbarLink from './Components/Navbar/NavbarLink';
import MenteeProfile from './Components/MenteeProfile/MenteeProfile';

function App() {
  // return (
  //   <>
  //     <Router>
  //     <NavbarLink/>
  //       <Routes>
  //         <Route path='/body' element = { <Body/> } />
  //         <Route path='/faq' element = { <Faq/> } />
  //         </Routes>
  //     </Router>
  //   </>
  // );

  return (
    <div className = "Navbar">
      <MenteeProfile/>
    </div>
  );
}

export default App;