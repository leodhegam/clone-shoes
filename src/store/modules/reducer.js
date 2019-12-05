
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
          
        })
        default:
            return state;
        }
    
    }