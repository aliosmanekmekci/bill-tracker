import { MantineProvider } from "@mantine/core";
import { AppLayout } from "../layout";
import { Router } from "./Router";

export function AppProviders() {
  return (
    <MantineProvider>
      <AppLayout>
        <Router />
      </AppLayout>
    </MantineProvider>
  );
}
