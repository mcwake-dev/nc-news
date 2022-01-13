import { useEffect, useState } from "react";
import { getUsers } from "../../api/users";
import Loading from "../Loading";
import UserCard from "../UserCard";
import styles from "./UserList.module.css";

const UserList = ({ setIsLoading, setError }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    setError(null);
    getUsers()
      .then((newUsers) => {
        console.log(newUsers);
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
    <section className={styles.userList}>
      {users.map((user) => (
        <UserCard key={user.username} user={user} />
      ))}
    </section>
  );
};

export default Loading(UserList, "Loading users...", true);
