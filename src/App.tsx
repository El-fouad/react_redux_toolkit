import { Provider } from "react-redux";
import store from "./store/store";
import Counter from "./pages/Counter";
import { useState } from "react";
import UsersList from "./pages/UserList";

function App() {
  const [page, setPage] = useState(1);
  const Navigate = (page: number) => () => {
    setPage(page);
  };
  const selectedStyle = "border-blue-500 border-2 p-2 rounded-lg text-black";
  const unselectedStyle = " underline text-black";
  return (
    <Provider store={store}>
      <div className=" h-screen flex flex-col">
        <div className="flex flex-row py-2 bg-white text-black text-sm font-bold justify-center space-x-4">
          <button
            onClick={Navigate(1)}
            className={
              " cursor-pointer" + (page == 1 ? selectedStyle : unselectedStyle)
            }
          >
            Counter page{" "}
          </button>
          <button
            onClick={Navigate(2)}
            className={
              " cursor-pointer" + (page != 1 ? selectedStyle : unselectedStyle)
            }
          >
            Fetch Users page 'thunk'
          </button>
        </div>
        <div className="flex flex-1 justify-center items-center">
          {page == 2 ? <UsersList /> : <Counter />}
        </div>
      </div>
    </Provider>
  );
}

export default App;
