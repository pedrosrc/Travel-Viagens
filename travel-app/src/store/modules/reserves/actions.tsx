interface Props{
    trip?: any,
    id?: any,
    amount?: any
}
//ADICIONANDO RESERVA
export function addReserveRequest(id: Props){
    return({
        type: 'ADD_RESERVE_REQUEST',
        id
    })
}
export function addReserveSucess(trip: Props){
    return({
        type: 'ADD_RESERVE_SUCESS',
        trip
    })
}
//REMOVENDO RESERVA
export function removeReserve(id: Props){
    return({
        type: 'DELETE_RESERVE',
        id,
    })
}

export function updateReserveRequest(id:any, amount:any, price:any){
    return({
        type: 'UPDATE_RESERVE_REQUEST',
        id,
        amount,
        price,
    })
}
export function updateReserveSuccess(id:any, amount:any, price:any){
    return({
        type: 'UPDATE_RESERVE_SUCCESS',
        id,
        amount,
        price,
    })
}