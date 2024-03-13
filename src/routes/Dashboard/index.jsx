/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";

import { Center, Drawer, Input, MultiSelect, Title } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { notifications } from "@mantine/notifications";

import { BillPaymentForm } from "../../component/BillPaymentForm";
import { UpcomingPaymentsList } from "../../component/UpcomingPaymentsList";
import { fetchUpcomingBills } from "../../utils/request";
import { BillDetails } from "../BillDetails";

function filterRecords(records, typeFilters) {
  return records.filter((rec) => typeFilters.some((type) => type === rec.type));
}

export function Dashboard() {
  const [records, setRecords] = useState([]);
  const [
    paymentOpened,
    { open: openPaymentDrawer, close: closePaymentDrawer },
  ] = useDisclosure(false);
  const [detailsOpened, { open: openDetails, close: closeDetails }] =
    useDisclosure(false);

  const [typeFilter, setTypeFilter] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [selectedBill, setSelectedBill] = useState(null);

  const fetchBills = async () => {
    const bills = await fetchUpcomingBills();
    setRecords(bills);
  };

  useEffect(() => {
    fetchBills();
  }, []);

  const openPaymentForm = (bill) => {
    setSelectedBill(bill);
    openPaymentDrawer();
  };

  const onPayBill = (bill) => {
    notifications.show({
      title: "Ödeme Başarılı!",
      message: "Bizi tercih ettiğiniz için teşekkür ederiz.",
    });
    fetchBills();
  };

  const filteredRecords = typeFilter.length
    ? filterRecords(records, typeFilter)
    : records;

  const filteredSearchText = searchText.length
    ? records.filter((desc) =>
        searchTexts.some((desc) => desc === rec.description)
      )
    : records;

  return (
    <>
      <Center>
        <Title order={3} m={10}>
          Hesap Dökümü
        </Title>
      </Center>
      <MultiSelect
        placeholder="Bul..."
        data={["Borç", "Tahsilat", "Aidat", "Kira"]}
        searchable
        onChange={(e) => setTypeFilter(e)}
        value={typeFilter}
        mb="40px"
        w="200px"
      />

      {/* <Input value={searchText} onChange={(e) => setSearchText(e)} /> */}
      <UpcomingPaymentsList
        records={filteredRecords}
        onPayBill={openPaymentForm}
        onShowDetails={(e) => {
          openDetails();
        }}
      />
      <Drawer opened={paymentOpened} onClose={closePaymentDrawer}>
        <BillPaymentForm onSubmit={onPayBill} bill={selectedBill} />
      </Drawer>
      <Drawer opened={detailsOpened} onClose={closeDetails} title="Detaylar">
        <BillDetails />
      </Drawer>
    </>
  );
}
