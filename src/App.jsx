import * as React from "react";
import {
  ThemeProvider,
  createTheme,
  styled,
  useTheme,
} from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
// import InboxIcon from "@mui/icons-material/MoveToInbox";
// import MailIcon from "@mui/icons-material/Mail";
// import for search form in nav par
import { alpha } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import { getDesignTokens } from "./darktheme";
import {
  BarChartOutlined,
  CalendarTodayOutlined,
  ContactsOutlined,
  HelpOutlineOutlined,
  HomeOutlined,
  MapOutlined,
  PeopleOutlined,
  PersonOutlined,
  PieChartOutlineOutlined,
  ReceiptOutlined,
  TimelineOutlined,
} from "@mui/icons-material";
import { Avatar } from "@mui/material";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { grey } from "@mui/material/colors";
import Tooltip from "@mui/material/Tooltip";

const drawerWidth = 240;
const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export default function MiniDrawer() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  // start varable for search form ================
  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  }));

  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("md")]: {
        width: "20ch",
      },
    },
  }));

  // end varable for search form====================

  const [mode, setMode] = React.useState(
    localStorage.getItem("currentmode")
      ? localStorage.getItem("currentmode")
      : "light"
  );
  // Update the theme only if the mode changes
  const themes = React.useMemo(
    () => createTheme(getDesignTokens(mode)),
    [mode]
  );
  const array = [
    {
      text: "Dashboard",
      icon: <HomeOutlined />,
      path: "/",
    },
    {
      text: "Manage Team",
      icon: <PeopleOutlined />,
      path: "/team",
    },
    {
      text: "Contact Information",
      icon: <ContactsOutlined />,
      path: "/contacts",
    },
    {
      text: "Invoices Balances",
      icon: <ReceiptOutlined />,
      path: "/invoices",
    },
  ];
  const array2 = [
    {
      text: "Profile Form",
      icon: <PersonOutlined />,
      path: "/form",
    },
    {
      text: "Calender",
      icon: <CalendarTodayOutlined />,
      path: "/calendar",
    },
    {
      text: "FAQ Page",
      icon: <HelpOutlineOutlined />,
      path: "/faq",
    },
  ];

  const array3 = [
    {
      text: "Bar Chart",
      icon: <BarChartOutlined />,
      path: "/bar",
    },
    {
      text: "Pie Chart",
      icon: <PieChartOutlineOutlined />,
      path: "/pie",
    },
    {
      text: "Line Chart",
      icon: <TimelineOutlined />,
      path: "/line",
    },
    {
      text: "Geography Chart",
      icon: <MapOutlined />,
      path: "/geography",
    },
  ];
  const navigate = useNavigate();
  let location = useLocation();

  return (
    <ThemeProvider theme={themes}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        {/* start navbar */}
        <AppBar position="fixed" open={open}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{
                marginRight: 5,
                ...(open && { display: "none" }),
              }}
            >
              <MenuIcon />
            </IconButton>

            {/* ======================================= */}
            {/* ======================================= */}
            {/* start search form */}
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
              />
            </Search>
            {/* end search form  */}
            {/* ======================================= */}
            {/* ======================================= */}
            {/* start 4  icon on navbar  */}
            {/* to set icon right */}
            {/* ------------------------------- */}
            <Box flexGrow={1} />
            {/* ------------------------------- */}
            {/* <stack direction="row"> */}
            {/* <stack direction={"row"}> */}
            {themes.palette.mode === "light" ? (
              <IconButton
                onClick={() => {
                  localStorage.setItem(
                    "currentmode",
                    themes.palette.mode === "dark" ? "light" : "dark"
                  );
                  setMode((prevMode) =>
                    prevMode === "light" ? "dark" : "light"
                  );
                }}
                color="inherit"
                aria-label="add an alarm"
              >
                <LightModeOutlinedIcon />
              </IconButton>
            ) : (
              <IconButton
                onClick={() => {
                  localStorage.setItem(
                    "currentmode",
                    themes.palette.mode === "dark" ? "light" : "dark"
                  );
                  setMode((prevMode) =>
                    prevMode === "light" ? "dark" : "light"
                  );
                }}
                color="inherit"
                aria-label="add an alarm"
              >
                <DarkModeOutlinedIcon />
              </IconButton>
            )}

            <IconButton color="inherit" aria-label="delete">
              <NotificationsOutlinedIcon />
            </IconButton>

            <IconButton color="inherit" aria-label="add an alarm">
              <SettingsOutlinedIcon />
            </IconButton>

            <IconButton color="inherit" aria-label="delete">
              <Person2OutlinedIcon />
            </IconButton>
            {/* </stack> */}
            {/* end 4  icon on navbar  */}
          </Toolbar>
        </AppBar>
        {/* end  navbar */}
        {/* ======================================================================= */}
        {/* ======================================================================= */}
        {/* start side par */}
        <Drawer variant="permanent" open={open}>
          <DrawerHeader>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === "rtl" ? (
                <ChevronRightIcon />
              ) : (
                <ChevronLeftIcon />
              )}
            </IconButton>
          </DrawerHeader>
          <Divider />
          <Avatar
            sx={{
              mx: "auto",
              width: open ? 90 : 40,
              height: open ? 90 : 40,
              transition: "0.25s",
              my: 1,
              border: "2px solid grey",
            }}
            alt="Travis Howard"
            src="https://steamuserimages-a.akamaihd.net/ugc/1746809593547408829/1B8899A431F0CB10D6681C25536995FCD973F709/?imw=512&&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false"
          />
          <Typography
            align="center"
            sx={{ fontSize: open ? 18 : 0, transition: "0.25s" }}
          >
            Yasser Elsayed
          </Typography>
          <Typography
            align="center"
            sx={{
              fontSize: open ? 16 : 0,
              transition: "0.25s",
              color: theme.palette.info.main,
            }}
          >
            Admin
          </Typography>
          <Divider />

          <List>
            {array.map((item) => (
              <ListItem
                key={item.path}
                disablePadding
                sx={{ display: "block" }}
              >
                <Tooltip title={open ? null : item.text} placement="right">
                  <ListItemButton
                    onClick={() => {
                      navigate(item.path);
                    }}
                    sx={{
                      minHeight: 48,
                      justifyContent: open ? "initial" : "center",
                      px: 2.5,
                      bgcolor:
                        location.pathname === item.path
                          ? themes.palette.mode === "dark"
                            ? grey[800]
                            : grey[200]
                          : null,
                    }}
                  >
                    <ListItemIcon
                      sx={{
                        minWidth: 0,
                        mr: open ? 3 : "auto",
                        justifyContent: "center",
                      }}
                    >
                      {item.icon}
                      {/* {index % 2 === 0 ? <InboxIcon /> : <MailIcon />} */}
                    </ListItemIcon>
                    <ListItemText
                      primary={item.text}
                      sx={{ opacity: open ? 1 : 0 }}
                    />
                  </ListItemButton>
                </Tooltip>
              </ListItem>
            ))}
          </List>

          <Divider />
          <List>
            {array2.map((item) => (
              <ListItem
                key={item.path}
                disablePadding
                sx={{ display: "block" }}
              >
                <Tooltip title={open ? null : item.text} placement="right">
                  <ListItemButton
                    onClick={() => {
                      navigate(item.path);
                    }}
                    sx={{
                      minHeight: 48,
                      justifyContent: open ? "initial" : "center",
                      px: 2.5,
                      bgcolor:
                        location.pathname === item.path
                          ? themes.palette.mode === "dark"
                            ? grey[800]
                            : grey[200]
                          : null,
                    }}
                  >
                    <ListItemIcon
                      sx={{
                        minWidth: 0,
                        mr: open ? 3 : "auto",
                        justifyContent: "center",
                      }}
                    >
                      {item.icon}
                      {/* {index % 2 === 0 ? <InboxIcon /> : <MailIcon />} */}
                    </ListItemIcon>
                    <ListItemText
                      primary={item.text}
                      sx={{ opacity: open ? 1 : 0 }}
                    />
                  </ListItemButton>
                </Tooltip>
              </ListItem>
            ))}
          </List>
          <Divider />

          <List>
            {array3.map((item) => (
              <ListItem
                key={item.path}
                disablePadding
                sx={{ display: "block" }}
              >
                <Tooltip title={open ? null : item.text} placement="right">
                  <ListItemButton
                    onClick={() => {
                      navigate(item.path);
                    }}
                    sx={{
                      minHeight: 48,
                      justifyContent: open ? "initial" : "center",
                      px: 2.5,
                      bgcolor:
                        location.pathname === item.path
                          ? themes.palette.mode === "dark"
                            ? grey[800]
                            : grey[200]
                          : null,
                    }}
                  >
                    <ListItemIcon
                      sx={{
                        minWidth: 0,
                        mr: open ? 3 : "auto",
                        justifyContent: "center",
                      }}
                    >
                      {item.icon}
                      {/* {index % 2 === 0 ? <InboxIcon /> : <MailIcon />} */}
                    </ListItemIcon>
                    <ListItemText
                      primary={item.text}
                      sx={{ opacity: open ? 1 : 0 }}
                    />
                  </ListItemButton>
                </Tooltip>
              </ListItem>
            ))}
          </List>

          <Divider />
        </Drawer>
        {/* end side par */}
        {/* ======================================================================== */}
        {/* ======================================================================== */}
        {/* start body */}
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <DrawerHeader />
          <Outlet />
        </Box>
        {/* end body */}
        {/* ======================================================================== */}
        {/* ======================================================================== */}
      </Box>
    </ThemeProvider>
  );
}

// import "./App.css";

// function App() {
//   return (
//     <>
//       <div>hello div1</div>

//       <div className="card">hello div 2</div>
//     </>
//   );
// }

//export default App;
