import {FETCH_SMURF_START, 
    FETCH_SMURF_SUCCESS,
    FETCH_SMURF_ERROR,
    ADD_SMURF_START,
    ADD_SMURF_SUCCESS,
    ADD_SMURF_ERROR,
    REMOVE_SMURF_START,
    REMOVE_SMURF_SUCCESS,
    REMOVE_SMURF_ERROR
} from "../actions"

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
                data : [...action.payload],
                error :""
            }
        case FETCH_SMURF_ERROR :
            return {
                ...state,
                isFetching :false,
                error : action.payload
            }
            
        case ADD_SMURF_START :
            return {
                ...state,
                isFetching: true,

            }
        case ADD_SMURF_SUCCESS:
            return {
                ...state,
                isFetching: false,
                data: [...action.payload]
            }
        case ADD_SMURF_ERROR:
            return {
                ...state,
                isFetching: false,
                error: action.payload
            }
        case REMOVE_SMURF_START:
            return {
                ...state,
                isFetching: true,
            }
        case REMOVE_SMURF_SUCCESS:
            return {
                ...state,
                data: [...action.payload],
                isFetching: false
            }
        case REMOVE_SMURF_ERROR:
            return {
                ...state,
                isFetching : false,
                error: action.payload
            }
        default:
            return state
    }
}