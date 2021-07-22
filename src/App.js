import { useEffect, useState } from "react";
import Tabletop from "tabletop";
import Map from "./components/Map"
import LeftBar from "./components/LeftBar"


export default function App() {
  const [dataGS, setData] = useState([]);
    
  useEffect(() => {
    const fetchLocations = async () => {
      await Tabletop.init({
        key: process.env.REACT_APP_SPREADSHEET_KEY,
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
      <LeftBar />
      
    </div>
  );
}
