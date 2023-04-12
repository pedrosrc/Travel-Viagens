import { call, put, all, takeLatest, select } from 'redux-saga/effects';
import { addReserveSucess, updateReserve } from './actions';
import api from "../../../services/api";


function* addToReserve({id}:any):any{ 

    const tripExists:any = yield select(
        state=> state.reserve.find((trip:any) => trip.id === id)
    );


    //Consultando Estoque  
      
    const myStock= yield call(api.get, `stock/${id}`)

    const stockAmount = myStock.data.amount;

    const currentStock = tripExists ? tripExists.amount : 0;

    const amount = currentStock + 1;

    if(amount > stockAmount){
        alert('Quantidade maxima permitida!')
        return;
    }

    if (tripExists){

        const price = tripExists.price/tripExists.amount *(tripExists.amount + 1);
    

        yield put(updateReserve(id, amount, price));
    }else{
        const response = yield call(api.get, `trips/${id}`);
        
        const data = {
            ...response.data,
            amount: 1,
        }

        yield put(addReserveSucess(data))
    }
    
}
export default all([
    takeLatest('ADD_RESERVE_REQUEST', addToReserve)
]);