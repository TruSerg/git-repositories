const styles = () => ({
  reposWrapper: {
    display: "flex",
    flexDirection: "column",
    width: "70%",
    marginLeft: "30px",

    ["@media (max-width: 880px)"]: {
      width: "100%",
      margin: "0 auto",
    },
  },

  reposTitle: {
    fontWeight: "600",
    fontSize: "32px",
    marginBottom: "29px",

    ["@media (max-width: 490px)"]: {
      fontSize: "24px",
      textAlign: "center",
      marginBottom: "20px",
    },
  },

  userRepo: {
    maxWidth: "877px",
    width: "100%",
    minHeight: "112px",
    wordWrap: "break-word",
    padding: "14px 32px 24px 32px",
    borderRadius: "6px",
    marginBottom: "24px",
    backgroundColor: "#fff",

    ["@media (max-width: 880px)"]: {
      width: "100%",
    },

    ["@media (max-width: 490px)"]: {
      minHeight: "80px",
      padding: "10px",
      marginBottom: "20px",
    },
  },

  repoName: {
    fontWeight: "500",
    fontSize: "24px",
    lineHeight: "29px",
    marginBottom: "6px",
    color: "#0064EB",
    padding: "10px 0",
    transition: "color 0.3s linear",

    "&:hover": {
      color: "#05438b",
    },

    ["@media (max-width: 490px)"]: {
      fontSize: "21px",
    },
  },

  repoDescription: {
    lineHeight: "19px",
    fontSize: "16px",
  },

  paginationArea: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    marginTop: "auto",

    ["@media (max-width: 880px)"]: {
      flexDirection: "column",
      margin: "0 auto",
    },
  },

  paginationData: {
    fontSize: "14px",
    color: "#808080",

    ["@media (max-width: 880px)"]: {
      marginBottom: "20px",
    },
  },
});

export default styles;
