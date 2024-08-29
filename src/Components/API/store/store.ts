import { configureStore } from "@reduxjs/toolkit";
import { pokemonApi } from "../api/api"


export const store = configureStore({
  reducer: {
    [pokemonApi.reducerPath]: pokemonApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(pokemonApi.middleware),

});

export type RootState = ReturnType<typeof store.getState>
export type AddDispatch = typeof store.dispatch;

