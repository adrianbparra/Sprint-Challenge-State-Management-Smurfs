import {FETCH_SMURF_START, FETCH_SMURF_SUCCESS,FETCH_SMURF_ERROR} from "../actions"

const initialState = {
    data: [],
    isFetching : false,
    error: ""
}


export const smurfReducer = (state = initialState, action) => {


    switch (action.type) {
        case FETCH_SMURF_START: 
            return {
                ...state,
                isFetching : true,
                error: "",
            }
        case FETCH_SMURF_SUCCESS: 
            return {
                ...state,
                isFetching :false,
                data : action.payload,
                error :""
            }
        case FETCH_SMURF_ERROR :
            return {
                ...state,
                isFetching :false,
                error : action.payload
            }
    
        default:
            return state
    }
}