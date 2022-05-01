import { useEffect, useState } from "react";
import axios from "axios";

import InputSearchLayout from "./inputSearchLayout";

const InputSearch = () => {
  const [inputSearchUserName, setInputSearchUserName] = useState("");
  const [user, setUser] = useState("");
  const [userReposList, setUserReposList] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isUserDataLoaded, setIsUserDataLoaded] = useState(false);

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

  const handleUserSearch = (e) => {
    setInputSearchUserName(e.target.value);
  };

  const getUserName = async () => {
    setIsLoading(true);

    try {
      await axios
        .get(`https://api.github.com/users/${inputSearchUserName}`)
        .then((res) => {
          res.data.message ? setError(error.message) : setUserData(res.data);
          setError(null);
        });
    } catch (error) {
      setError(error.message);
      setIsLoading(false);
    }

    setIsLoading(false);
  };

  const getUserRepos = async () => {
    setIsLoading(true);

    try {
      await axios
        .get(`https://api.github.com/users/${inputSearchUserName}/repos`)
        .then((res) => {
          setUserReposList(res.data);
        });
    } catch (error) {
      setError(error.message);
      setIsLoading(false);
    }

    setIsLoading(false);
  };

  useEffect(() => {
    setIsUserDataLoaded(true);

    getUserName();
    getUserRepos();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    getUserName();
    getUserRepos();

    setIsUserDataLoaded(false);
  };

  return (
    <div>
      <InputSearchLayout
        error={error}
        isLoading={isLoading}
        isUserDataLoaded={isUserDataLoaded}
        name={user.name}
        login={user.login}
        url={user.url}
        followers={user.followers}
        following={user.following}
        avatar={user.avatar}
        userReposList={userReposList}
        handleChange={handleUserSearch}
        handleSubmit={handleSubmit}
      />
    </div>
  );
};

export default InputSearch;
