const styles = () => ({
  UserNotFoundWrapper: {
    display: "flex",
    alignItems: "center",
    minHeight: "696px",
    backgroundColor: "#E5E5E5",
  },

  userNotFoundBody: {
    margin: "0 auto",
    textAlign: "center",
  },

  userNotFoundIcon: {
    fill: "#808080",
    width: "65px",
    height: "75px",
    marginBottom: "42px",

    "@media (max-width: 490px)": {
      width: "45px",
      height: "55px",
    },
  },

  userNotFoundText: {
    fontSize: "22px",
    color: "#808080",

    "@media (max-width: 490px)": {
      fontSize: "18px",
    },
  },
});

export default styles;
