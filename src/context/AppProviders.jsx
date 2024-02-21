import { ChakraProvider } from "@chakra-ui/react";
import { Router } from "./Router";

export function AppProviders() {
  return (
    <ChakraProvider>
      <Router />
    </ChakraProvider>
  );
}
