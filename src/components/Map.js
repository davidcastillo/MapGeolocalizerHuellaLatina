import {useState} from 'react'
import GoogleMapReact from 'google-map-react'
import Locationmarker from './Locationmarker'
import LocationInfoBox from './LocationInfoBox'
import Markers from "./Coordinatesgenerator"

const Map = ({data,center,zoom}) => {
    const [locationInfo, setLocationInfo] = useState(null)
    

    const markers = data.map(item => {
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
                    key: process.env.REACT_APP_GOOGLEMAPS_API_KEY
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