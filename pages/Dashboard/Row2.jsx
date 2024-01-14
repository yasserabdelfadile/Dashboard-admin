import {
  Paper,
  Stack,
  Box,
  Typography,
  useTheme,
  IconButton,
} from "@mui/material";
import Component from "../lline/Component";
import useMediaQuery from "@mui/material/useMediaQuery";
import { DownloadOutlined } from "@mui/icons-material";
import data from "./data";

const Row2 = () => {
  const theme = useTheme();
  const matches = useMediaQuery("(min-width:600px)");
  return (
    <Stack
      direction={matches ? "row" : "column"}
      flexWrap={"wrap"}
      justifyContent={{ xs: "center", ms: "center" }}
      gap={1}
      mt={1}
    >
      <Paper sx={{ minWidth: 200, maxwidth: 900, flexGrow: 1 }}>
        <Stack
          direction={"row"}
          flexWrap={"wrap"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Box>
            <Typography
              color={theme.palette.secondary.main}
              mb={1}
              mt={2}
              ml={4}
              variant="h6"
            >
              Revenue Generated
            </Typography>
            <Typography variant="body2" ml={4}>
              $59,342.32
            </Typography>
          </Box>
          <Box>
            <IconButton sx={{ mr: 3 }}>
              <DownloadOutlined />
            </IconButton>
          </Box>
        </Stack>
        <Component Isdasboard={true} heights={"260px"} />
      </Paper>

      <Box
        height={350}
        flexGrow={1}
        minWidth={"280px"}
        maxHeight={380}
        overflow={"auto"}
      >
        <Paper>
          <Typography
            color={theme.palette.secondary.main}
            fontWeight={"bold"}
            p={1.2}
            variant="h6"
            textAlign={"center"}
          >
            Recent Transaction
          </Typography>
        </Paper>

        {data.map((item) => {
          return (
            // eslint-disable-next-line react/jsx-key
            <Paper
              sx={{
                mt: 1,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
              key={item.key}
            >
              <Box p={1.2}>
                <Typography variant="body1" fontWeight="600">
                  {item.txId}
                </Typography>
                <Typography variant="body2">{item.user}</Typography>
              </Box>
              <Typography variant="body1">{item.date}</Typography>
              <Typography
                variant="body2"
                borderRadius={1.4}
                p={1}
                bgcolor={theme.palette.error.main}
              >
                $555
              </Typography>
            </Paper>
          );
        })}
      </Box>
    </Stack>
  );
};
export default Row2;
