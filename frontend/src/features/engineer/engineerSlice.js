import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import engineerService from './engineerService'

const initialState = {
  building: '',
  equipClasses: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
}

const jdh = (equipClasses, allEquip) {

  let equipId = 0
  let equipClassIndex = 4

  // map... 

  const result = [];
  allEquip.forEach(equip => {
    const element = {
      id:,
      name:,
    };

    equipId = equip.EquipmentType.EquipmentClassID
    equipClassIndex = arrEquipClasses.findIndex((equipClass) => equipClass.id === equipId)
    arrEquipClasses[equipClassIndex]['count']++
 });

 return result;
}

const map = (someArr, cb) => {
  const result = [];
  someArr.forEach((el, index) => {
    result[index] = cb(el);
  }); 
  return result;
}

const testFunc = (arrEquipClasses, allEquip) =>{
  let equipId = 0
  let equipClassIndex = 4
  allEquip.forEach(equip => {
     equipId = equip.EquipmentType.EquipmentClassID
     equipClassIndex = arrEquipClasses.findIndex((equipClass) => equipClass.id === equipId)
     arrEquipClasses[equipClassIndex]['count']++
  })


  console.log(allEquip[10].EquipmentType.EquipmentClassID)

  return(arrEquipClasses)
}

const formatEquipClasses = (equipClasses, allEquip, cb) =>{
  const arrEquipClasses = equipClasses.map((equipClass) => {
    return {
      id: equipClass.EquipmentClassID,
      name: equipClass.EquipmentClassName,
      count: 0
      }
  })

  
  return cb(arrEquipClasses, allEquip)
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
      state.equipClasses = formatEquipClasses(
        action.payload.equipClasses,
        action.payload.allEquip,
        testFunc)

      // const allEquip = action.payload.allEquip

      // allEquip.map((equip) =>(
      //    equip.EquipmentType.EquipmentClassID
      // ))

      // allEquip.map((equip) =>(
      //   const classId = equip.EquipmentType.EquipmentClassID

      //   const classIndex = state.equipClasses.findIndex(
      //     (equipClass) => equipClass.id === classId
      //   )
      //   state.equipClasses[classIndex]['id'] += 1
      // ))

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