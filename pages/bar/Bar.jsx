import { Box, useTheme } from "@mui/material";
//import { ResponsiveBar } from "@nivo/bar";
//import { Box } from "@mui/material";
import Bar from "./themeChar";
import Header from "../Dashboard/Header";
const bar = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const theme = useTheme();
  return (
    <Box>
      <Header
        Title={"Bar chart"}
        subtitle={"decleare all increae and decrease happend"}
      />
      <Bar
        height={"75vh"}
        scheme={theme.palette.mode === "dark" ? "dark2" : "category10"}
      />
    </Box>
  );
};
export default bar;
