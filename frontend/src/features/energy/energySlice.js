import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import energyService from './energyService'

const initialState = {
  building: '',
  trackRecords: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
}

export const getEngeryAnalyses = createAsyncThunk(
  'energy/getEngeryAnalyses',
  async(id, thunkAPI) => {
    try {
      // const token = thunkAPI.getState().auth.user.token
      return await energyService.getEnergyAnalyses(id, 1)
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

export const energySlice = createSlice({
  name: 'energy',
  initialState,
  reducers: {
    reset: (state) => initialState
  },
  extraReducers: (builder) => {
    builder
    .addCase(getEngeryAnalyses.pending, (state) =>{
      state.isLoading = true
    })
    .addCase(getEngeryAnalyses.fulfilled, (state, action) =>{
      state.isLoading = false
      state.isSuccess = true
      state.building = action.payload.building
      state.trackRecords = action.payload.trackRecords
    })
    .addCase(getEngeryAnalyses.rejected, (state, action) => {
      state.isLoading = false
      state.isError = true
      state.message = action.payload
      
    })
  }
})

export const {reset} = energySlice.actions
export default energySlice.reducer