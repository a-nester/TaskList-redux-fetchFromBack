import { createSlice } from "@reduxjs/toolkit";
import { fetchTasks, addTask, deleteTask, toggleStatus } from "./operations";

const handlePending = (state, action) => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const tasksSlice = createSlice({
  name: "tasks",
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTasks.pending, handlePending)
      .addCase(fetchTasks.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(fetchTasks.rejected, handleRejected)
      .addCase(addTask.pending, handlePending)
      .addCase(addTask.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items.push(action.payload);
      })
      .addCase(addTask.rejected, handleRejected)
      .addCase(deleteTask.pending, handlePending)
      .addCase(deleteTask.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const index = state.items.indexOf((el) => el.id === action.payload);
        state.items.splice(index, 1);
      })
      .addCase(deleteTask.rejected, handleRejected)
      .addCase(toggleStatus.pending, handlePending)
      .addCase(toggleStatus.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const index = state.items.indexOf(
          (item) => item.id === action.payload.id
        );
        state.items.splice(index, 1, action.payload);
      })
      .addCase(toggleStatus.rejected, handleRejected);
  },
});

export const tasksReducer = tasksSlice.reducer;
