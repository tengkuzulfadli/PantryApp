import * as actionType from "../actions/actionTypes";

const initialState = {
    histories: []
};
export default function (state = initialState, action:any) {
    switch (action.type) {
        case actionType.ADD_HISTORY: {
            return {
                ...state,
                histories: action.payload
            };
        }
        case actionType.DELETE_HISTORY: {
            return {
                ...state,
                histories: action.payload
            };
        }
        default: {
            return { ...state };
        }
    }
}
