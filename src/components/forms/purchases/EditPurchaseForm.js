import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { overlayActions, purchasesActions } from "../../../store/reduxStore";
import PurchasesForm from "./PurchasesForm";

const EditPurchaseForm = (props) => {
  const dispatch = useDispatch();
  const purchase = useSelector((state) => state.purchases.data).find(
    (purchase) => purchase.id === props.id
  );
  console.log(purchase);

  const submitFormHandler = (data) => {
    console.log(data);
    dispatch(purchasesActions.editPurchase({ id: props.id, data: data }));
    dispatch(overlayActions.closeOverlay());
  };

  return (
    <PurchasesForm
      onSubmit={submitFormHandler}
      headerText="Edit Purchase"
      buttonText="Save"
      customerId={purchase.customerId}
      itemId={purchase.itemId}
      amount={purchase.amount}
      isPaid={purchase.isPaid}
    />
  );
};

export default EditPurchaseForm;
