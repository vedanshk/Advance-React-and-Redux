import React from "react";
import { Provider } from "react-redux";
import { applyMiddleware } from "redux";
import {createStore} from 'redux';
import async from "./middleware/async";
import reducers from "./reducers";


export default ({children , initialState={} }) =>{
    const store = createStore(reducers , initialState , applyMiddleware(async));
    return (
        <Provider store={store} >
            {children}
        </Provider>
    );
}