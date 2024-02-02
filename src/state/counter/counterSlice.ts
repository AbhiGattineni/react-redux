import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByValue: (state, action) => {
      state.value += action.payload;
    },
    decrementByValue: (state, action) => {
      state.value -= action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      incrementAsync.fulfilled,
      (state, action: PayloadAction<number>) => {
        state.value += action.payload;
      }
    );
    builder.addCase(
      decrementAsync.fulfilled,
      (state, action: PayloadAction<number>) => {
        state.value -= action.payload;
      }
    );
  },
});

export const incrementAsync = createAsyncThunk(
  "counter/incrementAsync",
  async (amount: number) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return amount;
  }
);

export const decrementAsync = createAsyncThunk(
  "counter/decrementAsync",
  async (amount: number) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return amount;
  }
);

export default counterSlice.reducer;
export const { increment, decrement, incrementByValue, decrementByValue } =
  counterSlice.actions;
