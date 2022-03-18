import { DataGrid } from "@mui/x-data-grid";
import { Fragment, useEffect, useState } from "react";
import Control from "./Control";

const Table = (props) => {
  const[filteredRows, setFilteredRows] = useState(props.rows)

  return (
    <Fragment>
      <Control
        headerText={props.controlHeaderText}
        addNewText={props.controlAddNewText}
        onAddNew={props.controlOnAddNew}
        filterLabel = {props.filterLabel}
        filterData = {props.rows}
        filterField = {props.filterField}
        filterSetState = {setFilteredRows}
      ></Control>
      <DataGrid columns={props.columns} rows={filteredRows} autoHeight></DataGrid>
    </Fragment>
  );
};

export default Table;
