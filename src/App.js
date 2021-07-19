import { useEffect, useState } from "react";
import Tabletop from "tabletop";
import Map from "./components/Map"
import CoordinatesGenerator from "./components/Coordinatesgenerator"


export default function App() {
  const [dataGS, setData] = useState([]);
    
  useEffect(() => {
    const fetchLocations = async () => {
      await Tabletop.init({
        key: "KYM6IIoPRCnOkZKDjlsMr8Vz_AXn9tmImxSKYygvrSg",
        simpleSheet: true
      })
        .then((data) => {setData(data)})
        .catch((err) => console.warn(err));
    }
    
    fetchLocations()
  }, []);
  
  return (
    <div>
      <Map data={dataGS} />
      <CoordinatesGenerator  data={dataGS} />
    </div>
  );
}
