import { configureStore } from "@reduxjs/toolkit";
import authReducer from '../features/auth/authSlice'
import engineerReducer from '../features/engineer/engineerSlice'
import energyReducer from '../features/energy/energySlice'
import selectorReducer from '../features/selector/selectorSlice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    engineer: engineerReducer,
    energy: energyReducer,
    selector: selectorReducer
  },
});
