import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import engineerService from './engineerService'

const initialState = {
  building: '',
  equipClasses: [],
  equipTypes: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
}


export const getEngBuilding = createAsyncThunk(
  'engineer/getBuilding',
  async (id, thunkAPI) =>{
    try {
      // const token = thunkAPI.getState().auth.user.token
      return await engineerService.getEngBuilding(
        id, 1)
    }catch(error){
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
    }
  }
)

export const engineerSlice = createSlice({
  name: 'engineer',
  initialState,
  reducers: {
    reset: (state) => initialState
  },
  extraReducers: (builder) => {
    builder
    .addCase(getEngBuilding.pending, (state) =>{
      state.isLoading = true
    })
    .addCase(getEngBuilding.fulfilled, (state, action) =>{
      state.isLoading = false
      state.isSuccess = true
      state.building = action.payload.building
      state.equipClasses = action.payload.equipClasses
      state.equipTypes = action.payload.equipTypes
    })
    .addCase(getEngBuilding.rejected, (state, action) => {
      state.isLoading = false
      state.isError = true
      state.message = action.payload
    })
  }

})


export const {reset} = engineerSlice.actions
export default engineerSlice.reducer