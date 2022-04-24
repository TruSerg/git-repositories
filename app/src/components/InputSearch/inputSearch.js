import { useEffect, useState, useCallback } from "react";
import axios from "axios";

import InputSearchLayout from "./inputSearchLayout";
import UserData from "../userData/userData";

const InputSearch = () => {
  const [inputSearchUserName, setInputSearchUserName] = useState("");
  const [userReposList, setUserReposList] = useState([]);

  const getUser = async () => {
    try {
      await axios
        .get("https://api.github.com/users/example")
        .then((res) => setUserData(res.data));
    } catch (error) {
      setError(error.message);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  const handleUserSearch = (e) => {
    setInputSearchUserName(e.target.value);
  };

  const getUserRepos = async () => {
    try {
      await axios
        .get(`https://api.github.com/users/${inputSearchUserName}/repos`)
        .then((res) => setUserReposList(res.data));
    } catch (error) {
      setError(error.message);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getUserName();
    getUserRepos();
  };

  return (
    <div>
      <InputSearchLayout
        userReposList={userReposList}
        handleChange={handleUserSearch}
        handleSubmit={handleSubmit}
      />
      <UserData inputSearchUserName={inputSearchUserName} />
    </div>
  );
};

export default InputSearch;
