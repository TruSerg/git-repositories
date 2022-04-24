import { withStyles } from "@mui/styles";
import { CircularProgress, dividerClasses } from "@mui/material";

import styles from "./styles";

const InputSearchLayout = ({
  error,
  name,
  followers,
  following,
  avatar,
  userReposList,
  handleChange,
  handleSubmit,
  classes,
}) => {
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} />
      </form>

      {error ? (
        <h1>NOT FOUND</h1>
      ) : (
        <div>
          <div>
            <img className={classes.img} src={avatar} alt="photo" />
          </div>
          <div>{name}</div>
          <div>followers {followers}</div>
          <div>following {following}</div>
          {userReposList.map(({ id, name, full_name }) => {
            return (
              <div className={classes.userRepo} key={id}>
                <p>{name}</p>
                <p>{full_name}</p>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default withStyles(styles)(InputSearchLayout);
