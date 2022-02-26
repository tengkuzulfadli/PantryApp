import {
    ADD_INGREDIENT,
    DELETE_INGREDIENT,
    ADD_RECIPE,
    DELETE_RECIPE,
    SELECT_RECIPE,
    ADD_HISTORY,
    DELETE_HISTORY
} from "./actionTypes";

export const addIngredient = (data:any) => {
    return {
        type: ADD_INGREDIENT, payload: data
    };
};

export const deleteIngredient = (data:any) => {
    return {
        type: DELETE_INGREDIENT, payload: data
    };
};

export const addRecipe = (data:any) => {
    return {
        type: ADD_RECIPE, payload: data
    };
};

export const deleteRecipe = (data:any) => {
    return {
        type: DELETE_RECIPE, payload: data
    };
};

export const selectRecipe = (data:any) => {
    return {
        type: SELECT_RECIPE, payload: data
    };
};

export const addHistory = (data:any) => {
    return {
        type: ADD_HISTORY, payload: data
    };
};

export const deleteHistory = (data:any) => {
    return {
        type: DELETE_HISTORY, payload: data
    };
};
