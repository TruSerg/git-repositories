import { withStyles } from "@mui/styles";

import styles from "./styles";

const MainLayout = ({ children, classes }) => {
  return (
    <div className={classes.mainWrapper}>
      <div className={classes.wrapper}>
        <>{children}</>
      </div>
    </div>
  );
};

export default withStyles(styles)(MainLayout);
