// import {legacy_createStore} from "redux";
// import { rootReducers } from "./rootReducer";

// const store = legacy_createStore(rootReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

// export {store}




import {configureStore} from '@reduxjs/toolkit';

import mainSlice from './mainSlice';

export const store = configureStore({
    reducer: {
        actions: mainSlice
    }
})

