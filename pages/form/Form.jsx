//import { Email } from "@mui/icons-material";
import React from "react";
import { Alert, Button, Snackbar, Stack } from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useForm } from "react-hook-form";
import Header from "../Dashboard/Header";

const regPhone = /^\+20\d{11}$/;
const regPassword =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/;
const regEmail =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const form = () => {
  const list = [
    {
      value: "Admin",
      label: "Admin",
    },
    {
      value: "User",
      label: "User",
    },
    {
      value: "Manager",
      label: "Manager",
    },
  ];
  const {
    register,
    handleSubmit,
    formState: { errors },
    // eslint-disable-next-line react-hooks/rules-of-hooks
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    handleClick();
  };
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [open, setOpen] = React.useState(false);
  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <Box
      onSubmit={handleSubmit(onSubmit)}
      component="form"
      autoComplete="on"
      noValidate
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
      }}
    >
      <Header Title={"Create User"} subtitle={"Create a New user Profile"} />
      <Stack direction={"row"} gap={3}>
        <TextField
          //  required
          {...register("firstName", {
            required: true,
            minLength: 3,
            maxLength: 20,
          })}
          id="filled-required1"
          label="First Name"
          sx={{ flex: 1 }}
          variant="filled"
          error={Boolean(errors.firstName)}
          helperText={
            errors.firstName
              ? "first name is Required && at least 3 character"
              : null
          }
        />
        <TextField
          {...register("lastName", {
            required: true,
            minLength: 3,
            maxLength: 20,
          })}
          id="filled-required2"
          label="Last Name"
          sx={{ flex: 1 }}
          variant="filled"
          helperText={
            errors.lastName
              ? "last name is Required && at least 3 character"
              : null
          }
          error={Boolean(errors.lastName)}
        />
      </Stack>
      <TextField
        {...register("Email", { required: true, pattern: regEmail })}
        id="filled-required3"
        type="email"
        label="Email"
        sx={{ flex: 1 }}
        variant="filled"
        error={Boolean(errors.Email)}
        helperText={errors.Email ? "Enter valid mail" : null}
      />
      <TextField
        {...register("Password", { required: true, pattern: regPassword })}
        id="filled-password-input4"
        label="Password"
        type="password"
        autoComplete="current-password"
        variant="filled"
        helperText={errors.Password ? "Enter complexe password" : null}
        error={Boolean(errors.Password)}
      />
      <TextField
        {...register("Phone", { pattern: regPhone })}
        id="filled-required8"
        type="tel"
        label="Phone"
        variant="filled"
        helperText={errors.Phone ? "Enter Accpted Phone" : null}
        error={Boolean(errors.Phone)}
      />
      <TextField id="filled-required9" label="Address 1" variant="filled" />

      <TextField
        {...register("Permession")}
        id="filled-select-currency-native"
        select
        label="Permession"
        defaultValue="User"
        SelectProps={{
          native: true,
        }}
        //  helperText="select Role"
        variant="filled"
        error={Boolean(errors.Permession)}
      >
        {list.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </TextField>
      <Box sx={{ textAlign: "end" }}>
        <Button
          type="submit"
          sx={{ textTransform: "capitalize" }}
          variant="contained"
        >
          Create New User
        </Button>

        <Snackbar
          open={open}
          autoHideDuration={3000}
          onClose={handleClose}
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
        >
          <Alert
            onClose={handleClose}
            severity="success"
            sx={{ width: "100%" }}
          >
            Account creat successfully!
          </Alert>
        </Snackbar>
      </Box>
    </Box>
  );
};
export default form;

//#region pattern for email and password
// const regEmail =
//   /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

// const regPassword =
//   /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
//#endregion
