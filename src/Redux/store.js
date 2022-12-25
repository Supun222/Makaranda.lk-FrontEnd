import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../Features/userSlice";
import packageCard from "../Features/packageCard";

export default configureStore({
  reducer: {
    user: userReducer,
    item: packageCard,
  },
});
