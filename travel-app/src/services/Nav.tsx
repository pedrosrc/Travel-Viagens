import {Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Reserves from "../pages/Reserves";
import Sobre from "../pages/Sobre";
import Trip from "../pages/Trip";

export default function Nav(){
    return(
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/reservas" element={<Reserves/>}/>
            <Route path="/trip/:id" element={<Trip/>} />
            <Route path="/sobre" element={<Sobre/>}/>
                
        </Routes>
    )
}