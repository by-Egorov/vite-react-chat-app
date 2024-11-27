import storage from 'redux-persist/lib/storage'
import {combineReducers, createStore} from "redux";
import {userReducer} from "./userReducer.js";
import {persistReducer, persistStore} from "redux-persist";
import {composeWithDevTools} from "@redux-devtools/extension";



const persistConfig = {
    key: 'root',
    storage
}
const rootReduser = combineReducers({
    users: userReducer
})
const persistedReducer = persistReducer(persistConfig, rootReduser)
export const store = createStore(persistedReducer, composeWithDevTools())
export const persistor = persistStore(store)