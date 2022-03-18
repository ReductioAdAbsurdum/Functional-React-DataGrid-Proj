import { makeStyles } from "@material-ui/core";
import React, { Fragment } from "react";
import { useForm } from "react-hook-form";
import Button from "@material-ui/core/Button";

import TextFieldController from "../controllers/TextFieldController";
import CheckboxController from "../controllers/CheckboxContoller";

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

const ItemForm = (props) => {
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
          name={"name"}
          control={control}
          defaultValue={props.name !== undefined ? props.name : ""}
          labelText="Name"
          type="string"
          rules={{ required: "Name field must not be empty" }}
        />

        <TextFieldController
          name={"description"}
          control={control}
          defaultValue={props.description !== undefined ? props.description : ""}
          labelText="Description"
          type="string"
        />

        <TextFieldController
          name={"price"}
          control={control}
          defaultValue={props.price !== undefined ? props.price : 1}
          labelText="Price"
          type="number"
        />

        <CheckboxController
          control={control}
          name="inStock"
          defaultValue={props.inStock !== undefined ? props.inStock : false}
          labelText="In Stock"
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

export default ItemForm;
