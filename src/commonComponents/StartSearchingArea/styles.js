const styles = () => ({
  startSearchWrapper: {
    display: "flex",
    alignItems: "center",
    minHeight: "696px",
    backgroundColor: "#E5E5E5",
  },

  startSearchBody: {
    margin: "0 auto",
    maxWidth: "210px",
    height: "200px",
    textAlign: "center",
  },

  startSearchIcon: {
    fill: "#808080",
    width: "66px",
    height: "66px",
    marginBottom: "47px",

    ["@media (max-width: 490px)"]: {
      width: "46px",
      height: "46px",
    },
  },

  startSearchText: {
    fontSize: "22px",
    color: "#808080",

    ["@media (max-width: 490px)"]: {
      fontSize: "18px",
    },
  },
});

export default styles;
