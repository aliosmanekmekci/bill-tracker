import { MantineProvider } from "@mantine/core";
import { Notifications } from "@mantine/notifications";
import { AppLayout } from "../layout";
import { Router } from "./Router";

export function AppProviders() {
  return (
    <MantineProvider>
      <Notifications />
      <AppLayout>
        <Router />
      </AppLayout>
    </MantineProvider>
  );
}
