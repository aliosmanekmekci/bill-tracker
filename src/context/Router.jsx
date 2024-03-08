import { Redirect, Route, Switch } from "wouter";

import { BillDetails } from "../routes/BillDetails";
import { Dashboard } from "../routes/Dashboard";
import News from "../routes/News";

export function Router() {
  return (
    <>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/dashboard" />
        </Route>
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/news" component={News} />
        <Route path="/bill/:billId" component={BillDetails} />
      </Switch>
    </>
  );
}
