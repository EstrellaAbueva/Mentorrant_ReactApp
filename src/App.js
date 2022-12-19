import './App.css';
import Body from './Components/Navbar/Body';
import Faq from "./Components/FAQ/Faq";
import { BrowserRouter as Router ,Route , Routes } from 'react-router-dom';
import NavbarLink from './Components/Navbar/NavbarLink';
import OurTeam from './OurTeam';
import Home from './Components/Homepage/HomeLink';
import Ebooks from './Components/Ebooks/Ebooks';
import ContactUs from './Components/ContactUs/ContactUs'
import LandingPage from './Components/LandingPage/LandingPage';
import Payment from './Components/Payment/Payment';
import Subscription from './Components/Payment/Subscription';
import MenteeProfile from './Components/MenteeProfile/MenteeProfile';
import MentorProfile from './Components/MentorProfile/MentorProfile';
import EditMentee from './Components/EditMentee/EditMentee';
import BookMentor from  './Components/MentorProfile/BookMentor';
import AdminPortal from './Components/AdminPortal/AdminPortal';
import EbooksAdmin from './Components/Ebooks/EbooksAdmin';
import Register from './Components/Register/Register';
import Login from './Components/Login/Login';


function App() {
  return (
    <>
      <Router>
        <NavbarLink/>
        {/* <AdminPortal/> */}
          <Routes>
            <Route path='/OurTeam' element = { <OurTeam/>} />
            <Route path='/body' element = { <Body/> } />
            <Route path='/faq' element = { <Faq/> } />
            <Route path='/ContactUs' element = { <ContactUs/> } />
            <Route path='/Home' element = { <Home/> } />
            <Route path='/Ebooks' element = { <Ebooks/> } />
            <Route path='/Payment' element = { <Payment/> } />
            <Route path='/Subscription' element = { <Subscription/> } />
            <Route path='/MentorProfile' element = { <MentorProfile/> } />
            <Route path='/MenteeProfile' element = { <MenteeProfile/> } />
            <Route path='/EditMentee' element = { <EditMentee/> } />
            <Route path='/BookMentor' element = { <BookMentor/> } />
            <Route path='/AdminPortal' element = { <AdminPortal/> } />
            <Route path='/EbooksAdmin' element= {<EbooksAdmin/>}/>
            <Route path='/Login' element= {<Login/>}/>
        </Routes>
        
      </Router>

    </>
  );
    
 
}

export default App;