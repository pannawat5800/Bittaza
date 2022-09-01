import { createAsyncThunk } from '@reduxjs/toolkit'
import { AxiosError } from 'axios'
import { ResponseError } from '../../models/state.model'
import { User } from '../../models/user.model'
import { UserService } from '../../services/user.service'

const userService = new UserService()
export const fetchUser = createAsyncThunk<User | undefined, null>('users/fetchUser', async (_, thunkApi) => {
    try {
        const result = await userService.get()
        return result
    } catch (e) {
        const error = e as AxiosError
        thunkApi.rejectWithValue({ ...error.response?.data as ResponseError })
    }
})