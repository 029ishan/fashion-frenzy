import { configureStore} from "@reduxjs/toolkit"
import {persistStore} from "redux-persist"
import RootReducer from "./RootReducer";
 import {thunk} from 'redux-thunk'
const Store = configureStore({
    reducer: RootReducer,
    // middleware: [thunk],
    // eslint-disable-next-line
    reducer: RootReducer,
    middleware: getDefaultmiddleware => getDefaultmiddleware().concat(thunk)
});
export const persistor = persistStore(Store);
export default Store;