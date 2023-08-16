import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './CounterSlice';

const Counterstore = configureStore({
    reducer:{
        counter:counterReducer
    }
})
export default Counterstore;