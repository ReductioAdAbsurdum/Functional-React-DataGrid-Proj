import { useSelector } from "react-redux";
import Table from "../data-grid/Table";
import { Fragment } from "react";

import ActionButton from "../data-grid/ActionButton";
import { useHistory } from "react-router-dom";
import { purchasesActions, overlayActions } from "../../store/reduxStore";
import { useDispatch } from "react-redux";
import { Checkbox } from "@material-ui/core";
import AddPurchaseForm from "../forms/purchases/AddPurchaseForm";
import EditPurchaseForm from "../forms/purchases/EditPurchaseForm";

const columns = [
  {
    field: "action",
    renderCell: (cellValues) => {
      return (
        <ActionButton
          onEyeButtonClick={cellValues.value.navigateToPurchase}
          onDeleteButtonClick={cellValues.value.removePurchase}
          onEditButtonClick={cellValues.value.editPurchase}
        />
      );
    },
    width: 175,
    headerName: "Action",
  },
  { field: "id", headerName: "Id", width: 100 },
  { field: "customerId", headerName: "Customer Id", width: 120 },
  { field: "itemId", headerName: "Item Id", width: 100 },
  {
    field: "amount",
    headerName: "Amount",
    width: 100,
    type: "number",
  },
  {
    field: "isPaid",
    headerName: "Is paid",
    width: 100,
    renderCell: (cellValues) => {
      return (
        <Checkbox disabled={true} defaultChecked={cellValues.value.isPaid} />
      );
    },
  },
];

const PurchasesPage = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const rawData = useSelector((state) => state.purchases.data);
  const rows = rawData.map((purchase) => ({
    id: purchase.id,
    customerId: purchase.customerId,
    itemId: purchase.itemId,
    amount: purchase.amount,
    action: {
      navigateToPurchase: () => {
        history.push(`/entityPage/purchase/${purchase.id}`);
      },
      removePurchase: () => {
        dispatch(purchasesActions.removePurchase(purchase.id));
      },
      editPurchase: () => {
        dispatch(
          overlayActions.setRender(<EditPurchaseForm id={purchase.id} />)
        );
        dispatch(overlayActions.showOverlay());
      },
    },
    isPaid: { isPaid: purchase.isPaid },
  }));

  const showNewPurchaseForm = () => {
    dispatch(overlayActions.setRender(<AddPurchaseForm />));
    dispatch(overlayActions.showOverlay());
  };
  return (
    <Fragment>
      <Table
        columns={columns}
        rows={rows}
        controlHeaderText="Purchases control"
        controlAddNewText="purchase"
        controlOnAddNew={showNewPurchaseForm}
      />
    </Fragment>
  );
};

export default PurchasesPage;
