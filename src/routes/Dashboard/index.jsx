/* eslint-disable no-unused-vars */
import { Center, Drawer, Title } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { notifications } from "@mantine/notifications";

import { useEffect, useState } from "react";
import { BillPaymentForm } from "../../component/BillPaymentForm";
import { UpcomingPaymentsList } from "../../component/UpcomingPaymentsList";
import { fetchUpcomingBills } from "../../utils/request";
import { BillDetails } from "../BillDetails";

export function Dashboard() {
  const [records, setRecords] = useState([]);
  const [paymentOpened, { open: openPayment, close: closePayment }] =
    useDisclosure(false);
  const [detailsOpened, { open: openDetails, close: closeDetails }] =
    useDisclosure(false);

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
    openPayment();
  };

  const onPayBill = (bill) => {
    console.log("odeme olaylari");
    // await apiyeodemeyaptirt()
    notifications.show({
      title: "Ödeme Başarılı!",
      message: "Bizi tercih ettiğiniz için teşekkür ederiz.",
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
      <UpcomingPaymentsList
        records={records}
        onPayBill={openPaymentForm}
        onShowDetails={(e) => {
          console.log(e, "todo");
          openDetails(); // Open the details drawer
        }}
      />
      <Drawer opened={paymentOpened} onClose={closePayment} title="Ödeme">
        <BillPaymentForm onSubmit={onPayBill} />
      </Drawer>
      <Drawer opened={detailsOpened} onClose={closeDetails} title="Detaylar">
        <BillDetails /> {/* Render the Details component inside the drawer */}
      </Drawer>
    </>
  );
}
