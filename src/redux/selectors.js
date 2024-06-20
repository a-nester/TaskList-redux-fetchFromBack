import { createSelector } from "@reduxjs/toolkit";
import { statusFilters } from "./constants";

export const getTasks = (state) => state.tasks.items;

export const getIsLoading = (state) => state.tasks.isLoading;

export const getError = (state) => state.tasks.error;

export const getStatusFilter = (state) => state.filters.status;

export const getVisibleTasks = createSelector(
  [getTasks, getStatusFilter],
  (tasks, statusFilter) => {
    switch (statusFilter) {
      case statusFilters.active:
        return tasks.filter((task) => !task.completed);
      case statusFilters.completed:
        return tasks.filter((task) => task.completed);
      default:
        return tasks;
    }
  }
);

export const getTaskCount = createSelector([getTasks], (tasks) => {
  console.log("Counter, memoized");
  return tasks.reduce(
    (acc, task) => {
      if (task.completed) {
        acc.completed += 1;
      } else {
        acc.active += 1;
      }
      return acc;
    },
    { active: 0, completed: 0 }
  );
});
