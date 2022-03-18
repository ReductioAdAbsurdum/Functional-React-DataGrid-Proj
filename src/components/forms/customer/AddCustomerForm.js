import CustomerForm from "./CustomerForm";
import { overlayActions, customersActions } from "../../../store/reduxStore";
import { useDispatch } from "react-redux";

const AddCustomerForm = () => {
  const dispatch = useDispatch();

  const submitFormHandler = (data) => {
    dispatch(customersActions.addCustomer(data));
    dispatch(overlayActions.closeOverlay());
  };
  return (
    <CustomerForm
      onSubmit={submitFormHandler}
      headerText="New Customer"
      buttonText="Add"
    />
  );
};

export default AddCustomerForm;
