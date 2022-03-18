import { useDispatch } from "react-redux";
import { overlayActions, purchasesActions } from "../../../store/reduxStore";
import PurchasesForm from "./PurchasesForm";

const AddPurchaseForm = () => {
  const dispatch = useDispatch();

  const submitFormHandler = (data) => {
    dispatch(overlayActions.closeOverlay());
    dispatch(purchasesActions.addPurchase(data));
  };

  return (
    <PurchasesForm
      onSubmit={submitFormHandler}
      headerText="New Purchase"
      buttonText="Add"
    />
  );
};

export default AddPurchaseForm;
