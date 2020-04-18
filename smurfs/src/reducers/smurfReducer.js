import {GET_SMURF, ADD_SMURF, SMURF_ERROR} from '../actions/smurfAction';

const initalState = {
    smurf: [],
    isFetchingData: false,
    error: ""
};

export const smurfReducer = (state = initalState, action) => {
    switch(action.type) {
        case GET_SMURF:
            return {
                ...state, isFetchingData: true
            };
        case ADD_SMURF:
            return {
                ...state,
                smurf: action.payload,
                isFetchingData: false
            };
        case SMURF_ERROR:
            return {
                ...state,
                isFetchingData: false,
                error: action.payload
            }
        default:
            return state;
    };
}

export default smurfReducer;