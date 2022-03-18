import "./Control.css";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

const Control = (props) => {

  const addNewHandler = () => {   
    props.onAddNew(); 
  }
  return (
    <div className="controlRegion">
      {props.headerText}
      <ul>
        <li onClick={addNewHandler}>
          <AddCircleOutlineIcon />
          <div>{props.addNewText}</div>
        </li>
      </ul>
    </div>
  );
};

export default Control;
