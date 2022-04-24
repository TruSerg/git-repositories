import { withStyles } from "@mui/styles";

// import UserDataLayout from "./userDataLayout";
// import UserReposLayout from "./userReposLayout";

import styles from "./styles";

const InputSearchLayout = ({ classes, handleChange, handleSubmit }) => {
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} />
      </form>
    </div>
  );
};

export default withStyles(styles)(InputSearchLayout);
