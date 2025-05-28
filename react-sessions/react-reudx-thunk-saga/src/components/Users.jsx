import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../redux/users.slice";

function Users() {
  let dispatch = useDispatch();
  let { list, loading } = useSelector((state) => state.users);
  useEffect(() => {
    dispatch(getUsers(10));
  }, []);
  return (
    <div>
      Users
      <section>
        {loading ? "loading ..." : null}
        <ul>
          {list.map((user) => {
            return <li key={user.id}>{user.name}</li>;
          })}
        </ul>
      </section>
    </div>
  );
}

export default Users;
