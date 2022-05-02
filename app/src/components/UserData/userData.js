import { withStyles } from "@mui/styles";

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
    <div>
      <img className={classes.img} src={avatar} alt="photo" />
      <p className={classes.userName}>{name}</p>
      <a target="_blank" href={url}>
        <p className={classes.userLogin}>{login}</p>
      </a>
      <span>
        <svg className={classes.userFollowersIcon}>
          <use href={sprite + "#i-followers"} />
        </svg>
        {followers} followers
      </span>
      <span className={classes.userfollowing}>
        <svg className={classes.userFollowingIcon}>
          <use href={sprite + "#i-following"} />
        </svg>
        {following} following
      </span>
    </div>
  );
};

export default withStyles(styles)(UserData);
