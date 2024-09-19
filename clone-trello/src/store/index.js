import { configureStore } from "@reduxjs/toolkit";
import stageList from "./stageList";

const store = configureStore({
  reducer:{
    stageList
  }
});

export default store;