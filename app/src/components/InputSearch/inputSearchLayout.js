import { withStyles } from "@mui/styles";

import UserData from "../UserData/userData";
import UserRepos from "../UserRepos/userRepos";
import PropTypes from "prop-types";

import Loader from "../../commonComponents/Loader";

import styles from "./styles";

import sprite from "../../static/sprite.svg";

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
    <>
      <div className={classes.searchWrapper}>
        <a target="_blank" href="https://github.com">
          <svg className={classes.searchGitIcon}>
            <use href={sprite + "#i-git"} />
          </svg>
        </a>
        <form className={classes.searchForm} onSubmit={handleSubmit}>
          <svg className={classes.searchIcon}>
            <use href={sprite + "#i-search"} />
          </svg>
          <input
            className={classes.searchInput}
            type="text"
            onChange={handleChange}
          />
        </form>
      </div>
      {isUserDataLoaded ? (
        <h1>Start with searching a GitHub user</h1>
      ) : (
        <>
          {isLoading ? (
            <Loader />
          ) : (
            <>
              {error ? (
                <h1>User not found</h1>
              ) : (
                <div className={classes.searchBodyArea}>
                  <UserData
                    name={name}
                    login={login}
                    url={url}
                    followers={followers}
                    following={following}
                    avatar={avatar}
                  />
                  <UserRepos userReposList={userReposList} />
                </div>
              )}
            </>
          )}
        </>
      )}
    </>
  );
};

InputSearchLayout.propTypes = {
  userReposList: PropTypes.arrayOf(PropTypes.object).isRequired,
  error: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  login: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  followers: PropTypes.number.isRequired,
  following: PropTypes.number.isRequired,
  isLoading: PropTypes.bool.isRequired,
  isUserDataLoaded: PropTypes.bool.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default withStyles(styles)(InputSearchLayout);
