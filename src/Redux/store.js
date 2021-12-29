import reducer from "./reducer";
import {applyMiddleware, createStore} from "redux";
import thunk from "redux-thunk";

const networkRequests = (store) => (next) => (action) => {
    if (typeof action === "function"){
        const func = action;
        return func(store.dispatch, store.getState)
    }
    else{
        next(action)
    }
}

export const store = createStore(reducer, applyMiddleware(thunk));