import { Link } from "react-router-dom"
import {FaRegPaperPlane} from 'react-icons/fa'
import './header.css'

export default function Header(){
    return(   
        <header className="container_header">
            <div className="logo">
            <FaRegPaperPlane size={35} color="#3D8833"/>
            <span>Travel</span>
            </div>
            
            <nav className="nav">
                <Link to="/">Home</Link>
                <Link to="/reservas">Reservas</Link>
                <Link to="/sobre">Sobre</Link>
            </nav>
        </header>
    
    )
}