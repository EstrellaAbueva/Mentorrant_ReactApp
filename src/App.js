import './App.css';
import Body from './Components/Navbar/Body';
import Navbar from './Components/Navbar/Navbar';
import Faq from "./Components/FAQ/Faq";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";

function App() {
  return (
    <div className = "Navbar">
      <Navbar />
      <Body />
    </div>
  );
}

export default App;
