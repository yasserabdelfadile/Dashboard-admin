/* eslint-disable react/prop-types */
import { Box, Paper, Stack, Typography } from "@mui/material";
import Pi from "../pie/Normalpi";

const Card = ({ icon, number, title, chartdata, persent, scheme }) => {
  return (
    <Paper
      sx={{
        minWidth: "100px",
        p: 1.5,
        display: "flex",
        justifyContent: "space-between",
        flexGrow: 1,
      }}
    >
      <Stack gap={1}>
        {icon}
        <Typography>{number}</Typography>
        <Typography>{title}</Typography>
      </Stack>
      <Stack alignItems={"center"}>
        <Box sx={{ height: "80px" }} width={"80px"}>
          <Pi chartdata={chartdata} scheme={scheme} Padng={10} />
        </Box>
        <Typography>{persent}</Typography>
      </Stack>
    </Paper>
  );
};
export default Card;
