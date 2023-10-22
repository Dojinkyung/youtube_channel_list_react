import { createSlice, PayloadAction } from "@reduxjs/toolkit";
export interface DataState {
  apikey: string;
  excelData: string | null;
}

const initialState: DataState = {
  apikey: "",
  excelData: null,
};

const reducers = {
  setApiKey: (state: DataState, action: PayloadAction<string>) => {
    state.apikey = action.payload;
  },
  setExcel: (state: DataState, action: PayloadAction<string | null>) => {
    state.excelData = action.payload;
  },
};

const { actions, reducer } = createSlice({
  name: "app",
  initialState,
  reducers,
});

export const getApiKey = (state: DataState): string => state.apikey;
export const getExcel = (state: DataState): string | null => state.excelData;
export default reducer;
export const { setApiKey, setExcel } = actions;
