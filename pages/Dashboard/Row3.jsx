import {
  Paper,
  // Stack,
  Box,
  Typography,
  useTheme,
  Stack,

  // IconButton,
} from "@mui/material";
import Pi from "../pie/Normalpi";
import chartdata from "./chartdata";
import Bar from "../bar/themeChar";
import Mapss from "../geography/Mapss";
const Row3 = () => {
  const theme = useTheme();
  return (
    <Stack direction={"row"} flexWrap={"wrap"} gap={1} mt={1}>
      <Paper
        sx={{
          width: "32%",
          height: "450px",
          minWidth: "200px",
          flexGrow: 1,
        }}
        align="center"
      >
        <Typography
          color={theme.palette.secondary.main}
          sx={{ padding: "30px 30px 0 30px " }}
          variant="h6"
          fontWeight="600"
          align="center"
          mb={2}
        >
          Campaign
        </Typography>
        <Box
          sx={{
            height: "250px",
          }}
          width={"200px"}
        >
          <Pi
            chartdata={chartdata}
            scheme={theme.palette.mode === "dark" ? "nivo" : "spectral"}
            Padng={0}
          />
        </Box>
        <Typography variant="h6">$48,352 revenue generated</Typography>
        <Typography variant="body2" px={0.7} pb={3} align="center">
          Includes extra misc expenditures costs
        </Typography>
      </Paper>

      <Paper
        sx={{ width: "32%", minWidth: "200px", flexGrow: 1, height: "450px" }}
      >
        <Typography
          color={theme.palette.secondary.main}
          variant="h6"
          fontWeight="600"
          sx={{
            padding: "30px 30px 0 30px",
          }}
          align="center"
          mb={2}
        >
          Sales Quantity
        </Typography>
        <Bar
          height={"360px"}
          Isdashboard={true}
          scheme={theme.palette.mode === "dark" ? "paired" : "set1"}
        />
      </Paper>

      <Paper
        sx={{ width: "32%", minWidth: "200px", flexGrow: 1, height: "450px" }}
        align="center"
      >
        <Typography
          color={theme.palette.secondary.main}
          variant="h6"
          fontWeight="600"
          sx={{
            padding: "30px 30px 0 30px",
          }}
          align="center"
          mb={2}
        >
          Geography Based Traffic
        </Typography>
        <Mapss height={"360px"} Isdashboard={true} />
      </Paper>
    </Stack>
  );
};
export default Row3;
