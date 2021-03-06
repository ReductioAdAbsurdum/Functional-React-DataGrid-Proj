import { Card } from "@mui/material";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { JSONTree } from "react-json-tree";

const EntityPage = () => {
  const params = useParams();

  const customersData = useSelector((state) => state.customers.data);
  const itemsData = useSelector((state) => state.items.data);
  const purchasesData = useSelector((state) => state.purchases.data);

  let displayData = {};

  if (params.type === "customer") {
    displayData = customersData.find((customer) => customer.id === params.id);
  }
  if (params.type === "item") {
    displayData = itemsData.find((customer) => customer.id === params.id);
  }
  if (params.type === "purchase") {
    displayData = purchasesData.find((customer) => customer.id === params.id);
  }

  return (
    <Card>
      <JSONTree data={displayData}  />
    </Card>
  );
};

export default EntityPage;
