import { DataGrid } from "@mui/x-data-grid";
import { Fragment } from "react";
import Control from "./Control";

const Table = (props) => {
  return (
    <Fragment>
      <Control
        headerText={props.controlHeaderText}
        addNewText={props.controlAddNewText}
        onAddNew={props.controlOnAddNew}
      ></Control>
      <DataGrid columns={props.columns} rows={props.rows} autoHeight></DataGrid>
    </Fragment>
  );
};

export default Table;
