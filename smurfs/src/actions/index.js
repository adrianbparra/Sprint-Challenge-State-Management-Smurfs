import axios from "axios";

export const FETCH_SMURF_START =  "FETCH_SMURF_START"
export const FETCH_SMURF_SUCCESS = "FETCH_SMURF_SUCCESS"
export const FETCH_SMURF_ERROR = "FETCH_SMURF_ERROR"


export const fetchSmurfData = () => dispatch => {
    dispatch({type: FETCH_SMURF_START});
    axios.get("http://localhost:3333/smurfs")
        .then(res =>{
            console.log(res)
            dispatch({type: FETCH_SMURF_SUCCESS, payload: res.data})
        })
        .catch(err=>{
            console.log(err)
            dispatch({type: FETCH_SMURF_ERROR, payload: err})
        })
}



export const ADD_SMURF_START = "ADD_SMURF_START";
export const ADD_SMURF_SUCCESS = "ADD_SMURF_SUCCESS";
export const ADD_SMURF_ERROR = "ADD_SMURF_ERROR";


export const addSmurfCharacter = data => dispatch => {
    dispatch({type: ADD_SMURF_START})
    axios.post("http://localhost:3333/smurfs", data)
        .then(res => {
            
            dispatch({type: ADD_SMURF_SUCCESS, payload: res.data})
            console.log(res)
            console.log(res.data)

        })
        .catch(err => {
            console.log(err)
            dispatch({type: ADD_SMURF_ERROR, payload: err})
        })
}



export const REMOVE_SMURF_START = "REMOVE_SMURF_START";
export const REMOVE_SMURF_SUCCESS = "REMOVE_SMURF_SUCCESS"
export const REMOVE_SMURF_ERROR = "REMOVE_SMURF_ERROR"


export const removeSmurf = id => dispatch =>{
    dispatch({type: REMOVE_SMURF_START});
    axios.delete(`http://localhost:3333/smurfs/${id}`)
        .then(res =>{
            console.log(res)
            console.log(res.data)
            dispatch({type: REMOVE_SMURF_SUCCESS, payload: res.data})
        })
        .catch(err=>{
            console.log(err)
            dispatch({type: REMOVE_SMURF_ERROR, payload: err})
        })
}