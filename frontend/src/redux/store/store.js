import {configureStore} from "@reduxjs/toolkit";
import settingReducer from "../state/settingSlice";

export default configureStore({
    reducer:{
        setting: settingReducer,
    }
})