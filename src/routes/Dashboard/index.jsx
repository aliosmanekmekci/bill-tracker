import { Checkbox, Table, Title } from "@mantine/core";
import { useState } from "react";

export function Dashboard() {
  const elements = [
    {
      id: 1,
      date: "01.02.2024",
      description: "2024 - Subat ayi aidati ayi",
      type: "Borç",
      dept: 0.0,
      delay: 0.0,
      willRecieve: 0.0,
      balance: 0.0,
    },
    {
      id: 2,
      date: "01.02.2024",
      description: "#9813730 borçlari için kredi karti ile",
      type: "Tahsilat",
      dept: 0.0,
      delay: 0.0,
      willRecieve: 0.0,
      balance: 0.0,
    },
    {
      id: 3,
      date: "01.02.2024",
      description: "#9813730 borçlari için kredi karti ile",
      type: "Aidat",
      dept: 0.0,
      delay: 0.0,
      willRecieve: 0.0,
      balance: 0.0,
    },
    {
      id: 4,
      date: "01.02.2024",
      description: "#9813730 borçlari için kredi karti ile",
      type: "Kira",
      dept: 0.0,
      delay: 0.0,
      willRecieve: 0.0,
      balance: 0.0,
    },
    {
      id: 5,
      date: "01.02.2024",
      description: "#9813730 borçlari için kredi karti ile",
      type: "Fatura",
      dept: 0.0,
      delay: 0.0,
      willRecieve: 0.0,
      balance: 0.0,
    },
  ];

  const [selectedRows, setSelectedRows] = useState([]);

  const rows = elements.map((element) => (
    <Table.Tr
      key={element.id}
      bg={
        selectedRows.includes(element.id)
          ? "var(--mantine-color-blue-light)"
          : undefined
      }
    >
      <Table.Td>
        <Checkbox
          aria-label="Select row"
          checked={selectedRows.includes(element.id)}
          onChange={(event) =>
            setSelectedRows(
              event.currentTarget.checked
                ? [...selectedRows, element.id]
                : selectedRows.filter((id) => id !== element.id)
            )
          }
        />
      </Table.Td>
      <Table.Td>{element.date}</Table.Td>
      <Table.Td>{element.type}</Table.Td>
      <Table.Td>{element.description}</Table.Td>
      <Table.Td>${element.dept}</Table.Td>
      <Table.Td>${element.delay}</Table.Td>
      <Table.Td>${element.willRecieve}</Table.Td>
      <Table.Td>${element.balance}</Table.Td>
    </Table.Tr>
  ));

  return (
    <>
      <Title order={3}>Hesap Dökümü</Title>
      <Table striped highlightOnHover withColumnBorders>
        <Table.Thead>
          <Table.Tr>
            <Table.Th />
            <Table.Th>Tarih</Table.Th>
            <Table.Th>Borç Tipi</Table.Th>
            <Table.Th>Açıklama</Table.Th>
            <Table.Th>Borç</Table.Th>
            <Table.Th>Gecikme</Table.Th>
            <Table.Th>Alacak</Table.Th>
            <Table.Th>Bakiye</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>{rows}</Table.Tbody>
      </Table>
    </>
  );
}
