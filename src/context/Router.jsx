import { Redirect, Route, Switch } from "wouter";

import { Dashboard } from "../routes/Dashboard";
import { BillDetails } from "../routes/BillDetails";
import Details from "../routes/Details";

export function Router() {
  return (
    <>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/dashboard" />
        </Route>
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/details" component={Details} />
        <Route path="/bill/:billId" component={BillDetails} />
      </Switch>
    </>
  );
}
