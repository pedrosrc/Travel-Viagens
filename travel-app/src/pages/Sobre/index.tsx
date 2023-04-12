import '../Home/home.css'
import {AiFillGithub, AiFillLinkedin} from 'react-icons/ai'
export default function Sobre(){
    return(
        <div className='container_home'>
            <h1>Sobre</h1>
            <div className='box_sobre'>
                <p>Travel se trata de um projeto de estudos, criado pelo Pedro Leonardo, o intuito desse projeto é demonstrar meus conhecimentos, onde utilizo Redux e uma API criada no Node JS, fazendo disso um site de viagens como AirBnb, Booking etc. Espero que gostem e me acompanhem nas redes socias:</p>
                <div className='medias'>
                    <a href="https://github.com/pedrosrc" target='_blank' title='GitHub'><AiFillGithub size={25} color='#fff'/></a>
                    <a href="https://www.linkedin.com/in/pedroleodev" target='_blank' title='LinkedIn'><AiFillLinkedin size={25} color='#fff'/></a>
                </div>
            </div>
        </div>
    )
}