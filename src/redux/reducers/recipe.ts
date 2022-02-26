import * as actionType from "../actions/actionTypes";

const initialState = {
    recipes: [],
    selectedRecipe: {
        id: null,
        title: "",
        name: "",
        qty: null,
        ingredients: [],
        method: ""
    }
};
export default function (state = initialState, action:any) {
    switch (action.type) {
        case actionType.ADD_RECIPE: {
            return {
                ...state,
                recipes: action.payload
            };
        }
        case actionType.DELETE_RECIPE: {
            return {
                ...state,
                recipes: action.payload
            };
        }
        case actionType.SELECT_RECIPE: {
            return {
                ...state,
                selectedRecipe: action.payload
            };
        }
        default: {
            return { ...state };
        }
    }
}
