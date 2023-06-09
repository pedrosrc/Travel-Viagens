import { Link } from "react-router-dom"
import {FaRegPaperPlane} from 'react-icons/fa'
import {BsCart3} from 'react-icons/bs'
import { useSelector } from "react-redux"
import './header.css'

export default function Header(){
    
    const reserveSizer:any = useSelector<any>(state => state.reserve);

    return(   
        <header className="container_header">
            <div className="logo">
            <FaRegPaperPlane size={35} color="#3D8833"/>
            <span>Travel</span>
            </div>
            
            <nav className="nav">
                <Link to="/">Home</Link>
                <Link to="/sobre">Sobre</Link>
                <Link to="/reservas"><BsCart3 size={18}/> <span>{reserveSizer.length ? reserveSizer.length : ''}</span></Link>
                
            </nav>
        </header>
    
    )
}