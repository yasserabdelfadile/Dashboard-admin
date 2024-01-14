import { Box } from "@mui/material";
// eslint-disable-next-line no-unused-vars
import Pi from "./pieCom";
import Header from "../Dashboard/Header";

const pie = () => {
  return (
    <Box sx={{ height: "75vh" }}>
      <Header Title={"Pie Chart"} subtitle={"another way to display data "} />
      <Pi />
    </Box>
  );
};
export default pie;
