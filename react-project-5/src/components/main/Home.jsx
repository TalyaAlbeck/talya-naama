import { useEffect, useState } from 'react';
import {BrowserRouter as Router, Routes, Route, Outlet} from "react-router-dom";




export default function Home(){
    const [showInfo, setShowInfo] = useState(false)

    return(
        <>
            <h1>this is home</h1>

            {!showInfo && 
            <> 
            <button onClick={()=>setShowInfo(true)} > show my info </button>
            </>}

            {showInfo&&
            <h1>here's your info</h1>}
            
            {/* <Outlet /> */}
        </>
    )
}