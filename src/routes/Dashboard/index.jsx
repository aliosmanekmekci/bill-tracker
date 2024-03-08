/* eslint-disable no-unused-vars */
import { Center, Drawer, MultiSelect, Title } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { notifications } from "@mantine/notifications";

import { useEffect, useState } from "react";
import { BillPaymentForm } from "../../component/BillPaymentForm";
import { UpcomingPaymentsList } from "../../component/UpcomingPaymentsList";
import { fetchUpcomingBills } from "../../utils/request";
import { BillDetails } from "../BillDetails";

function filterRecords(records, typeFilters) {
  return records.filter((rec) => typeFilters.some((type) => type === rec.type));
}

export function Dashboard() {
  const [records, setRecords] = useState([]);
  const [paymentOpened, { open: openPayment, close: closePayment }] =
    useDisclosure(false);
  const [detailsOpened, { open: openDetails, close: closeDetails }] =
    useDisclosure(false);
  const [typeFilter, setTypeFilter] = useState([]);

  const fetchBills = async () => {
    const bills = await fetchUpcomingBills();
    setRecords(bills);
  };

  useEffect(() => {
    fetchBills();
  }, []);

  const openPaymentForm = (bill) => {
    openPayment();
  };

  const onPayBill = (bill) => {
    // await apiyeodemeyaptirt()
    notifications.show({
      title: "Ödeme Başarılı!",
      message: "Bizi tercih ettiğiniz için teşekkür ederiz.",
    });
    // datayi yenile
    fetchBills();
  };

  const filteredRecords = typeFilter.length
    ? filterRecords(records, typeFilter)
    : records;

  // console.log(filteredRecords);
  // console.log(typeFilter);

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
      />
      <UpcomingPaymentsList
        records={filteredRecords}
        onPayBill={openPaymentForm}
        onShowDetails={(e) => {
          openDetails();
        }}
      />
      <Drawer opened={paymentOpened} onClose={closePayment} title="Ödeme">
        <BillPaymentForm onSubmit={onPayBill} />
      </Drawer>
      <Drawer opened={detailsOpened} onClose={closeDetails} title="Detaylar">
        <BillDetails />
      </Drawer>
    </>
  );
}
