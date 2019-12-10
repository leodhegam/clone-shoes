
import produce from 'immer';
export default function cart(state=[],action){
    switch (action.type){
        case 'ADD_CART' : 
        return produce(state,draft => {
            const Index = draft.findIndex(p => p.id === action.product.id);
            if(Index >= 0){
                draft[Index].amount += 1;
            }else {
                draft.push ({
                    ...action.product,amount:1,
                });
            }
          
        });
        case 'REMOVE_CART' : 
        return produce(state,draft => {
            const Index = draft.findIndex(p => p.id === action.id);
            if(Index >= 0){
                draft.splice(Index,1);

            }
        });
        case 'UPDATE_AMOUNT' : {
            if(action.amount <=0){
                return state;
            }
            return produce(state,draft => {
                const Index = draft.findIndex(p => p.id === action.id);
                if(Index >= 0){
                    draft[Index].amount = Number(action.amount);
                }
                });
            }
        
               
        default:
            return state;
        }
    
    }