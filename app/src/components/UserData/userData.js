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
        <a target="_blank" href={url}>
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
  name: PropTypes.string.isRequired,
  login: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  following: PropTypes.number.isRequired,
  followers: PropTypes.number.isRequired,
};

export default withStyles(styles)(UserData);
