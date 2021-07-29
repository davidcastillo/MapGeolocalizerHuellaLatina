import Logo from "./Logo";
import BottonSection from "./BottonSection";

const LocationInfoBox = ({info}) => {
    function hideInfoBox(e){
        e.preventDefault();
        console.log("Hello David");
    }


    return (
        
        <div className="location-info">
            <span className="closeInfoBox" onClick={hideInfoBox} >X</span>
            <Logo />
            <h2>{info.user}</h2> 
            <div className="asociate-info">
                <ul>
                    <li><strong>Country of Origin:</strong> {info.nationality}
                        <img className="flag"  src={"https://www.countryflags.io/"+info.nationality.split('-').pop()+"/flat/32.png"}/>
                    </li>
                    <li><strong>Location:</strong> {info.location}</li>
                    <li><strong>Status: </strong> {info.status}</li>
                </ul>
            </div>
            <BottonSection />
        </div>
    )
}

export default LocationInfoBox
