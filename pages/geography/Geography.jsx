import { Box } from "@mui/material";
import Mapss from "./Mapss";
import Header from "../Dashboard/Header";

const geography = () => {
  return (
    <Box>
      <Header Title={"Geography"} subtitle={"simple geography chart"} />
      <Mapss height={"75vh"} />
    </Box>
  );
};
export default geography;
