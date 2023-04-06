import {Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Reserves from "../pages/Reserves";

export default function Nav(){
    return(
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/reservas" element={<Reserves/>}/>

        </Routes>
    )
}