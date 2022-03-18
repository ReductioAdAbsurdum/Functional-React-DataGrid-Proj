import CustomerForm from "./CustomerForm";
import { overlayActions, customersActions } from "../../../store/reduxStore";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const EditCustomerForm = (props) => {
  const dispatch = useDispatch();
  const customer = useSelector((state) => state.customers.data).find(
    (customer) => customer.id === props.id
  );
  console.log(customer);

  const submitFormHandler = (data) => {
    dispatch(overlayActions.closeOverlay());
    dispatch(customersActions.editCustomer({ id: props.id, data: data }));
  };
  return (
    <CustomerForm
      onSubmit={submitFormHandler}
      headerText="Edit Customer"
      buttonText="Save"
      fullName={customer.fullName}
      address={customer.address}
      phone={customer.phone}
      email={customer.email}
    />
  );
};

export default EditCustomerForm;
