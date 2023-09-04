import { useState, useEffect, useTransition } from "react"
import { useNavigate } from "react-router-dom";
import { AiFillStar, AiFillAlert } from 'react-icons/ai'
import Skelect from "../../components/Skelect";
import api from "../../services/api";
import 'react-loading-skeleton/dist/skeleton.css'
import './home.css'

export default function Home() {

    const navigate = useNavigate();
    const [trips, setTrips] = useState<any[]>([]);
    const [isPending, startTransition] = useTransition();

    useEffect(() => {
        async function loadApi() {
            await api.get('trips')
                .then((response) => {
                    startTransition(() => {
                        setTrips(response.data)
                    });
                })
                .catch((error) => {
                    console.log(error)
                });
        }
        loadApi();
    }, [setTrips]);

    async function details(id: any) {
        navigate(`/trips/${id}`)
    }

    return (
        <div className="container_home">
            <h1>Viagens</h1>
            {isPending ? (
                <Skelect />
            ) : (
                <div className="box">
                    {trips.map(trip => (
                        <li key={trip.id}>
                            <img src={trip.img} alt={trip.title} className='image' />
                            <strong>{trip.title}</strong>
                            <strong><AiFillStar />{trip.note}</strong>
                            <span>{trip.status ? <AiFillAlert color="green" /> : <AiFillAlert color="red" />} {trip.status ? 'Disponivel' : 'Indisponivel'}</span>
                            <span>R$ {trip.price},00 p/ noite.</span>
                            <button disabled={trip.status === 0} onClick={() => details(trip.id)}>{trip.status ? 'Mais Detalhes' : 'Indisponivel'}</button>
                        </li>
                    ))}
                </div>
            )}
        </div>
    )
}