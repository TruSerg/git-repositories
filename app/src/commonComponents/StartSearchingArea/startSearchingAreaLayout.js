import { withStyles } from "@mui/styles";

import styles from "./styles";

import sprite from "../../static/sprite.svg";

const StartSearchingAreaLayout = ({ classes }) => {
  return (
    <div className={classes.startSearchWrapper}>
      <div className={classes.startSearchBody}>
        <svg className={classes.startSearchIcon}>
          <use href={sprite + "#i-start-search"} />
        </svg>
        <p className={classes.startSearchText}>
          Start with searching a GitHub user
        </p>
      </div>
    </div>
  );
};

export default withStyles(styles)(StartSearchingAreaLayout);
