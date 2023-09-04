import Skeleton from 'react-loading-skeleton'
import './skelect.css'

export default function Skelect(){

    return(
        <div className='skeleton-container'>
            <ul>
                    <li>
                        <div className='item-group'>
                            <Skeleton height={200}/>
                            <h1><Skeleton height={20}/></h1>
                            <p> <Skeleton height={15} count={3}/> </p>
                        </div>
                        <div className='item-group'>
                            <Skeleton height={200}/>
                            <h1><Skeleton height={20}/></h1>
                            <p> <Skeleton height={15} count={3}/> </p>
                        </div>
                        <div className='item-group'>
                            <Skeleton height={200}/>
                            <h1><Skeleton height={20}/></h1>
                            <p> <Skeleton height={15} count={3}/> </p>
                        </div>
                        <div className='item-group'>
                            <Skeleton height={200}/>
                            <h1><Skeleton height={20}/></h1>
                            <p> <Skeleton height={15} count={3}/> </p>
                        </div>
                        <div className='item-group'>
                            <Skeleton height={200}/>
                            <h1><Skeleton height={20}/></h1>
                            <p> <Skeleton height={15} count={3}/> </p>
                        </div>
                        <div className='item-group'>
                            <Skeleton height={200}/>
                            <h1><Skeleton height={20}/></h1>
                            <p> <Skeleton height={15} count={3}/> </p>
                        </div>
                    </li>
            </ul>
        </div>
    )
}