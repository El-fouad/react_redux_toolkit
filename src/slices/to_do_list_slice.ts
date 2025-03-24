import { createSlice, PayloadAction } from "@reduxjs/toolkit";
export interface Task {
  id: number;
  title: string;
}

export interface TaskState {
  task: { title: string; data: Task[] };
  pendding: { title: string; data: Task[] };
  inProgress: { title: string; data: Task[] };
  completed: { title: string; data: Task[] };
}

const initialState: TaskState = {
  task: {
    title: "Tasks",
    data: [
      { id: 1, title: "task1" },
      { id: 2, title: "task2" },
    ],
  },
  pendding: { title: "Pending", data: [] },
  inProgress: { title: "In Progress", data: [] },
  completed: { title: "Completed", data: [] },
};

const toDoListSlice = createSlice({
  name: "counter",
  initialState: initialState,
  reducers: {
    addTask: (state, action: PayloadAction<string>) => {
      state.task.data.push({ id: Date.now(), title: action.payload });
    },
    removeTask: (state, action: PayloadAction<{ from: keyof TaskState; id: number }>) => {
      const { from, id } = action.payload;
      state[from].data = state[from].data.filter((task) => task.id !== id);
    },
    nextStep: (
      state,
      action: PayloadAction<{
        colStage: keyof TaskState;
        item: any;
      }>
    ) => {
      const { colStage, item } = action.payload;
      const stages = ["task", "pendding", "inProgress", "completed"];
      const currentIndex: number = stages.indexOf(colStage);
      if (currentIndex === -1 || currentIndex === stages.length - 1) return;

      const nextStage: keyof TaskState = stages[
        currentIndex + 1
      ] as keyof TaskState;
      const fromList = state[colStage].data;
      const taskIndex = fromList.findIndex((task) => task.id === item.id);

      if (taskIndex !== -1) {
        const task = fromList.splice(taskIndex, 1)[0];
        state[nextStage].data.push(task);
      }
    },
  },
});

export const { nextStep,removeTask,addTask } = toDoListSlice.actions;
export default toDoListSlice.reducer;
