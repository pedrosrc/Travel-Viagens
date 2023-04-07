import { useState, useEffect } from "react"
import api from "../../services/api";

export default function Home(){

    const [trips, setTrips] = useState<any[]>([]);

    useEffect(()=>{
        async function loadApi() {
            const response = await api.get('trips')
            setTrips(response.data);
        }
        loadApi();
    }, []);


    return(
        <div>
            <h1>Home</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda sit suscipit autem, quae similique fugiat! Magni voluptas repellat assumenda minus tenetur amet numquam provident cupiditate, reiciendis, pariatur nisi cumque nobis?</p>
        </div>
    )
}