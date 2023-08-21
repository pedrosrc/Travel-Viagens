import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { useDispatch } from "react-redux";
import { addReserveRequest } from "../../store/modules/reserves/actions";
import api from "../../services/api"
import { AiFillStar } from 'react-icons/ai'
import './trip.css'

export default function Trip() {

    const dispatch = useDispatch();
    const { id } = useParams();
    const [trip, setTrip] = useState<any>({})

    useEffect(() => {
        async function loadTrip() {
            await api.get(`trips/${id}`)
                .then((response) => {
                    setTrip(response.data)
                })
                .catch((error) => {
                    console.log(error)
                })
        }
        loadTrip();

    }, []);
    

    async function handleAdd(id: any) {
        dispatch(addReserveRequest(id));
    };

    return (
        <div className="container_tr">
            <img src={trip.img} alt="foto de praia" />
            <div className="box_info">
                <h1>{trip.title}</h1>
                <div className="details">
                    <h3>R$ {trip.price},00</h3>
                    <h3><AiFillStar color="#ecd500" />{trip.note}</h3>
                </div>
                <p>{trip.description}</p>
                <button onClick={() => handleAdd(trip.id)}>Reservar</button>
            </div>
        </div >
    )
}