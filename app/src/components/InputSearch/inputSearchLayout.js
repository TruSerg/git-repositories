import { withStyles } from "@mui/styles";
import { CircularProgress } from "@mui/material";

import UserDataLayout from "./userDataLayout";
import UserReposLayout from "./userReposLayout";

import styles from "./styles";

const InputSearchLayout = ({
  classes,
  error,
  isLoading,
  isUserDataLoaded,
  name,
  login,
  url,
  followers,
  following,
  avatar,
  userReposList,
  handleChange,
  handleSubmit,
}) => {
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} />
      </form>
      {isUserDataLoaded ? (
        <h1>Start with searching a GitHub user</h1>
      ) : (
        <div>
          {isLoading ? (
            <CircularProgress />
          ) : (
            <div>
              {error ? (
                <h1>User not found</h1>
              ) : (
                <div>
                  <UserDataLayout
                    name={name}
                    login={login}
                    url={url}
                    followers={followers}
                    following={following}
                    avatar={avatar}
                  />
                  <UserReposLayout userReposList={userReposList} />
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default withStyles(styles)(InputSearchLayout);
