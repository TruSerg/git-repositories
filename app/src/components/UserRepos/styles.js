const styles = () => ({
  reposWrapper: {
    display: "flex",
    flexDirection: "column",
    width: "70%",
    marginLeft: "30px",
  },

  reposTitle: {
    fontWeight: "600",
    fontSize: "32px",
    marginBottom: "29px",
  },

  userRepo: {
    boxSizing: "border-box",
    maxWidth: "877px",
    width: "100%",
    minHeight: "112px",
    padding: "14px 32px 24px 32px",
    borderRadius: "6px",
    marginBottom: "24px",
    backgroundColor: "#fff",
  },

  repoName: {
    fontWeight: "500",
    fontSize: "24px",
    marginBottom: "6px",
    color: "#0064EB",
    padding: "10px 0",
    transition: "color 0.3s linear",

    "&:hover": {
      color: "#05438b",
    },
  },

  repoDescription: {
    fontSize: "16px",
  },
});

export default styles;
