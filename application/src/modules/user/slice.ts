import { createSlice } from '@reduxjs/toolkit'
import { GenericStateData, ResponseError, StateData } from '../../models/state.model'
import { User } from '../../models/user.model'
import { fetchUser } from './thunk'

export const initialState: GenericStateData<User> = {
    state: StateData.Loading,
}


const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchUser.pending, (state) => {
            state.state = StateData.Loading
        })
        builder.addCase(fetchUser.fulfilled, (state, action) => {
            state.state = StateData.Success
            state.data = action.payload
        })
        builder.addCase(fetchUser.rejected, (state, action) => {
            state.state = StateData.Failed
            state.error = action.error as ResponseError
        })
    }
})

// export const { } = userSlice.actions
export default userSlice.reducer