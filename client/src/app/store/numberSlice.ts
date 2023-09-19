import { createSlice, PayloadAction } from "@reduxjs/toolkit";

enum TextColor {
  Green = "text-green-500",
  Red = "text-red-500",
  White = "text-white",
}

interface NumberState {
  value: number;
  color: TextColor;
}

const initialState: NumberState = {
  value: 0,
  color: TextColor.White,
};

const numberSlice = createSlice({
  name: "number",
  initialState,
  reducers: {
    messageReceived: (state, action: PayloadAction<number>) => {
      const newValue = action.payload;

      if (newValue > state.value) {
        state.color = TextColor.Green;
      } else if (newValue < state.value) {
        state.color = TextColor.Red;
      } else {
        state.color = TextColor.White;
      }

      state.value = newValue;
    },
  },
});

export const { messageReceived } = numberSlice.actions;

export default numberSlice.reducer;
