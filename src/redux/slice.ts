import { createSlice, PayloadAction } from "@reduxjs/toolkit";
export interface DataState {
  apikey: string;
}

const initialState: DataState = {
  apikey: "",
};

const reducers = {
  setApiKey: (state: DataState, action: PayloadAction<string>) => {
    state.apikey = action.payload;
  },
};

const { actions, reducer } = createSlice({
  name: "app",
  initialState,
  reducers,
});

export const getApiKey = (state: DataState): string => state.apikey;
export default reducer;
export const { setApiKey } = actions;
