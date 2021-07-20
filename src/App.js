import { useEffect, useState } from "react";
import Tabletop from "tabletop";
import Map from "./components/Map"
import CoordinatesGenerator from "./components/Coordinatesgenerator"



export default function App() {
  const [dataGS, setData] = useState([]);
  const [coordinates, setCoordinates] = useState([]);
  const API_KEY = process.env.REACT_APP_GOOGLEMAPS_API_KEY;

    
  useEffect(() => {

    const fetchCoordinates = async (place) => {
      const response = await fetch("https://maps.googleapis.com/maps/api/geocode/json?address="+place+"&key="+API_KEY)
      // .then((datos) => datos.json())
      // .then((datos) => { setCoordinates(newCoordinates => [...newCoordinates, datos])})
      // .catch((err) => console.warn(err));
      const coordenada = await response.json();
      setCoordinates(newCoordinates => [...newCoordinates, coordenada]);
    }

    const fetchLocations = async () => {
      await Tabletop.init({
        key: process.env.REACT_APP_SPREADSHEET_KEY,
        simpleSheet: true
      })
        .then((data) => {setData(data)})
        .catch((err) => console.warn(err));
    }
    fetchLocations();

    dataGS.map(item => {
      console.log(item.location);
      fetchCoordinates(item.location);
      return "";
    }
)

  }, []);
  
  return (
    <div>
      <Map data={dataGS} coordinates={coordinates}/>
      <CoordinatesGenerator  data={dataGS} />
    </div>
  );
}
