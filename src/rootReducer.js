
import uuid from 'react-uuid';

const rootReducer = (state=[], action) => {

    let payload = action.payload
    
    switch(action.type){
        case "ADD_TODO":
            return [...state, {payload , id: uuid()}]
        case "DELETE":
            return state.filter(data => data.id !== payload)
        default:
            return state
    }
}

export default rootReducer;