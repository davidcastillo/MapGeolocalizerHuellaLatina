import {useState,useEffect} from 'react'
import TopSection from './TopSection'
import BottonSection  from './BottonSection'


const LeftBar = ({associateData}) => {

  //console.log(associateData.location);
  

  return (
    <div  className='sidebar'>
        <TopSection associateData={associateData} />
        <BottonSection/>
    </div>
  )
}

export default LeftBar;