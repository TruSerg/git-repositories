import { withStyles } from "@mui/styles";

import styles from "./styles";

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
      <div>
        <img className={classes.img} src={avatar} alt="photo" />
      </div>
      <p>{name}</p>
      <p>
        <a target="_blank" href={url}>
          {login}
        </a>
      </p>
      <p>followers {followers}</p>
      <p>following {following}</p>
    </div>
  );
};

export default withStyles(styles)(UserData);
