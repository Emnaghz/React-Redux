import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 0,
};

//slice that contains the reducer logic
const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    //"counter/increment"
    increment: (state) => {
      //its okay to do this because immer makes it immutable
      state.value++;
    },

    //"counter/decrement"
    decrement: (state) => {
      state.value -= 1;
    },

    //"counter/reset"
    reset: (state) => {
      state.value = 0;
    },

    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(incrementAsync.pending, () => {
        console.log("loading");
      })
      .addCase(
        incrementAsync.fulfilled,
        (state, action: PayloadAction<number>) => {
          state.value += action.payload;
        }
      );
  },
});

export const incrementAsync = createAsyncThunk(
  "counter/incrementAsync", //define the name
  async (amount: number) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return amount; //return as the payload of the action incrementAsync.fulfilled
  }
);

export const { increment, decrement, reset, incrementByAmount } =
  counterSlice.actions;
export default counterSlice.reducer;
