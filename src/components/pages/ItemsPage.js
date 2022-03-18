import { useSelector } from "react-redux";
import ActionButton from "../data-grid/ActionButton";
import { useHistory } from "react-router-dom";
import { itemsActions, overlayActions } from "../../store/reduxStore";
import { useDispatch } from "react-redux";
import { Checkbox } from "@material-ui/core";
import { Fragment } from "react";
import Table from "../data-grid/Table";
import AddItemForm from "../forms/item/AddItemForm";
import EditItemForm from "../forms/item/EditItemForm";

const ItemsPage = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const columns = [
    {
      field: "action",
      renderCell: (cellValues) => {
        return (
          <ActionButton
            onEyeButtonClick={cellValues.value.navigateToItem}
            onDeleteButtonClick={cellValues.value.removeItem}
            onEditButtonClick={cellValues.value.editItem}
          />
        );
      },
      width: 175,
      headerName: "Action",
    },
    { field: "id", headerName: "Id", width: 150 },
    { field: "name", headerName: "Name", width: 150 },
    { field: "description", headerName: "Description", width: 150 },
    { field: "price", headerName: "Price", width: 150 },
    {
      field: "inStock",
      headerName: "In Stock",
      width: 100,
      renderCell: (cellValues) => {
        return (
          <Checkbox disabled={true} defaultChecked={cellValues.value.inStock} />
        );
      },
    },
  ];

  const rawData = useSelector((state) => state.items.data);
  const rows = rawData.map((item) => ({
    id: item.id,
    name: item.name,
    description: item.description,
    price: item.price,
    action: {
      navigateToItem: () => {
        history.push(`/entityPage/item/${item.id}`);
      },
      removeItem: () => {
        dispatch(itemsActions.removeItem(item.id));
      },
      editItem: () => {
        dispatch(overlayActions.setRender(<EditItemForm id={item.id} />));
        dispatch(overlayActions.showOverlay());
      },
    },
    inStock: { inStock: item.inStock },
    test: item.inStock
  }));


  const showNewItemForm = () => {
    dispatch(overlayActions.showOverlay());
    dispatch(overlayActions.setRender(<AddItemForm />));
  };

  return (
    <Fragment>
      <Table
        columns={columns}
        rows={rows}
        controlHeaderText="Items control"
        controlAddNewText="item"
        controlOnAddNew={showNewItemForm}
      />
    </Fragment>
  );
};

export default ItemsPage;
