import { useEffect, useState } from "react";
import { getUsers } from "../../api/users";

import Loading from "../Loading";
import UserCard from "../UserCard";

const UserList = ({ setIsLoading, setError }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    setError(null);
    getUsers()
      .then((newUsers) => {
        setUsers(newUsers);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [setIsLoading, setError, setUsers]);
  return (
    <section>
      {users.map((user) => (
        <UserCard key={user.username} user={user} />
      ))}
    </section>
  );
};

export default Loading(UserList, "Loading users...", true);
