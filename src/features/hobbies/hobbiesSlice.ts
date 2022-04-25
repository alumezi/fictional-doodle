import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { RootState } from '../../app/store'
import { Hobby, User } from '../../interfaces'
import { addUserApi, fetchAllUsers, fetchUserHobbies } from '../../services/api'

export interface UserState {
    users: User[]
    status: 'idle' | 'loading' | 'failed'
}

const initialUserState: UserState = {
    users: [],
    status: 'idle',
}

export interface HobbyReducer {
    hobbies: Hobby[]
    status: 'idle' | 'loading' | 'failed'
}

const initialHoobyState: HobbyReducer = {
    hobbies: [],
    status: 'idle',
}

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
    const response = await fetchAllUsers()
    return response.data
})

export const addNewUser = createAsyncThunk(
    'users/addNewUser',
    async (userName: string) => {
        const response = await addUserApi(userName)
        return response.data
    }
)

export const fetchHobbies = createAsyncThunk(
    'hobbies/fetchHobbies',
    async (userID: string) => {
        const response = await fetchUserHobbies(userID)
        return response.data
    }
)

export const userSlice = createSlice({
    name: 'users',
    initialState: initialUserState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchUsers.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(fetchUsers.fulfilled, (state, action) => {
                state.status = 'idle'
                state.users = action.payload
            })
            .addCase(addNewUser.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(addNewUser.fulfilled, (state, action) => {
                state.status = 'idle'
                state.users = action.payload
            })
    },
})

export const hobbySlice = createSlice({
    name: 'hobbies',
    initialState: initialHoobyState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchHobbies.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(fetchHobbies.fulfilled, (state, action) => {
                state.status = 'idle'
                state.hobbies = action.payload
            })
    },
})

export const selectUsers = (state: RootState) => state.users
export const selectHobbies = (state: RootState) => state.hobbies

export const userReducer = userSlice.reducer
export const hobbiesReducer = hobbySlice.reducer
