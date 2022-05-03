import { withStyles } from "@mui/styles";
import PropTypes from "prop-types";

import Pagination from "../../commonComponents/Pagination/pagination";

import styles from "./styles";

const UserReposLayout = ({
  classes,
  indexOfFirstRepo,
  indexOfLastRepo,
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
        <div className={classes.paginationArea}>
          <span className={classes.paginationData}>{`${
            indexOfFirstRepo + 1
          } - ${indexOfLastRepo} of ${userReposList.length} items`}</span>
          <Pagination pages={howManyPages} currentPage={setCurrentPage} />
        </div>
      )}
    </div>
  );
};

UserReposLayout.propTypes = {
  userReposList: PropTypes.arrayOf(PropTypes.object).isRequired,
  currentReposList: PropTypes.arrayOf(PropTypes.object).isRequired,
  indexOfFirstRepo: PropTypes.number.isRequired,
  indexOfLastRepo: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  howManyPages: PropTypes.number.isRequired,
  setCurrentPage: PropTypes.func.isRequired,
};

export default withStyles(styles)(UserReposLayout);
