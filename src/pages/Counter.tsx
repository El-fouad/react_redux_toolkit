import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  incrementByAmount,
  reset,
} from "../slices/counter_slice";

function Counter() {
  const count = useSelector((state: { counter: { value: number } }) => {
    return state.counter?.value;
  });
  const dispatch = useDispatch();

  return (
    <div className=" h-auto flex flex-col justify-center items-center">
      <div className="flex space-x-2 items-center">
        <h2 className="flex-1 p-4 bg-white my-4 rounded-xl text-black font-bold text-xl ">
          {" "}
          {count}{" "}
        </h2>
        <button
          className=" flex-1 flex bg-red-500 text-red rounded-2xl p-4"
          onClick={() => dispatch(reset())}
        >
          reset
        </button>
      </div>
      <div className="flex space-x-2 ">
        <button
          className="rounded-2xl bg-blue-500 text-white font-semibold py-2 px-4 "
          onClick={() => dispatch(increment())}
        >
          +
        </button>
        <button
          className="rounded-2xl bg-blue-500 text-white font-semibold py-2 px-4 "
          onClick={() => dispatch(decrement())}
        >
          -
        </button>
        <button
          className="rounded-xl bg-blue-500 text-white font-semibold py-2 px-4 "
          onClick={() => dispatch(incrementByAmount(5))}
        >
          +5
        </button>
      </div>
    </div>
  );
}

export default Counter;
