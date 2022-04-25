import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import { hobbiesReducer, userReducer } from '../features/hobbies/hobbiesSlice'

export const store = configureStore({
    reducer: {
        users: userReducer,
        hobbies: hobbiesReducer,
    },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>
