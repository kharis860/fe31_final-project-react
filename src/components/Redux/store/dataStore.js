import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import dataReducer from "../reducer/dataReducer";
import idReducer from "../reducer/idReducer";
import { combineReducers } from "redux";
const Reducers = combineReducers({
  data: dataReducer,
  id: idReducer,
});

const store = createStore(Reducers, applyMiddleware(thunk));

export default store;
