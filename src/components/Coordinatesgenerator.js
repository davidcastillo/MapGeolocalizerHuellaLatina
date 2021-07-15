import {useState,useEffect} from 'react'
import Locationmarker from './Locationmarker'


const CoordinatesGenerator = ({data}) => {


  
 /*
  const API_KEY = '';
  const [eventData, setEventData] = useState([]);
    
  useEffect(()=>{
    //console.log(data)
    data.map(item => {
      const place = item.location
      const fetchCoordinates = async () => {
        const response = await fetch("https://maps.googleapis.com/maps/api/geocode/json?address="+place+"&key="+API_KEY);
        const datos = await response.json();
        setEventData(datos);
        //console.log(eventData.results[0].geometry.location.lat);
      }
    
      fetchCoordinates()
      
    })

  }, [])
*/
  

  return (
    <div >
        Hello
    </div>
  )
}

export default CoordinatesGenerator;