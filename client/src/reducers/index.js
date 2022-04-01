import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
// import storage from "redux-persist/lib/storage";
import storageSession from "redux-persist/lib/storage/session";
import login from "./loginReducer";

const persistConfig = {
  key: "root",
  // storage,
  storage: storageSession,
};

const rootReducer = combineReducers({
  login,
});

export default persistReducer(persistConfig, rootReducer);
