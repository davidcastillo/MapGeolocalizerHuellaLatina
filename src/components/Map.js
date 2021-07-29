import {useState} from 'react'
import GoogleMapReact from 'google-map-react'
import Locationmarker from './Locationmarker'
import LocationInfoBox from './LocationInfoBox'



const Map = ({data,center,zoom}) => {
    const [locationInfo, setLocationInfo] = useState(null);
    const [infoBoxPopup, setinfoBoxPopup] = useState(false);
    
    

    const markers = data.map(item => {
        return <Locationmarker 
                    lat ={item.lat}
                    lng={item.lng} 
                    onClick={
                        ()=> {
                            setLocationInfo({
                                status: item.status, 
                                location: item.location, 
                                user: item.user,
                                nationality: item.nationality,     
                                })
                            setinfoBoxPopup(true)
                        }
                    } 
                />
    })

 
    return (
        <div className="map">
    
            <GoogleMapReact
                bootstrapURLKeys={{
                    key: process.env.REACT_APP_GOOGLEMAPS_API_KEY
                }}
                defaultCenter = {center}
                defaultZoom = {zoom}
            >
                
                {markers}
                
            </GoogleMapReact>
            {infoBoxPopup && <LocationInfoBox trigger={infoBoxPopup} info={locationInfo} setTrigger={setinfoBoxPopup} />}
            
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

export default Map;
