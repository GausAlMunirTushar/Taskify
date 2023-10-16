import {configureStore} from "@reduxjs/toolkit";
import settingReducer from "../state/settingSlice";
import taskReducer from "../state/taskSlice";
import summaryReducer from "../state/summarySlice";

export default configureStore({
    reducer:{
        setting: settingReducer,
        task: taskReducer,
        summary: summaryReducer,
    }
})