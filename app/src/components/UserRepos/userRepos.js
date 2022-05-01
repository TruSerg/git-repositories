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

  const howManyPages = Math.ceil(userReposList.length / reposPerPage);

  return (
    <UserReposLayout
      userReposList={userReposList}
      setCurrentPage={setCurrentPage}
      currentReposList={currentReposList}
      howManyPages={howManyPages}
    />
  );
};

export default UserRepos;
