import { Redirect, Route, Switch } from "wouter";
import { Dashboard } from "../routes/Dashboard";
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
      </Switch>
    </>
  );
}
