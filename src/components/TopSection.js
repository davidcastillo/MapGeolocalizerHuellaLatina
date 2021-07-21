import {useState} from 'react'
import LocationInfoBox from './LocationInfoBox'


const TopSection = () => {
    const [locationInfo, setLocationInfo] = useState(null)

    const markers = data.map(item => {
        return <Locationmarker 
                    onClick={
                        ()=> setLocationInfo({
                        id: item.id, location: item.location, user: item.user          
                        })
                    } 
                />
    })



    return (
        <div>
            I am the top section
            {markers}
            {locationInfo && <LocationInfoBox info={locationInfo} />}
        </div>
    )
}

export default TopSection


