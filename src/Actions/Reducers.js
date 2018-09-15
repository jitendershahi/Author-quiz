import * as actionsTypes from './ActionsTypes'

const initialState = {
       authors:null,
       books:null
}

export const Reducer = (state = initialState, action) => {

    switch(action.type) {
        case actionsTypes.GET_AUTHORS:
        console.log(action.data[0])
        return {
            ...state,
            authors: action.data[0]
        }

       default :
       return {
           state
       }
    }
}



export default Reducer;