import { useEffect, useState, useTransition } from "react"
import { useParams } from "react-router-dom"
import { useDispatch } from "react-redux";
import { addReserveRequest } from "../../store/modules/reserves/actions";
import api from "../../services/api"
import { AiFillStar } from 'react-icons/ai'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
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
            <img src={trip.img || <Skeleton height={200} />} alt="foto de praia" loading="lazy" />
            <div className="box_info">
                <h1>{trip.title || <Skeleton count={1} />}</h1>
                <div className="details">
                    <h3>R$ {trip.price || <Skeleton count={1} />},00</h3>
                    <h3><AiFillStar color="#ecd500" />{trip.note || <Skeleton count={1} />}</h3>
                </div>
                <p>{trip.description || <Skeleton count={6} />}</p>
                <button onClick={() => handleAdd(trip.id)}>Reservar</button>
            </div>
        </div >
    )
}