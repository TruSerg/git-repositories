import { withStyles } from "@mui/styles";
import PropTypes from "prop-types";

import Pagination from "../../commonComponents/Pagination/pagination";
import RepositoriesIsEmptyArea from "../../commonComponents/RepositoriesIsEmptyArea/repositoriesIsEmptyArea";

import styles from "./styles";

const UserReposLayout = ({
  classes,
  indexOfFirstRepo,
  userReposList,
  setCurrentPage,
  currentReposList,
  currentQuantityRepos,
  totalPages,
}) => {
  return (
    <div className={classes.reposWrapper}>
      {userReposList.length > 1 && (
        <h3 className={classes.reposTitle}>
          Repositories ({userReposList.length})
        </h3>
      )}
      {userReposList.length ? (
        currentReposList.map(({ id, name, description, html_url }) => {
          return (
            <div className={classes.userRepo} key={id}>
              <a target="_blank" rel="noreferrer" href={html_url}>
                <p className={classes.repoName}>{name}</p>
              </a>
              <p className={classes.repoDescription}>{description}</p>
            </div>
          );
        })
      ) : (
        <RepositoriesIsEmptyArea />
      )}

      {userReposList.length > 4 && (
        <div className={classes.paginationArea}>
          <span className={classes.paginationData}>{`${
            indexOfFirstRepo + 1
          } - ${currentQuantityRepos} of ${userReposList.length} items`}</span>
          <Pagination pages={totalPages} currentPage={setCurrentPage} />
        </div>
      )}
    </div>
  );
};

UserReposLayout.propTypes = {
  userReposList: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      login: PropTypes.string,
      url: PropTypes.string,
      avatar: PropTypes.string,
      followers: PropTypes.number,
      following: PropTypes.number,
    })
  ),
  currentReposList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string,
      html_url: PropTypes.string.isRequired,
    })
  ),
  indexOfFirstRepo: PropTypes.number.isRequired,
  indexOfLastRepo: PropTypes.number.isRequired,
  currentQuantityRepos: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  setCurrentPage: PropTypes.func.isRequired,
};

export default withStyles(styles)(UserReposLayout);
