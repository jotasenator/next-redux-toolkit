import { configureStore } from '@reduxjs/toolkit'
import counterReducer from "./features/counterSlice";
import { userApi } from './services/userApi';

export const store = configureStore({
    reducer: {
        counterReducer,
        [userApi.reducerPath]: userApi.reducer
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat([userApi.middleware])
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
