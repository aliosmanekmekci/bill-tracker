import { Center, Title } from "@mantine/core";

import { useEffect, useState } from "react";
import { UpcomingPaymentsList } from "../../component/UpcomingPaymentsList";
import { fetchUpcomingBills } from "../../utils/request";

export function Dashboard() {
  const [records, setRecords] = useState([]);

  useEffect(() => {
    fetchUpcomingBills().then((result) => {
      setRecords(result);
    });
  }, []);
  return (
    <>
      <Center>
        <Title order={3} m={10}>
          Hesap Dökümü
        </Title>
      </Center>
      <UpcomingPaymentsList records={records} />
    </>
  );
}
