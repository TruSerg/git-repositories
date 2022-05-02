const styles = () => ({
  searchWrapper: {
    display: "flex",
    alignItems: "center",
    minHeight: "72px",
    maxWidth: "100%",
    backgroundColor: "#0064EB",
  },

  searchGitIcon: {
    fill: "#fff",
    width: "40px",
    height: "40px",
    marginLeft: "41px",
    transition: "fill 0.3s linear",

    "&:hover": {
      fill: "#515050",
    },
  },

  searchForm: {
    position: "relative",
  },

  searchIcon: {
    position: "absolute",
    fill: "#808080",
    width: "14px",
    height: "14px",
    left: "40px",
    top: "50%",
    transform: "translateY(-50%)",
  },

  searchInput: {
    minWidth: "500px",
    minHeight: "40px",
    borderRadius: "6px",
    marginLeft: "22px",
    padding: "8px 44px",
    fontSize: "14px",
  },

  searchBodyArea: {
    display: "flex",
    justifyContent: "space-between",
    minHeight: "696px",
    backgroundColor: "#E5E5E5",
    padding: "28px 57px",
  },
});

export default styles;
