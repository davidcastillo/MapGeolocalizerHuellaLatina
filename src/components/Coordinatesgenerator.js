import {useState,useEffect} from 'react'
//import Map from "./Map"


const CoordinatesGenerator = ({data}) => {
  // const [coordinates, setCoordinates] = useState([]);
  // const API_KEY = process.env.REACT_APP_GOOGLEMAPS_API_KEY;
  //var newCoordinates = [];

  useEffect(() => {


    // const fetchCoordinates = async (place) => {
    //   //setCoordinates(coordenada);
    //   const response = await fetch("https://maps.googleapis.com/maps/api/geocode/json?address="+place+"&key="+API_KEY)
    //   // .then((datos) => datos.json())
    //   // .then((datos) => { setCoordinates(newCoordinates => [...newCoordinates, datos])})
    //   // .catch((err) => console.warn(err));
    //   const coordenada = await response.json();
    //   setCoordinates(newCoordinates => [...newCoordinates, coordenada]);
    // }

    // data.map(item => {
    //   console.log(item.location);
    //   fetchCoordinates(item.location);
    //   return "";
    // })

    // console.log(coordinates);

  }, []);
  

  return (
    <div >
        Hello
        
    </div>
  )
}

export default CoordinatesGenerator;