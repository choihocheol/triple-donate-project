import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import login from "./loginReducer";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  login,
});

export default persistReducer(persistConfig, rootReducer);
