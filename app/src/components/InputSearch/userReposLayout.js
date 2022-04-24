import { withStyles } from "@mui/styles";

import styles from "./styles";

const UserReposLayout = ({ classes, userReposList }) => {
  return (
    <div>
      <h3>{`Repositories (${userReposList.length})`}</h3>
      {userReposList.length ? (
        userReposList.map(({ id, name, description, html_url }) => {
          return (
            <div className={classes.userRepo} key={id}>
              <p>
                <a target="_blank" href={html_url}>
                  {name}
                </a>
              </p>
              <p>{description}</p>
            </div>
          );
        })
      ) : (
        <h1>No repos</h1>
      )}
    </div>
  );
};

export default withStyles(styles)(UserReposLayout);
