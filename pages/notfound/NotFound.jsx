import { Typography, Box, useTheme } from "@mui/material";

const NotFound = () => {
  const theme = useTheme();
  return (
    <Box>
      <Typography color={theme.palette.error.main} align="center">
        This Page Not Found
        <br />
        <br />
        Please try again later....
      </Typography>
    </Box>
  );
};
export default NotFound;
