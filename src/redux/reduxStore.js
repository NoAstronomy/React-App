import {combineReducers, legacy_createStore as createStore} from "redux"; 
import profileReducer from "./profileReducer";
import dialogsReducer from './dialogsReducer';


let reducers = combineReducers({
    profile: profileReducer,
    dialogsGroup: dialogsReducer
});

let store = createStore(reducers);

export default store;


