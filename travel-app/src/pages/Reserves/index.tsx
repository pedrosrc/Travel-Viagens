import '../Home/home.css'
import { AiFillStar, AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai'
import { BsTrash3Fill } from 'react-icons/bs'
import { removeReserve, updateReserveRequest } from '../../store/modules/reserves/actions'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

export default function Reserves() {

    const reserves = useSelector((state:any) => state.reserve);
    const dispactch = useDispatch();

    function handleDelete(id: any) {
        dispactch(removeReserve(id))
    }

    function minusAmount(trip: any){
        dispactch(updateReserveRequest(trip.id, trip.amount - 1,  trip.price/trip.amount*(trip.amount-1)))
    } 
    
    function plusAmount(trip:any){
        dispactch(updateReserveRequest(trip.id, trip.amount + 1,  trip.price/trip.amount*(trip.amount+1)))
    }

    return (
        <div className="container_home">
            <h1>Reservas</h1>
            <div className='box'>
                {reserves.length === 0 && <div className='pending'><span>Você não possui nenhuma viagem no carrinho!</span></div>}
                {reserves.map((reserve: any) => (
                    <li key={reserve.id}>
                        <img src={reserve.img} alt="foto de paisagem" />
                        <strong>{reserve.title}</strong>
                        <strong><AiFillStar />{reserve.note}</strong>
                        <span>R$ {reserve.price},00</span>

                        <div className='amounts'>
                            <button onClick={()=> minusAmount(reserve)}><AiOutlineMinus/></button>
                            <span>{reserve.amount}</span>
                            <button onClick={()=> plusAmount(reserve)}><AiOutlinePlus/> </button>
                        </div>
                        
                        <div className='buttons'>
                            
                            <button><Link to={`/trip/${reserve.id}`}>Mais Detalhes</Link></button>
                            <button onClick={() => handleDelete(reserve.id)}><BsTrash3Fill /></button>
                        </div>
                    </li>
                ))}

            </div>
        </div>
    )
}