const styles = () => ({
  reposIsEmptyWrapper: {
    display: "flex",
    alignItems: "center",
    minHeight: "550px",
    backgroundColor: "#E5E5E5",

    ["@media (max-width: 490px)"]: {
      minHeight: "250px",
    },
  },

  reposIsEmptyBody: {
    margin: "0 auto",
    textAlign: "center",
  },

  reposIsEmptyIcon: {
    fill: "#808080",
    width: "76px",
    height: "62px",
    marginBottom: "62px",

    ["@media (max-width: 490px)"]: {
      width: "56px",
      height: "42px",
      marginBottom: "42px",
    },
  },

  reposIsEmptyText: {
    fontSize: "22px",
    color: "#808080",

    ["@media (max-width: 490px)"]: {
      fontSize: "18px",
    },
  },
});

export default styles;
