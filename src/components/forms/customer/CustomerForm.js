import { makeStyles } from "@material-ui/core";
import React, { Fragment } from "react";
import { useForm } from "react-hook-form";
import Button from "@material-ui/core/Button";

import TextFieldController from "../controllers/TextFieldController";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: theme.spacing(2),

    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "300px",
    },
    "& .MuiButtonBase-root": {
      margin: theme.spacing(2),
    },
  },
}));

const CustomerForm = (props) => {
  const classes = useStyles();

  const { handleSubmit, control } = useForm();

  const onSubmit = (data) => {
    props.onSubmit(data);
  };

  return (
    <Fragment>
      <h1>{props.headerText}</h1>
      <form className={classes.root} onSubmit={handleSubmit(onSubmit)}>
        <TextFieldController
          name={"fullName"}
          control={control}
          defaultValue={props.fullName !== undefined ? props.fullName : ""}
          labelText="Full Name"
          type="string"
          rules={{ required: "Name field must not be empty" }}
        />
        <TextFieldController
          name={"address"}
          control={control}
          defaultValue={props.address !== undefined ? props.address : ""}
          labelText="Address"
          type="string"
          rules={{ required: "Address field must not be empty" }}
        />
        <TextFieldController
          name={"phone"}
          control={control}
          defaultValue={props.phone !== undefined ? props.phone : ""}
          labelText="Phone Number"
          type="string"
        />
        <TextFieldController
          name={"email"}
          control={control}
          defaultValue={props.email !== undefined ? props.email : ""}
          labelText="Email"
          type="email"
          rules={{ required: "Email field must not be empty" }}
        />

        <div>
          <Button type="submit" variant="contained" color="primary">
            {props.buttonText}
          </Button>
        </div>
      </form>
    </Fragment>
  );
};

export default CustomerForm;
