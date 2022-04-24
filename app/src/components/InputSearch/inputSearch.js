import { useState } from "react";
import { CircularProgress } from "@mui/material";
import axios from "axios";

import InputSearchLayout from "./inputSearchLayout";
import UserDataLayout from "./userDataLayout";
import UserReposLayout from "./userReposLayout";

const InputSearch = () => {
  const [inputSearchUserName, setInputSearchUserName] = useState("");
  const [user, setUser] = useState("");
  const [userReposList, setUserReposList] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const setUserData = ({
    name,
    login,
    html_url,
    followers,
    following,
    avatar_url,
  }) => {
    setUser({
      name,
      login,
      url: html_url,
      followers,
      following,
      avatar: avatar_url,
    });
  };

  const getUserName = async () => {
    setIsLoading(true);
    try {
      await axios
        .get(`https://api.github.com/users/${inputSearchUserName}`)
        .then((res) => {
          console.log(res.data);
          res.data.message ? setError(error.message) : setUserData(res.data);
          setError(null);
        });
    } catch (error) {
      setError(error.message);
      setIsLoading(false);
    }
    setIsLoading(false);
  };

  const handleUserSearch = (e) => {
    setInputSearchUserName(e.target.value);
  };

  const getUserRepos = async () => {
    setIsLoading(true);
    try {
      await axios
        .get(`https://api.github.com/users/${inputSearchUserName}/repos`)
        .then((res) => {
          console.log(res.data);
          setUserReposList(res.data);
        });
    } catch (error) {
      setError(error.message);
      setIsLoading(false);
    }
    setIsLoading(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getUserName();
    getUserRepos();
  };

  return (
    <div>
      <InputSearchLayout
        error={error}
        handleChange={handleUserSearch}
        handleSubmit={handleSubmit}
      />
      {isLoading ? (
        <CircularProgress />
      ) : (
        <>
          {error ? (
            <h1>Not found</h1>
          ) : (
            <>
              <UserDataLayout
                name={user.name}
                login={user.login}
                url={user.url}
                followers={user.followers}
                following={user.following}
                avatar={user.avatar}
              />
              <UserReposLayout userReposList={userReposList} />
            </>
          )}
        </>
      )}
    </div>
  );
};

export default InputSearch;
