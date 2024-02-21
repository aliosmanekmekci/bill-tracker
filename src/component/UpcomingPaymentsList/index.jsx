import { ActionIcon, Checkbox, Table, rem } from "@mantine/core";
import { IconSettings } from "@tabler/icons-react";

export function UpcomingPaymentsList(props) {
  const records = props.records;

  const renderRow = (record) => {
    return (
      <Table.Tr key={record.id}>
        <Table.Td>
          <Checkbox aria-label="Select row" />
        </Table.Td>
        <Table.Td>{record.date}</Table.Td>
        <Table.Td>{record.type}</Table.Td>
        <Table.Td>{record.description}</Table.Td>
        <Table.Td>${record.dept}</Table.Td>
        <Table.Td>${record.delay}</Table.Td>
        <Table.Td>${record.willRecieve}</Table.Td>
        <Table.Td
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          ${record.balance}
          <ActionIcon
            variant="default"
            aria-label="Edit"
            onClick={() => {
              // Handle the edit action here
            }}
            style={{ marginLeft: "auto" }}
          >
            <IconSettings style={{ width: rem(20) }} stroke={1.5} />
          </ActionIcon>
        </Table.Td>
      </Table.Tr>
    );
  };

  return (
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
      <Table.Tbody>{records.map(renderRow)}</Table.Tbody>
    </Table>
  );
}
