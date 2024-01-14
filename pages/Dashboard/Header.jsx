import { Box, Typography, useTheme } from "@mui/material";

// eslint-disable-next-line react/prop-types
const Header = ({ Title, subtitle, dashboard = false }) => {
  const theme = useTheme();

  return (
    <Box mb={dashboard ? 2 : 3}>
      <Typography
        variant="h5"
        sx={{
          color: theme.palette.info.light,
          fontWeight: "bold",
        }}
      >
        {Title}
      </Typography>

      <Typography variant="body1">{subtitle}</Typography>
    </Box>
  );
};
export default Header;
