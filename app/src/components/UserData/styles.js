const styles = () => ({
  userWrapper: {
    display: "flex",
    flexDirection: "column",

    ["@media (max-width: 880px)"]: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-around",
    },

    ["@media (max-width: 490px)"]: {
      display: "block",
      marginBottom: "30px",
      textAlign: "center",
    },
  },

  img: {
    borderRadius: "50%",
    display: "block",
    maxWidth: "280px",
    height: "auto",
    marginBottom: "29px",

    ["@media (max-width: 880px)"]: {
      marginRight: "20px",
    },

    ["@media (max-width: 590px)"]: {
      maxWidth: "200px",
    },

    ["@media (max-width: 490px)"]: {
      margin: "0 auto",
      marginBottom: "20px",
    },
  },

  userName: {
    fontWeight: "600",
    fontSize: "26px",
    marginBottom: "2px",

    ["@media (max-width: 490px)"]: {
      fontSize: "24px",
    },
  },

  userLogin: {
    fontSize: "18px",
    color: "#0064EB",
    marginBottom: "15.5px",
    padding: "10px 0",
    transition: "fill 0.3s linear",

    "&:hover": {
      color: "#05438b",
    },
  },

  userSocial: {
    display: "flex",
    alignItems: "center",

    ["@media (max-width: 1090px)"]: {
      display: "block",
    },
  },

  userFollowersIcon: {
    fill: "#808080",
    width: "23px",
    height: "15px",
    marginRight: "12px",
  },

  userFollowers: {
    ["@media (max-width: 1090px)"]: {
      marginBottom: "10px",
    },
  },

  userfollowing: {
    marginLeft: "20px",

    ["@media (max-width: 1090px)"]: {
      marginLeft: "0",
    },
  },

  userFollowingIcon: {
    fill: "#808080",
    width: "17px",
    height: "17px",
    marginRight: "12px",
  },
});

export default styles;
