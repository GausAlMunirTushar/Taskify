import {configureStore} from "@reduxjs/toolkit";
import settingReducer from "../state/settingSlice";
import taskReducer from "../state/taskSlice";

export default configureStore({
    reducer:{
        setting: settingReducer,
        task: taskReducer,
    }
})