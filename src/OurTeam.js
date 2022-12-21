import aj from "./Components/Navbar/assets/aj.png";
import ella from "./Components/Navbar/assets/ella.png";
import william from "./Components/Navbar/assets/william.png";
import sean from "./Components/Navbar/assets/sean.png";
import kent from "./Components/Navbar/assets/kent.png";
import andre from "./Components/Navbar/assets/andre.png";
import './OurTeam.css'; 

const OurTeam = () => {
    return ( 
        <div className="container-md">
            <div className="flex">
                <div className="row">
                    <div className="box">
                        <div className="front">
                            <img className ="imgPeople" alt="" src= {ella} />
                            <div className="back">Estrella Abueva</div>
                        </div>
                    </div>
                    <div className="box">
                        <div className="front">
                            <img className ="imgPeople" alt="" src= {aj} />
                            <div className="back">Adrian Jay Barcenilla</div>
                        </div>
                    </div>
                    <div className="box">
                        <div className="front">
                            <img className ="imgPeople" alt="" src= {william} />
                            <div className="back">John William Miones</div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="box">
                        <div className="front">
                            <img className ="imgPeople" alt="" src= {sean} />
                            <div className="back">Sean Venz Quijano</div>
                        </div>
                    </div>
                    <div className="box">
                        <div className="front">
                            <img className ="imgPeople" alt="" src= {kent} />
                            <div className="back">Kent Stephen Sumalinog</div>
                        </div>
                    </div>
                    <div className="box">
                        <div className="front">
                            <img className ="imgPeople" alt="" src= {andre} />
                            <div className="back">Andre Lennard Uy</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default OurTeam;