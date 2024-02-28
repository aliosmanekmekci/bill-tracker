/* eslint-disable no-unused-vars */
import { Center, Drawer, Title } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { notifications } from "@mantine/notifications";

import { useEffect, useState } from "react";
import { BillPaymentForm } from "../../component/BillPaymentForm";
import { UpcomingPaymentsList } from "../../component/UpcomingPaymentsList";
import { fetchUpcomingBills } from "../../utils/request";

export function Dashboard() {
  const [records, setRecords] = useState([]);
  const [opened, { open, close }] = useDisclosure(false);

  const fetchBills = async () => {
    console.log("bill ler cekildi karsim");
    const bills = await fetchUpcomingBills();
    setRecords(bills);
  };
  useEffect(() => {
    fetchBills();
  }, []);

  const openPaymentForm = (bill) => {
    console.log(bill);
    open();
  };

  const onPayBill = (bill) => {
    console.log("odeme olaylari");
    // await apiyeodemeyaptirt()
    notifications.show({
      title: "Default notification",
      message: "Hey there, your code is awesome! 🤥",
    });
    // datayi yenile
    fetchBills();
  };

  return (
    <>
      <Center>
        <Title order={3} m={10}>
          Hesap Dökümü
        </Title>
      </Center>
      <UpcomingPaymentsList records={records} onSelect={openPaymentForm} />
      <Drawer opened={opened} onClose={close} title="Ödeme">
        <BillPaymentForm onSubmit={onPayBill} />
      </Drawer>
    </>
  );
}
