import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { createResetMetaReducer } from "./Slices/MetaReducer";
import addTocard from "./Slices/AddtoCart"

const resetSlices=[
  "addtocard",
];

const rootReducer=createResetMetaReducer(
    "GLOBAL_RESET",
    resetSlices
)(
    combineReducers({
        addtocard:addTocard
    })
);

const persistConfig={
    key:"root",
    storage,
    whitelist:resetSlices,
};
export default persistReducer(persistConfig,rootReducer);