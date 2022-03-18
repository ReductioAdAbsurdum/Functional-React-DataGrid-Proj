import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { customersActions, overlayActions } from "../../store/reduxStore";
import { useDispatch } from "react-redux";
import { Fragment } from "react";
import ActionButton from "../data-grid/ActionButton";
import Table from "../data-grid/Table";
import AddCustomerForm from "../forms/customer/AddCustomerForm";
import EditCustomerForm from "../forms/customer/EditCustomerForm";

const columns = [
  {
    field: "action",
    renderCell: (cellValues) => {
      return (
        <ActionButton
          onEyeButtonClick={cellValues.value.navigateToCustomer}
          onDeleteButtonClick={cellValues.value.removeCustomer}
          onEditButtonClick={cellValues.value.editCustomer}
        />
      );
    },
    width: 175,
    headerName: "Action",
  },
  { field: "id", headerName: "Id", width: 150 },
  { field: "fullName", headerName: "Full Name", width: 150 },
  { field: "address", headerName: "Address", width: 150 },
  { field: "phone", headerName: "Phone", width: 150 },
  { field: "email", headerName: "Email", width: 150 },
];

const CustomersPage = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const rawData = useSelector((state) => state.customers.data);
  const rows = rawData.map((customer) => ({
    id: customer.id,
    fullName: customer.fullName,
    address: customer.address,
    phone: customer.phone,
    email: customer.email,
    action: {
      navigateToCustomer: () => {
        history.push(`/entityPage/customer/${customer.id}`);
      },
      removeCustomer: () => {
        dispatch(customersActions.removeCustomer(customer.id));
      },
      editCustomer: () => {
        dispatch(
          overlayActions.setRender(<EditCustomerForm id={customer.id} />)
        );
        dispatch(overlayActions.showOverlay());
      },
    },
  }));

  const showNewCustomerForm = () => {
    dispatch(overlayActions.setRender(<AddCustomerForm />));
    dispatch(overlayActions.showOverlay());
  };

  return (
    <Fragment>
      <Table
        columns={columns}
        rows={rows}
        controlHeaderText="Customers control"
        controlAddNewText="customer"
        controlOnAddNew={showNewCustomerForm}
      />
    </Fragment>
  );
};

export default CustomersPage;
