import { withStyles } from "@mui/styles";

import CustomPagination from "../../commonComponents/CustomPagination";

import styles from "./styles";

const UserReposLayout = ({
  classes,
  userReposList,
  setCurrentPage,
  currentReposList,
  howManyPages,
}) => {
  return (
    <div>
      <h3>{`Repositories (${userReposList.length})`}</h3>
      {userReposList.length ? (
        currentReposList.map(({ id, name, description, html_url }) => {
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
      {userReposList.length > 4 && (
        <CustomPagination pages={howManyPages} currentPage={setCurrentPage} />
      )}
    </div>
  );
};

export default withStyles(styles)(UserReposLayout);
