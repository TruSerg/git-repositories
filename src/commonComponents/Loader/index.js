import { memo } from "react";
import { CircularProgress } from "@mui/material";

const Loader = () => {
  return <CircularProgress />;
};

export default memo(Loader);
