import '../Home/home.css'
import {AiFillStar, AiFillAlert} from 'react-icons/ai'
import {BsTrash3Fill} from 'react-icons/bs'

export default function Reserves(){
    return(
        <div className="container_home">
            <h1>Reservas</h1>
            <div className='box'>
                <li>
                    <img src="https://sujeitoprogramador.com/wp-content/uploads/2019/12/maceio.jpg" alt="" />
                    <strong>Viagem a Maceio</strong>
                    <strong><AiFillStar/>4.9</strong>
                    <div className='buttons'>
                    <button>Mais Detalhes</button>
                    <button><BsTrash3Fill/></button> 
                    </div>

                </li>
            </div>
        </div>
    )
}