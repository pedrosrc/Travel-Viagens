import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom";
import {AiFillStar, AiFillAlert} from 'react-icons/ai'
import api from "../../services/api";
import './home.css'

export default function Home(){

    const navigate = useNavigate();
    const [trips, setTrips] = useState<any[]>([]);
    
    useEffect(()=>{
        async function loadApi() {
            const response = await api.get('trips')
            setTrips(response.data);
        }
        loadApi();
    }, []);

    async function details(id: any) {
        navigate(`/trip/${id}`)
        
    }

    

    return(
        <div className="container_home">
            <h1>Viagens</h1>
            <div className="box">
                {trips.map(trip =>(
                    <li key={trip.id}>
                        <img src={trip.image} alt={trip.title}/>
                        <strong>{trip.title}</strong>
                        <strong><AiFillStar/>{trip.note}</strong>
                        <span>{trip.status ? <AiFillAlert  color="green"/>: <AiFillAlert color="red"/>} {trip.status ? 'Disponivel': 'Indisponivel'}</span>
                        
                        <span>R$ {trip.price},00 p/ noite.</span>
                        <button disabled={trip.status === false} onClick={() => details(trip.id)}>{trip.status ? 'Mais Detalhes' : 'Indisponivel' }</button>
                    </li>
                ))}
            </div>
        </div>
    )
}