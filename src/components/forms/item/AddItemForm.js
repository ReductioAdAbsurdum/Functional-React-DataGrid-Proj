import ItemForm from "./ItemForm";
import { useDispatch } from "react-redux";
import { overlayActions, itemsActions } from "../../../store/reduxStore";

const AddItemForm = () => {
  const dispatch = useDispatch();

  const submitFormHandler = (data) => {
    dispatch(overlayActions.closeOverlay());
    dispatch(itemsActions.addItem(data));
  };

  return (
    <ItemForm
      onSubmit={submitFormHandler}
      headerText="New Item"
      buttonText="Add"
    />
  );
};

export default AddItemForm;
