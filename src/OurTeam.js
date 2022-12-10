import aj from "./Components/Navbar/assets/aj.png";
import ella from "./Components/Navbar/assets/ella.png";
import william from "./Components/Navbar/assets/william.png";
import sean from "./Components/Navbar/assets/sean.png";
import kent from "./Components/Navbar/assets/kent.png";
import andre from "./Components/Navbar/assets/andre.png";
import './OurTeam.css'; 

const OurTeam = () => {
    return ( 
        <div className="container">
            <div className="flex">
                <div className="row">
                    <div className="box">
                        <img className ="imgPeople" alt="" src= {ella} />
                    </div>
                    <div className="box">
                        <img className ="imgPeople" alt="" src= {aj} />
                    </div>
                    <div className="box">
                    <img className ="imgPeople" alt="" src= {william} />
                    </div>
                </div>
                <div className="row">
                    <div className="box">
                        <img className ="imgPeople" alt="" src= {sean} />
                    </div>
                    <div className="box">
                    <img className ="imgPeople" alt="" src= {kent} />
                    </div>
                    <div className="box">
                        <img className ="imgPeople" alt="" src= {andre} />
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default OurTeam;