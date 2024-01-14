//import React from "react";
import { useTheme } from "@mui/material";
import { rows } from "./data";
import { Box, Typography } from "@mui/material";
import {
  AdminPanelSettingsOutlined,
  LockOpenOutlined,
  SecurityOutlined,
} from "@mui/icons-material";
import Header from "../Dashboard/Header";
//import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";

const Team = () => {
  const themes = useTheme();
  const columns = [
    // add  this => (  flex:1  ) this proberty let column take free space if there are in most of one divide between them
    // { field: "col1", headerName: "Column 1", width: 150 },
    {
      field: "id",
      headerName: "ID",
      align: "center",
      headerAlign: "center",
      width: 33,
    },
    {
      field: "col2",
      headerName: "Name",
      align: "center",
      headerAlign: "center",
      flex: 1,
    },
    {
      field: "col3",
      headerName: "Emails",
      align: "center",
      headerAlign: "center",
      flex: 1,
    },
    {
      field: "col4",
      headerName: "Age",
      align: "center",
      headerAlign: "center",
    },
    {
      field: "col5",
      headerName: "Phone",
      align: "center",
      headerAlign: "center",
      flex: 1,
    },
    {
      field: "col6",
      headerName: "Access",
      align: "center",
      headerAlign: "center",
      flex: 1,
      renderCell: ({ row: { col6 } }) => {
        return (
          <Box
            sx={{
              p: "5px",
              backgroundColor:
                col6 === "admin"
                  ? themes.palette.primary.dark
                  : col6 === "user"
                  ? themes.palette.secondary.dark
                  : "#3da58a",
              width: "100px",
              borderRadius: "10px",
              textAlign: "center",
              display: "flex",
              justifyContent: "space-evenly",
            }}
          >
            {col6 === "admin" && (
              <AdminPanelSettingsOutlined fontSize="small" color="#fff" />
            )}
            {col6 === "user" && (
              <LockOpenOutlined fontSize="small" color="#fff" />
            )}
            {col6 === "manager" && (
              <SecurityOutlined fontSize="small" color="#fff" />
            )}
            <Typography sx={{ fontSize: "13px", color: "#fff" }}>
              {col6}
            </Typography>
          </Box>
        );
      },
    },
  ];
  return (
    <div style={{ height: 565, width: "99%", margin: "auto" }}>
      <Header Title={"Team"} subtitle={"Managing The Team member"} />
      <DataGrid rows={rows} columns={columns} />
    </div>
  );
};
export default Team;
