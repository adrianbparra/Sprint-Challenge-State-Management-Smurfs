import {FETCH_SMURF_START, FETCH_SMURF_SUCCESS,FETCH_SMURF_ERROR} from "../actions"

const initialState = {
    data: [],
    isFetching : false,

}


export const smurfReducer = (state = initialState, action) => {


    switch (action.type) {
        case FETCH_SMURF_START: 
            return {
                ...state,
                isFetching : true
            }
    
        default:
            return state
    }
}