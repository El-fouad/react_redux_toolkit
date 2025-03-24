import { useDispatch, useSelector } from "react-redux";
import {
  addTask,
  nextStep,
  removeTask,
  Task,
} from "../slices/to_do_list_slice";
import { RootState } from "../store/store";
import { useState } from "react";

const To_Do_List = () => {
  const [newTodo, setNewTodo] = useState<string>("");
  const dispatch = useDispatch();
  const todos = useSelector(
    (state: {
      todos: { task: any; pendding: any; inProgress: any; completed: any };
    }) => {
      console.log(state.todos);
      return state.todos;
    }
  );

  const handleNewTask = () => {
    dispatch(addTask(newTodo));
    setNewTodo("");
  };

  return (
    <div className="flex flex-1 h-full flex-col space-y-4">
      <div>To_Do_List</div>
      <div className="flex space-x-4">
        <input
          type="text"
          placeholder="Add Task"
          className="border-2 border-amber-200 p-2 rounded-md"
          onChange={(e) => setNewTodo(e.target.value)}
          value={newTodo}
        />
        <button onClick={handleNewTask} className="bg-amber-300 p-2 rounded-md">
          Add
        </button>
      </div>
      <div className="flex h-full flex-row space-x-4">
        {Object.entries(todos).map(([key, value]: [any, any]) => {
          console.log("tasks" + value.title);

          return (
            <div key={key} className=" min-w-40 text-center space-y-2">
              <h2 className=" border-2 border-amber-300 p-2 rounded-md">
                {value.title}
              </h2>
              <div className="flex p-2  border-2 border-amber-200 flex-col rounded-md space-y-2">
                {value.data.map((todo: { title: String; id: number }) => {
                  return (
                    <div className="flex justify-around p-2 bg-amber-100 rounded-sm text-black font-medium">
                      <p> {todo.title}</p>
                      <div className="flex space-x-2">
                        <button
                          onClick={() =>
                            dispatch(nextStep({ colStage: key, item: todo }))
                          }
                        >
                          {value.title === "Completed" ? "✅" : "⏭️"}
                        </button>
                        <button
                          onClick={() =>
                            dispatch(removeTask({ from: key, id: todo.id }))
                          }
                        >
                          ❌
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default To_Do_List;
