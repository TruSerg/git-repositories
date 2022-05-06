import { withStyles } from "@mui/styles";

import styles from "./styles";

import sprite from "../../static/sprite.svg";

const RepositoriesIsEmptyAreaLayout = ({ classes }) => {
  return (
    <div className={classes.reposIsEmptyWrapper}>
      <div className={classes.reposIsEmptyBody}>
        <svg className={classes.reposIsEmptyIcon}>
          <use href={sprite + "#i-repos-is-empty"} />
        </svg>
        <p className={classes.reposIsEmptyText}>Repository list is empty</p>
      </div>
    </div>
  );
};

export default withStyles(styles)(RepositoriesIsEmptyAreaLayout);
