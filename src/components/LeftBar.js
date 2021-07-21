import {useState,useEffect} from 'react'
import TopSection from './TopSection'
import BottonSection  from './BottonSection'


const LeftBar = ({data}) => {


  

  return (
    <div >
        <TopSection data={data}/>
        <BottonSection />
    </div>
  )
}

export default LeftBar;