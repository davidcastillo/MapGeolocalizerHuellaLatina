import { useEffect, useState } from "react";
import Tabletop from "tabletop";
import { readRemoteFile } from 'react-papaparse'

import Map from "./components/Map"
import LeftBar from "./components/LeftBar"
import Logo from "./components/Logo";



export default function App() {
  const [dataGS, setData] = useState([]);
    
  useEffect(() => {
    const fetchLocations = async () => {
     await readRemoteFile(
      "https://docs.google.com/spreadsheets/d/e/2PACX-1vQlaUgZk0F6TFtCL4EtQsqQM5gUmF_b471AaitF5lhOZHdHI-5jVIep3Q4sCjjUYWykP1kIlF0ZgTGi/pub?gid=0&single=true&output=csv",
        {
          header: true,
          complete: (data) => {
            setData(data.data)
            console.log(data.data);
          }
          
        }
      )   
    }
    
    fetchLocations()
  }, []);
  
  return (
    <div>
      <meta content="width=device-width, initial-scale=1" name="viewport" />

     
      <Map data={dataGS} />
      
      
      
    </div>
  );
}
