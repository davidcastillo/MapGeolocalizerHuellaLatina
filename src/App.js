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
      "https://docs.google.com/spreadsheets/d/1KYM6IIoPRCnOkZKDjlsMr8Vz_AXn9tmImxSKYygvrSg/pub?output=csv",
        {
          header: true,
          complete: (data) => {
            setData(data.data)
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
