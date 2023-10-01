import { configureStore } from "@reduxjs/toolkit";
import goodsSlice from "./slices/goodsSlice";
import { useDispatch } from "react-redux";
export const store = configureStore({
    reducer: {
        goodsSlice
      
    }
})
export type RootState = ReturnType<typeof store.getState>
type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();