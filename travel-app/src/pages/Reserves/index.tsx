import '../Home/home.css'
import { AiFillStar, AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai'
import { BsTrash3Fill } from 'react-icons/bs'
import { removeReserve, updateReserve } from '../../store/modules/reserves/actions'
import { useSelector, useDispatch } from 'react-redux'

export default function Reserves() {

    const reserves: any = useSelector<any>(state => state.reserve)
    const dispactch = useDispatch();

    function handleDelete(id: any) {
        dispactch(removeReserve(id))
    }

    function minusAmount(trip:any){
        dispactch(updateReserve(trip.id, trip.amount - 1,  trip.price/trip.amount*(trip.amount-1)))
    } 
    
    function plusAmount(trip:any){
        dispactch(updateReserve(trip.id, trip.amount + 1,  trip.price/trip.amount*(trip.amount+1)))
    }

    return (
        <div className="container_home">
            <h1>Reservas</h1>
            <div className='box'>
                {reserves.map((reserve: any) => (
                    <li key={reserve.id}>
                        <img src={reserve.image} alt="foto de paisagem" />
                        <strong>{reserve.title}</strong>
                        <strong><AiFillStar />{reserve.note}</strong>
                        <span>R$ {reserve.price},00</span>

                        <div className='amounts'>
                            <button onClick={()=> minusAmount(reserve)}><AiOutlineMinus/></button>
                            <span>{reserve.amount}</span>
                            <button onClick={()=> plusAmount(reserve)}><AiOutlinePlus/> </button>
                        </div>
                        
                        <div className='buttons'>
                            <button>Mais Detalhes</button>
                            <button onClick={() => handleDelete(reserve.id)}><BsTrash3Fill /></button>
                        </div>
                    </li>
                ))}

            </div>
        </div>
    )
}