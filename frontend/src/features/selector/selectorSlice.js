import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getEngBuilding } from '../engineer/engineerSlice'

import selectorService from './selectorService'

const initialState = {
  buildingIds: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
}

export const getAllBuildingIds = createAsyncThunk(
  '/selector/getAllBuildingIds',
  async(thunkAPI)=>{
    try{
      return await selectorService.getbuildingIds()
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


export const selectorSlice = createSlice({
  name: 'selector',
  initialState,
  reducers :{
    reset : {
      reset: (state) => initialState
    }
  },
  extraReducers: (builder) => {
    builder
    .addCase(getAllBuildingIds.pending, (state) =>{
      state.isLoading = true
    })
    .addCase(getAllBuildingIds.fulfilled, (state, action) =>{
      state.isLoading = false
      state.isSuccess = true
      state.buildingIds = action.payload
  
    })
    .addCase(getAllBuildingIds.rejected, (state, action) => {
      state.isLoading = false
      state.isError = true
      state.message = action.payload
      
    })
  }
})

export const {reset} = selectorSlice.actions
export default selectorSlice.reducer