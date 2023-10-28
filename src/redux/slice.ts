import { createSlice, PayloadAction } from "@reduxjs/toolkit";
export interface DataState {
  apikey: string;
  excelData: string;
  existence: boolean;
}

const initialState: DataState = {
  apikey: "",
  excelData: "",
  existence: false,
};

const reducers = {
  setApiKey: (state: DataState, action: PayloadAction<string>) => {
    state.apikey = action.payload;
  },
  setExcel: (state: DataState, action: PayloadAction<string>) => {
    state.excelData = action.payload;
  },
  setExistence: (state: DataState, action: PayloadAction<boolean>) => {
    state.existence = action.payload;
  },
};

const { actions, reducer } = createSlice({
  name: "app",
  initialState,
  reducers,
});

export const getApiKey = (state: DataState): string => state.apikey;
export const getExcel = (state: DataState): string => state.excelData;
export const getExistence = (state: DataState): boolean => state.existence;
export default reducer;
export const { setApiKey, setExcel, setExistence } = actions;
