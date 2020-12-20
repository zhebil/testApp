import { applyMiddleware, createStore } from "redux";
import thunkMiddleware from "redux-thunk";
import reducer from "./src/reducer";
const store = createStore(reducer, applyMiddleware(thunkMiddleware));
store.subscribe(() => {
  console.log("subscribe", store.getState());
});
export default store;
