import produce from "immer";
export default function reserve(state = [], action:any){
    
    switch(action.type){
        case 'ADD_RESERVE_SUCESS':
            
            return produce<any>(state, draft =>{

                draft.push(action.trip);
            });
        case 'DELETE_RESERVE':
            return produce<any>(state, draft=>{
                const tripIndex = draft.findIndex((trip:any) => trip.id === action.id)

                if(tripIndex >= 0){
                    draft.splice(tripIndex,1)
                }
               
                 
            });
        case 'UPDATE_RESERVE':
            if(action.amount <= 0 ){
                return state;
            }
            return produce<any>(state, draft =>{
                const tripIndex = draft.findIndex((trip:any) => trip.id === action.id)


                if(tripIndex >= 0){
                    draft[tripIndex].amount = Number(action.amount)
                    draft[tripIndex].price = Number(action.price)
                }
            })
        default:
            return state;
    }
}