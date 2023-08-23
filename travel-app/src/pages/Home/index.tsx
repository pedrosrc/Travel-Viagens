import { useState, useEffect, useTransition } from "react"
import { useNavigate } from "react-router-dom";
import { AiFillStar, AiFillAlert } from 'react-icons/ai'
import api from "../../services/api";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import './home.css'

export default function Home() {

    const navigate = useNavigate();
    const [trips, setTrips] = useState<any[]>([]);

    useEffect(() => {
        async function loadApi() {
            const response = await api.get('trips');
            setTrips(response.data);
        }
        loadApi();
    }, [setTrips]);

    async function details(id: any) {
        navigate(`/trips/${id}`)
    }


    return (
        <div className="container_home">
            <h1>Viagens</h1>
            <div className="box">
                {trips.map(trip => (
                    <li key={trip.id}>
                        <img src={trip.img  || <Skeleton/>} alt={trip.title} className='image' />
                        <strong>{trip.title || <Skeleton count={1} />}</strong>
                        <strong><AiFillStar />{trip.note  || <Skeleton count={1} />}</strong>
                        <span>{trip.status ? <AiFillAlert color="green" /> : <AiFillAlert color="red" />} {trip.status ? 'Disponivel' : 'Indisponivel'}</span>
                        <span>R$ {trip.price},00 p/ noite.</span>
                        <button disabled={trip.status === 0} onClick={() => details(trip.id)}>{trip.status ? 'Mais Detalhes' : 'Indisponivel'}</button>
                    </li>
                ))}
            </div>
        </div>
    )
}