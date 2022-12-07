import './App.css';
import Body from './Components/Navbar/Body';
import Navbar from './Components/Navbar/Navbar';
import Faq from "./Components/FAQ/Faq";
import Settings from "./Components/Settings/Settings.js";
import MenteeProfile from "./Components/MenteeProfile/MenteeProfile.js";

function App() {
  return (
    <div className = "Navbar">
      <MenteeProfile/>
    </div>
  );
}

export default App;