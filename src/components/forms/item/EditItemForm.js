import ItemForm from "./ItemForm";
import { useDispatch } from "react-redux";
import { overlayActions, itemsActions } from "../../../store/reduxStore";
import { useSelector } from "react-redux";

const EditItemForm = (props) => {
  const dispatch = useDispatch();
  const item = useSelector((state) => state.items.data).find(
    (item) => item.id === props.id
  );
  console.log(item);

  const submitFormHandler = (data) => {
    dispatch(itemsActions.editItem({ id: props.id, data: data }));
    dispatch(overlayActions.closeOverlay());
  };

  return (
    <ItemForm
      onSubmit={submitFormHandler}
      headerText="Edit Item"
      buttonText="Save"
      name={item.name}
      description={item.description}
      price={item.price}
      inStock={item.inStock}
    />
  );
};

export default EditItemForm;
