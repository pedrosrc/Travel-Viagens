import '../Home/home.css'
import {AiFillStar, AiFillAlert} from 'react-icons/ai'
import {BsTrash3Fill} from 'react-icons/bs'
import { useSelector } from 'react-redux'

export default function Reserves(){
    
    const reserves:any = useSelector<any>(state => state.reserve)

    return(
        <div className="container_home">
            <h1>Reservas</h1>
            <div className='box'>
            {reserves.map((reserve:any) => (
                    <li key={reserve.id}>
                    <img src={reserve.image} alt="foto de paisagem" />
                    <strong>{reserve.title}</strong>
                    <strong><AiFillStar/>{reserve.note}</strong>
                    <div className='buttons'>
                    <button>Mais Detalhes</button>
                    <button><BsTrash3Fill/></button> 
                    </div>
                </li>
                ))}
                
            </div>
        </div>
    )
}