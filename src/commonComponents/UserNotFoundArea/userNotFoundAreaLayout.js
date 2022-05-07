import { withStyles } from "@mui/styles";

import styles from "./styles";

import sprite from "../../static/sprite.svg";

const UserNotFoundAreaLayout = ({ classes }) => {
  return (
    <div className={classes.UserNotFoundWrapper}>
      <div className={classes.userNotFoundBody}>
        <svg className={classes.userNotFoundIcon}>
          <use href={sprite + "#i-user-not-found"} />
        </svg>
        <p className={classes.userNotFoundText}>User not found</p>
      </div>
    </div>
  );
};

export default withStyles(styles)(UserNotFoundAreaLayout);
