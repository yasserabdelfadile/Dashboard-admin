//import React from "react";

import { Box, Button, Stack, useTheme } from "@mui/material";
import Row1 from "./Row1";
import Row2 from "./Row2";
import Row3 from "./Row3";
import { DownloadOutlined } from "@mui/icons-material";
import Header from "./Header";
const Dashboard = () => {
  const theme = useTheme();
  return (
    <div>
      <Stack
        direction={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Header
          Title={"DashBoard"}
          subtitle={" All Information Can Reach Easly fom Here"}
          dashboard={true}
        />
        <Box sx={{ textAlign: "end" }}>
          <Button
            variant="contained"
            sx={{
              textTransform: "capitalize",
              marginBottom: "10px",
              color: theme.palette.text.disabled,
            }}
          >
            <DownloadOutlined />
            Download Report
          </Button>
        </Box>
      </Stack>

      <Row1 />
      <Row2 />
      <Row3 />
    </div>
  );
};
export default Dashboard;
