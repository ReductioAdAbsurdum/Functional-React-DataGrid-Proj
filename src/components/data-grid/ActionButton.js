import MoreVertIcon from "@mui/icons-material/MoreVert";
import DeleteIcon from "@mui/icons-material/Delete";
import VisibilityIcon from "@mui/icons-material/Visibility";
import EditIcon from '@mui/icons-material/Edit';
import { Fragment, useState } from "react";

import "./ActionButton.css";

const ActionButton = (props) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const togleExpandedHandler = () => {
    setIsExpanded((isExpanded) => !isExpanded);
  };

  const eyeButtonHandler = () => {
    if (props.onEyeButtonClick !== undefined) {
      props.onEyeButtonClick();
    }
  };

  const deleteButtonHandler = () => {
    if (props.onDeleteButtonClick !== undefined) {
      props.onDeleteButtonClick();
    }
  };
  const editButtonHandler =()=>{
    if(props.onEditButtonClick !== undefined){
      props.onEditButtonClick();
    }
  }

  return (
    <Fragment>
      <button onClick={togleExpandedHandler} style={{ textAlign: "center" }}>
        {<MoreVertIcon fontSize="small" />}
      </button>

      {isExpanded === true && (
        <div className="expanded">
          <button onClick={eyeButtonHandler}>
            <VisibilityIcon fontSize="small" />{" "}
          </button>
          <button onClick={deleteButtonHandler}>
            <DeleteIcon fontSize="small" />{" "}
          </button>
          <button onClick={editButtonHandler}>
            <EditIcon fontSize="small" />{" "}
          </button>
        </div>
      )}
    </Fragment>
  );
};

export default ActionButton;
