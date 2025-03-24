import { Provider } from "react-redux";
import store from "./store/store";
import Counter from "./pages/Counter";
import { useState } from "react";
import UsersList from "./pages/UserList";
import To_Do_List from "./pages/To_Do_List";

const pages = [
  {
    name: "Counter page",
    component: <Counter />,
  },
  {
    name: "Fetch Users page 'thunk'",
    component: <UsersList />,
  },
  {
    name: "To Do List",
    component: <To_Do_List />,
  },
];

const Navigation = ({
  click,
  pageIndex,
}: {
  click: (e: React.MouseEvent<HTMLButtonElement>) => void;
  pageIndex: number;
}) => {
  const selectedStyle = "border-blue-500 border-2 p-2 rounded-lg text-black";
  const unselectedStyle = " underline text-black";
  return (
    // <div className="flex flex-row py-2 bg-white text-black text-sm font-bold justify-center space-x-4">
    <>
      {" "}
      {pages.map((p, index) => (
        <button
          key={index}
          onClick={click}
          value={index + 1}
          className={
            " cursor-pointer" +
            (pageIndex == index + 1 ? selectedStyle : unselectedStyle)
          }
        >
          {p.name}
        </button>
      ))}
    </>
    // </div>
  );
};

function App() {
  const [page, setPage] = useState(1);

  const Navigate = (event: React.MouseEvent<HTMLButtonElement>) => {
    const pageIndex = parseInt(event.currentTarget.value);
    console.log("page");
    setPage(pageIndex);
  };
  return (
    <Provider store={store}>
      <div className=" h-screen flex flex-col">
        <div className="flex flex-row py-2 bg-white text-black text-sm font-bold justify-center space-x-4">
          <Navigation pageIndex={page} click={Navigate} />
        </div>
        <div className="flex flex-1 justify-center items-center">
          {pages[page - 1].component}
        </div>
      </div>
    </Provider>
  );
}

export default App;
