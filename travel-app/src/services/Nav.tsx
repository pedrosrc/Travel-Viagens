import {Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Reserves from "../pages/Reserves";
import Sobre from "../pages/Sobre";

export default function Nav(){
    return(
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/reservas" element={<Reserves/>}/>
            <Route path="/sobre" element={<Sobre/>}/>    
        </Routes>
    )
}