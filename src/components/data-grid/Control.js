import "./Control.css";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import Filter from "./Filter";

const Control = (props) => {
  const addNewHandler = () => {
    props.onAddNew();
  };
  return (
    <div className="controlRegion">
      {props.headerText}
      <ul>
        <li onClick={addNewHandler}>
          <AddCircleOutlineIcon />
          <div>{props.addNewText}</div>
        </li>
        <li>
          <Filter
            labelText={props.filterLabel}
            data={props.filterData}
            field={props.filterField}
            setState ={props.filterSetState}
          />
        </li>
      </ul>
    </div>
  );
};

export default Control;
