import { withStyles } from "@mui/styles";
import PropTypes from "prop-types";

import styles from "./styles";

import sprite from "../../static/sprite.svg";

const UserData = ({
  classes,
  name,
  login,
  url,
  following,
  followers,
  avatar,
}) => {
  return (
    <div className={classes.userWrapper}>
      <div>
        <img className={classes.img} src={avatar} alt="photo" />
      </div>
      <div>
        <p className={classes.userName}>{name}</p>
        <a target="_blank" rel="noreferrer" href={url}>
          <p className={classes.userLogin}>{login}</p>
        </a>
        <div className={classes.userSocial}>
          <p className={classes.userFollowers}>
            <svg className={classes.userFollowersIcon}>
              <use href={sprite + "#i-followers"} />
            </svg>
            {followers} followers
          </p>
          <p className={classes.userfollowing}>
            <svg className={classes.userFollowingIcon}>
              <use href={sprite + "#i-following"} />
            </svg>
            {following} following
          </p>
        </div>
      </div>
    </div>
  );
};

UserData.propTypes = {
  name: PropTypes.string,
  login: PropTypes.string,
  url: PropTypes.string,
  avatar: PropTypes.string,
  following: PropTypes.number,
  followers: PropTypes.number,
};

export default withStyles(styles)(UserData);
