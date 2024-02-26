import { AppShell, MultiSelect, NavLink, Title } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconAlignBoxBottomCenterFilled, IconHome2 } from "@tabler/icons-react";
import { useLocation } from "wouter";
import "./index.scss";

export function AppLayout(props) {
  const [opened, { toggle }] = useDisclosure();
  const [location, navigate] = useLocation();
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

      <AppShell.Navbar p="md">
        <NavLink
          onClick={() => navigate("/dashboard")}
          active={location === "/dashboard"}
          label="Ana Sayfa"
          leftSection={<IconHome2 size="1rem" stroke={1.5} />}
        />

        <NavLink
          active={location === "/detaylar"}
          onClick={() => navigate("/detaylar")}
          label="Detaylar"
          leftSection={
            <IconAlignBoxBottomCenterFilled size="1rem" stroke={1.5} />
          }
        />
      </AppShell.Navbar>

      <AppShell.Main>{props.children}</AppShell.Main>
    </AppShell>
  );
}
