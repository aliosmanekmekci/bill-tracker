import { MantineProvider } from "@mantine/core";
import { Router } from "./Router";

export function AppProviders() {
  return (
    <MantineProvider>
      <Router />
    </MantineProvider>
  );
}
