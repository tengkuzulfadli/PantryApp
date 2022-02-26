import { combineReducers } from "redux";

import ingredient from "./ingredient";
import recipe from "./recipe";
import history from "./history";

export default combineReducers({
    ingredient,
    recipe,
    history
});
