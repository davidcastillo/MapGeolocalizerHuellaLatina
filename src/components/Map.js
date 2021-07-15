import {useState} from 'react'
import GoogleMapReact from 'google-map-react'
import Locationmarker from './Locationmarker'
import LocationInfoBox from './LocationInfoBox'
import Markers from "./Coordinatesgenerator"

const Map = ({data,center,zoom}) => {
    const [locationInfo, setLocationInfo] = useState(null)
    
/*
    useEffect( ()=>{
        console.log(data);
        data.map(item => {
            const fetchCoordinates = async () => {
                await fetch("https://maps.googleapis.com/maps/api/geocode/json?address="+item.location+"&key="+API_KEY)
                .then((datos) => {setEventData(datos)})
                .catch((err) => console.log.warn(err))l     
            }
            fetchCoordinates();
            console.log(eventData);
            
        })},[]);
              */
 
        //   const fetchCoordinates = async () => {
        //     const response = await fetch("https://maps.googleapis.com/maps/api/geocode/json?address="+item.location+"&key="+API_KEY);
        //     const datos = await response.json();     
        //     setEventData(datos);
        //     }
        //   fetchCoordinates()
        //   console.log(eventData);
        //   return "";



    const markers = data.map(item => {
        /*
        const fetchCoordinates = async () => {
            await fetch("https://maps.googleapis.com/maps/api/geocode/json?address="+item.location+"&key="+API_KEY)
            .then((datos) => {setEventData(datos)})
            .catch((err) => console.log.warn(err))   
        }
        fetchCoordinates();
        console.log("hello");
*/
        return <Locationmarker 
                    lat ={item.lat}
                    lng={item.lng} 
                    onClick={
                        ()=> setLocationInfo({
                        id: item.id, location: item.location, user: item.user          
                        })
                    } 
                />
    })

 
    return (
        <div className="map">
    
            <GoogleMapReact
                bootstrapURLKeys={{
                    key: '1AIzaSyCs2yRPIrkwSV57SsofAlZYXQEDirlkr5I'
                }}
                defaultCenter = {center}
                defaultZoom = {zoom}
            >
                
                {markers}
                
            </GoogleMapReact>
            {locationInfo && <LocationInfoBox info={locationInfo} />}
        </div>
    )
}

Map.defaultProps = {
    center:{
        lat: 41.157396,
        lng: -8.628173
    },
    zoom:0
    
}

export default Map