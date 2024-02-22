import { AppShell, MultiSelect, Title } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import "./index.scss";

export function AppLayout(props) {
  const [opened, { toggle }] = useDisclosure();

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: 300,
        breakpoint: "sm",
        collapsed: { mobile: !opened },
      }}
      padding="md"
    >
      <AppShell.Header>
        <div className="header">
          <Title order={3} m={10}>
            Fatura Takip Sistemi
          </Title>
          <MultiSelect
            placeholder="Bul..."
            data={["Borç", "Gecikme", "Alacak", "Bakiye"]}
            searchable
          />
        </div>
      </AppShell.Header>

      <AppShell.Navbar p="md">Navbar</AppShell.Navbar>

      <AppShell.Main>{props.children}</AppShell.Main>
    </AppShell>
  );
}
