import { withStyles } from "@mui/styles";

import Pagination from "../../commonComponents/Pagination";

import styles from "./styles";

const UserReposLayout = ({
  classes,
  userReposList,
  setCurrentPage,
  currentReposList,
  howManyPages,
}) => {
  return (
    <div className={classes.reposWrapper}>
      <h3
        className={classes.reposTitle}
      >{`Repositories (${userReposList.length})`}</h3>
      {userReposList.length ? (
        currentReposList.map(({ id, name, description, html_url }) => {
          return (
            <div className={classes.userRepo} key={id}>
              <a target="_blank" href={html_url}>
                <p className={classes.repoName}>{name}</p>
              </a>
              <p className={classes.repoDescription}>{description}</p>
            </div>
          );
        })
      ) : (
        <h1>No repos</h1>
      )}
      {userReposList.length > 4 && (
        <Pagination pages={howManyPages} currentPage={setCurrentPage} />
      )}
    </div>
  );
};

export default withStyles(styles)(UserReposLayout);
