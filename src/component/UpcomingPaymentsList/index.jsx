/* eslint-disable react/prop-types */
import { Button, Checkbox, Table } from "@mantine/core";

export function UpcomingPaymentsList(props) {
  const records = props.records;

  const renderRow = (record) => {
    const isDeptZero = record.dept === 0;
    const formatNumber = (num) => Math.max(num, 0);

    return (
      <Table.Tr key={record.id}>
        <Table.Td>
          <Checkbox aria-label="Select row" />
        </Table.Td>
        <Table.Td>{record.date}</Table.Td>
        <Table.Td>{record.type}</Table.Td>
        <Table.Td>{record.description}</Table.Td>
        <Table.Td>${formatNumber(record.dept)}</Table.Td>
        <Table.Td>${formatNumber(record.delay)}</Table.Td>
        <Table.Td>${formatNumber(record.willRecieve)}</Table.Td>
        <Table.Td
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          ${formatNumber(record.balance)}
          <Button
            onClick={() => props.onPayBill(record)}
            variant="default"
            color="red"
            size="xs"
            disabled={isDeptZero}
          >
            Öde
          </Button>
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
