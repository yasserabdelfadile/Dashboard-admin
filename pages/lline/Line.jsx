import { Box } from "@mui/material";
import Component from "./Component";
import Header from "../Dashboard/Header";

const line = () => {
  return (
    <Box>
      <Header Title={"Line Chart"} subtitle={"Sample of line chart"} />
      <Component heights={"75vh"} />
    </Box>
  );
};
export default line;
