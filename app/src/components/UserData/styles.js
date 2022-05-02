const styles = () => ({
  img: {
    borderRadius: "50%",
    width: "280px",
    height: "280px",
    marginBottom: "29px",
  },

  userName: {
    fontWeight: "600",
    fontSize: "26px",
    marginBottom: "2px",
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

  userFollowersIcon: {
    fill: "#808080",
    width: "23px",
    height: "15px",
    marginRight: "12px",
  },

  userfollowing: {
    marginLeft: "20px",
  },

  userFollowingIcon: {
    fill: "#808080",
    width: "17px",
    height: "17px",
    marginRight: "12px",
  },
});

export default styles;
