import { configureStore } from "@reduxjs/toolkit"
import { cryptoapi } from "../services/cryptoapi";

export default configureStore({
  reducer: {
    [cryptoapi.reducerPath]: cryptoapi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(cryptoapi.middleware),
});