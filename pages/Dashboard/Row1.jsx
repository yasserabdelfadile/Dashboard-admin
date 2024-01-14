import { Stack, useTheme } from "@mui/material";
import Card from "./Card";
import EmailIcon from "@mui/icons-material/Email";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";

const Row1 = () => {
  const theme = useTheme();
  return (
    <Stack
      direction={"row"}
      flexWrap={"wrap"}
      gap={1}
      justifyContent={{ xs: "center", ms: "space-between" }}
    >
      <Card
        icon={
          <EmailIcon
            sx={{ fontSize: "23px", color: theme.palette.secondary.main }}
          />
        }
        number={"12,361"}
        title={"Email Sent"}
        chartdata={data1}
        persent={"+14%"}
        scheme={theme.palette.mode === "dark" ? "nivo" : "red_grey"}
      />
      <Card
        icon={
          <PointOfSaleIcon
            sx={{ fontSize: "23px", color: theme.palette.secondary.main }}
          />
        }
        number={"431,225"}
        title={"Sales obtained"}
        chartdata={data2}
        persent={"+21%"}
        scheme={
          theme.palette.mode === "dark" ? "category10" : "pink_yellowGreen"
        }
      />
      <Card
        icon={
          <PersonAddIcon
            sx={{ fontSize: "23px", color: theme.palette.secondary.main }}
          />
        }
        number={"32,441"}
        title={"New Clients"}
        chartdata={data3}
        persent={"+5%"}
        scheme={theme.palette.mode === "dark" ? "dark2" : "brown_blueGreen"}
      />
      <Card
        icon={
          <TrafficIcon
            sx={{ fontSize: "23px", color: theme.palette.secondary.main }}
          />
        }
        number={"1,325,134"}
        title={"Traffic Received"}
        chartdata={data4}
        persent={"+43%"}
        scheme={theme.palette.mode === "dark" ? "set2" : "set1"}
      />
    </Stack>
  );
};
const data1 = [
  {
    id: "haskell",
    label: "haskell",
    value: 259,
    color: "hsl(16, 70%, 50%)",
  },
  {
    id: "sass",
    label: "sass",
    value: 117,
    color: "hsl(308, 70%, 50%)",
  },
];
const data2 = [
  {
    id: "java",
    label: "java",
    value: 390,
    color: "hsl(292, 70%, 50%)",
  },
  {
    id: "scala",
    label: "scala",
    value: 213,
    color: "hsl(318, 70%, 50%)",
  },
];
const data3 = [
  {
    id: "rust",
    label: "rust",
    value: 287,
    color: "hsl(355, 70%, 50%)",
  },
  {
    id: "elixir",
    label: "elixir",
    value: 339,
    color: "hsl(301, 70%, 50%)",
  },
];

const data4 = [
  {
    id: "c",
    label: "c",
    value: 101,
    color: "hsl(171, 70%, 50%)",
  },
  {
    id: "stylus",
    label: "stylus",
    value: 221,
    color: "hsl(35, 70%, 50%)",
  },
  {
    id: "lisp",
    label: "lisp",
    value: 164,
    color: "hsl(323, 70%, 50%)",
  },
];
export default Row1;
