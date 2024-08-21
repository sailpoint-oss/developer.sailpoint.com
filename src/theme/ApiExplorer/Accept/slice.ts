import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface State {
  value: string;
  options: string[];
}

const initialState: State = {} as any;

export const slice = createSlice({
  name: "accept",
  initialState,
  reducers: {
    setAccept: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
  },
});

export const { setAccept } = slice.actions;

export default slice.reducer;
