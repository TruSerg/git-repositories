import { useState } from "react";

import UserReposLayout from "./userReposLayout";

const UserRepos = ({ userReposList }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [reposPerPage] = useState(4);

  const indexOfLastRepo = currentPage * reposPerPage;

  const indexOfFirstRepo = indexOfLastRepo - reposPerPage;

  const currentReposList = userReposList.slice(
    indexOfFirstRepo,
    indexOfLastRepo
  );

  const currentQuantityRepos = indexOfFirstRepo + 1 * currentReposList.length;

  const totalPages = Math.ceil(userReposList.length / reposPerPage);

  return (
    <UserReposLayout
      indexOfLastRepo={indexOfLastRepo}
      indexOfFirstRepo={indexOfFirstRepo}
      userReposList={userReposList}
      currentPage={currentPage}
      setCurrentPage={setCurrentPage}
      currentReposList={currentReposList}
      currentQuantityRepos={currentQuantityRepos}
      totalPages={totalPages}
    />
  );
};

export default UserRepos;
