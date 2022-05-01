import { withStyles } from "@mui/styles";

import UserData from "../UserData/userData";
import UserRepos from "../UserRepos/userRepos";

import CustomLoader from "../../commonComponents/CustomLoader";

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
        <>
          {isLoading ? (
            <CustomLoader />
          ) : (
            <>
              {error ? (
                <h1>User not found</h1>
              ) : (
                <>
                  <UserData
                    name={name}
                    login={login}
                    url={url}
                    followers={followers}
                    following={following}
                    avatar={avatar}
                  />
                  <UserRepos userReposList={userReposList} />
                </>
              )}
            </>
          )}
        </>
      )}
    </div>
  );
};

export default withStyles(styles)(InputSearchLayout);
