import { useEffect, useState } from 'react';
import {BrowserRouter as Router, Routes, Route, Outlet} from "react-router-dom";


export default function Home(){

    return(
        <>
            <h1>this is home</h1>
            <Outlet />
    </>
    )
}