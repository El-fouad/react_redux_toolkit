import { useEffect } from "react"; // Adjust the import path as necessary
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers } from "../slices/get_users_slice";
import { AppDispatch } from "../store/store";

function UsersList() {
  const dispatch = useDispatch<AppDispatch>();
  const { users, status, error } = useSelector(
    (state: { users: { users: any[]; status: string; error: string } }) =>
      state.users
  );

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchUsers());
    }
  }, [status, dispatch]);

  if (status === "loading") {
    return (
      <div className="flex flex-1 h-full flex-col justify-center items-center text-white">
        {" "}
        <p>Loading...</p>
      </div>
    );
  }
  if (status === "failed") return <p>Error: {error}</p>;

  return (
    <div className="flex flex-col justify-center items-center text-black">
      <div className=" p-4 mt-8 bg-white rounded-lg ">
        <h2 className=" text-2xl font-bold">Users List</h2>
        <ul className="space-y-2 mt-4 h-96 overflow-y-scroll">
          {users.map((user) => (
            <li key={user.id} className=" p-2 rounded bg-gray-300">
              <div>
                <b>Name: </b>
                {user.name}
              </div>
              <div>
                <b>Email: </b>
                {user.email}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default UsersList;
