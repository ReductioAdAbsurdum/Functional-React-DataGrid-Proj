import { Fragment } from "react";
import { Route, Redirect } from "react-router-dom";

import MainHeader from "./components/layout/MainHeader";
import ModalControll from "./components/UI/ModalControll";
import CustomersPage from "./components/pages/CustomersPage";
import ItemsPage from "./components/pages/ItemsPage";
import EntityPage from "./components/pages/EntityPage";
import PurchasesPage from "./components/pages/PurchasesPage";

function App() {
  return (
    <Fragment>
      <ModalControll/>
      <MainHeader />
      <main>
        <Route path="/" exact={true}>
          <Redirect to="/customers" />
        </Route>
        <Route path={"/customers"} exact={true}>
          <CustomersPage />
        </Route>
        <Route path={"/purchases"} exact={true}>
          <PurchasesPage/>
        </Route>
        <Route path={"/items"} exact={true}>
          <ItemsPage/>
        </Route>
        <Route path={"/entityPage/:type/:id"}>
          <EntityPage />
        </Route>
      </main>
    </Fragment>
  );
}

export default App;
