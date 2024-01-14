import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { rows } from "./data";

import Header from "../Dashboard/Header";

const contacts = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks

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
  ];
  return (
    <div style={{ height: 565, width: "99%", margin: "auto" }}>
      <Header
        Title={"Contacts"}
        subtitle={"List of Contacts for future reference"}
      />
      <DataGrid
        //loading={loading}
        checkboxSelection
        slots={{ toolbar: GridToolbar }}
        rows={rows}
        columns={columns}
      />
    </div>
  );
};
export default contacts;
