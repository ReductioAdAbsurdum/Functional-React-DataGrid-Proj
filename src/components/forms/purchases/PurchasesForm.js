import { makeStyles } from "@material-ui/core";
import React, { Fragment } from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { MenuItem } from "@mui/material";
import Button from "@material-ui/core/Button";

import SelectControler from "../controllers/SelectController";
import TextFieldControler from "../controllers/TextFieldController";
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

const PurchasesForm = (props) => {
  const classes = useStyles();

  const customers = useSelector((state) => state.customers.data);
  const items = useSelector((state) => state.items.data).filter(
    (item) => item.inStock === true
  );

  const { handleSubmit, control } = useForm();

  const onSubmit = (data) => {
    props.onSubmit(data);
  };

  return (
    <Fragment>
      <h1>{props.headerText}</h1>
      <form className={classes.root} onSubmit={handleSubmit(onSubmit)}>
        <SelectControler
          control={control}
          name="customerId"
          labelText="Customer"
          defaultValue={props.customerId}
        >
          {customers.map((customer) => (
            <MenuItem
              key={customer.id}
              style={{ display: "flex", flexDirection: "row" }}
              value={customer.id}
            >
              {customer.fullName}
            </MenuItem>
          ))}
        </SelectControler>

        <SelectControler
          control={control}
          name="itemId"
          labelText="Item"
          defaultValue={props.itemId}
        >
          {items.map((item) => (
            <MenuItem
              key={item.id}
              style={{ display: "flex", flexDirection: "row" }}
              value={item.id}
            >
              {item.name}
            </MenuItem>
          ))}
        </SelectControler>

        <TextFieldControler
          name={"amount"}
          control={control}
          defaultValue={props.amount !== undefined ? props.amount : 1}
          labelText="Amount"
          type="number"
          rules={{ min: 0, max: 5 }}
        />

        <CheckboxController
          control={control}
          name="isPaid"
          defaultValue={props.isPaid !== undefined ? props.isPaid : false}
          labelText="Paid"
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

export default PurchasesForm;
