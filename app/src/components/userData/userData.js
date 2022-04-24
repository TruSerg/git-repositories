import { useState } from "react";
import axios from "axios";

import UserDataLayout from "./userDataLayout";

const UserData = (props) => {
  const {} = props;

  const [user, setUser] = useState("");
  const [error, setError] = useState(null);

  const setUserData = ({ name, followers, following, avatar_url }) => {
    setUser({
      name,
      followers,
      following,
      avatar: avatar_url,
    });
  };

  const getUserName = async () => {
    try {
      await axios
        .get(`https://api.github.com/users/${inputSearchUserName}`)
        .then((res) => {
          res.data.message ? setError(error.message) : setUserData(res.data);
          setError(null);
        });
    } catch (error) {
      setError(error.message);
    }
  };

  return <UserDataLayout />;
};

export default UserData;
