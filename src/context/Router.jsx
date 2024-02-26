import { Redirect, Route, Switch } from "wouter";
import { Dashboard } from "../routes/Dashboard";

export function Router() {
  return (
    <>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/dashboard" />
        </Route>
        <Route path="/dashboard" component={Dashboard} />
      </Switch>
      {/* Router will be implemented in here */}
    </>
  );
}
