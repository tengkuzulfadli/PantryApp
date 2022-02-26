import * as actionType from "../actions/actionTypes";

const initialState = {
    ingredients: []
};
export default function (state = initialState, action:any) {
    switch (action.type) {
        case actionType.ADD_INGREDIENT: {
            return {
                ...state,
                ingredients: action.payload
            };
        }
        case actionType.DELETE_INGREDIENT: {
            return {
                ...state,
                ingredients: action.payload
            };
        }
        default: {
            return { ...state };
        }
    }
}
