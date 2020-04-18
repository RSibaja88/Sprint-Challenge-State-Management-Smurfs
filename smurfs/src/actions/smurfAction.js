import axios from "axios";

export const GET_SMURF = "GET_SMURF"
export const ADD_SMURF = "ADD_SMURF"
export const SMURF_ERROR = "SMURF_ERROR"

export const getSmurf = () => dispatch => {
    dispatch({type:GET_SMURF});
    setTimeout(() => {
        axios   
            .get('http://localhost:3333/smurfs')
            .then(response => {
                // console.log("COMING FROM ACTIONS:", response.data)
                dispatch({
                    type: ADD_SMURF,
                    payload: response.data
                });
            })
            .catch(error => {
                console.log("ERRRROR", error);
                dispatch({type: SMURF_ERROR, payload:"ERROR"});
            });
    }, 1000);
};

export const postSmurf = smurfs => dispatch => {
    axios
    .post("http://localhost:3333/smurfs", smurfs)
    .then(response => {
        dispatch({
            type: ADD_SMURF,
            payload: response.data
        });
    });
};