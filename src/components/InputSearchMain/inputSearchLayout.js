import { withStyles } from "@mui/styles";

import UserData from "../UserData/userData";
import UserRepos from "../UserRepos/userRepos";
import PropTypes from "prop-types";

import Loader from "../../commonComponents/Loader";
import StartSearchingArea from "../../commonComponents/StartSearchingArea/startSearchingArea";
import UserNotFoundArea from "../../commonComponents/UserNotFoundArea/userNotFoundArea";

import styles from "./styles";

import sprite from "../../static/sprite.svg";

const InputSearchLayout = ({
  classes,
  error,
  isLoading,
  isUserDataLoaded,
  inputSearchUserName,
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
        <a target="_blank" rel="noreferrer" href="https://github.com">
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
            placeholder="Enter GitHub username"
            value={inputSearchUserName}
            type="text"
            onChange={handleChange}
          />
        </form>
      </div>
      {isUserDataLoaded ? (
        <StartSearchingArea />
      ) : (
        <>
          {isLoading ? (
            <div className={classes.searchLoader}>
              <Loader />
            </div>
          ) : (
            <>
              {error ? (
                <UserNotFoundArea />
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
  userReposList: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      login: PropTypes.string,
      url: PropTypes.string,
      avatar: PropTypes.string,
      followers: PropTypes.number,
      following: PropTypes.number,
    })
  ),
  error: PropTypes.string,
  isLoading: PropTypes.bool.isRequired,
  isUserDataLoaded: PropTypes.bool.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default withStyles(styles)(InputSearchLayout);
